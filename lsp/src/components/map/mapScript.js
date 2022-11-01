import {useState} from "react";
import customersImage from './image/customer.png'
import dcImage from './image/dc.png'
import factoryImage from './image/factory.png'
import supplierImage from './image/supplier.png'
import VKMImage from './image/ВКМ.png'
import DepoImg from './image/depo.png'
import demandFulfillment from "../../pages/resultAll/DemandFulfillment/DemandFulfillment";



export const createAllMapObjects = (data, road) => {

    let customers = data["customers"]
    let dcsAndFactories = data["dcsAndFactories"]
    let suppliers = data["suppliers"]
    let productsFlows = data["productsFlows"]
    let demandFulfillments = data["demandFulfillments"]
    let groups = data["groupsSites"]

    return createMap(customers, dcsAndFactories, suppliers, productsFlows, demandFulfillments, groups, road)
}


const  createPlacemarks =  (customers, dcsAndFactories, suppliers, productsFlows, demandFulfillments, groups, road, toRoad) => {



    let result ={
        marks:[],
        lines:[],
        sonks:[]
    }

    let collection = []

    let currentId = 0

    let groupsVKM = []
    let productFlowsVKMSONK = []



    groups.forEach((gs, index)=>{
        if(gs.groupId.includes('ВКМ')){
          groupsVKM.push(gs)
        }
    })

    productsFlows.forEach((pf)=>{

    })

    if(customers) {
        customers.forEach((item, index) => {
            if (item.locations !== null) {
                let mark = {
                    type: 'Feature',
                    id: currentId++,
                    geometry: {
                        type: 'Point',
                        coordinates: [item.locations.latitude, item.locations.longitude]
                    },
                    properties: {
                        hintContent: item.name,
                        balloonContentHeader: item.name,
                        balloonContentBody: "Почтовый индекс: " + item.locations.code,
                    },
                    options: {
                        iconLayout: "default#image",
                        iconImageHref: customersImage,
                        iconImageSize: [17, 17]
                    }
                }
                result.marks.push(mark)
            }
        })
    }

    const setIconDCFactories = (item) =>{
        let icon

        if(item.name.includes("dc")){
            return dcImage
        } else if(item.name.includes("extsup")){
            return factoryImage
        }
     else {
            groupsVKM.forEach((gs, key) =>{
                if(gs.contents === item.name){

                        icon =  VKMImage


                }


            })

            if(!icon){
                    icon = DepoImg
            }

    }
     return icon
    }
if(dcsAndFactories) {
    dcsAndFactories.forEach((item, index) => {
        if (item.locations !== null) {
            let avilableCoordinate = collection.find(placemark => placemark.geometry.coordinates[1]
                === item.locations.longitude)
            if (item.name !== null) {
                if (avilableCoordinate !== null) {
                    if (!item.name.includes('dc_sup') && !item.name.includes('sup_dc')) {
                        let mark = {
                            type: 'Feature',
                            id: currentId++,
                            geometry: {
                                type: 'Point',
                                coordinates: [item.locations.latitude, item.locations.longitude + 0.0001]
                            },
                            properties: {
                                hintContent: item.name,
                                balloonContentHeader: item.name,
                                balloonContentBody: "Почтовый индекс: " + item.locations.code,
                            },
                            options: {
                                iconLayout: "default#image",
                                iconImageHref: setIconDCFactories(item),
                                iconImageSize: [32, 32]
                            }
                        }
                        result.marks.push(mark)
                    }
                } else {
                    if (!item.name.includes('dc_sup') && !item.name.includes('sup_dc')) {
                        let mark = {
                            type: 'Feature',
                            id: currentId++,
                            geometry: {
                                type: 'Point',
                                coordinates: [item.locations.latitude, item.locations.longitude]
                            },
                            properties: {
                                hintContent: item.name,
                                balloonContentHeader: item.name,
                                balloonContentBody: "Почтовый индекс: " + item.locations.code,
                            },
                            options: {
                                iconLayout: "default#image",
                                iconImageHref: setIconDCFactories(item),
                                iconImageSize: [32, 32]
                            }
                        }
                        result.marks.push(mark)
                    }
                }
            }
        }
    })
}

if(suppliers) {
    suppliers.forEach((item, index) => {
        if (item.locations !== null) {
            let avilableCoordinate = collection.find(placemark => placemark.geometry.coordinates[0]
                === item.locations.latitude)
            if (item.name !== null) {
                if (avilableCoordinate !== null) {
                    let mark = {
                        type: 'Feature',
                        id: currentId++,
                        geometry: {
                            type: 'Point',
                            coordinates: [item.locations.latitude + 0.0001, item.locations.longitude]
                        },
                        properties: {
                            hintContent: item.name,
                            balloonContentHeader: item.name,
                            balloonContentBody: "Почтовый индекс: " + item.locations.code,
                        },
                        options: {
                            iconLayout: "default#image",
                            iconImageHref: supplierImage,
                            iconImageSize: [32, 32]
                        }
                    }
                    result.marks.push(mark)
                } else {
                    let mark = {
                        type: 'Feature',
                        id: currentId++,
                        geometry: {
                            type: 'Point',
                            coordinates: [item.locations.latitude, item.locations.longitude]
                        },
                        properties: {
                            hintContent: item.name,
                            balloonContentHeader: item.name,
                            balloonContentBody: "Почтовый индекс: " + item.locations.code,
                        },
                        options: {
                            iconLayout: "default#image",
                            iconImageHref: supplierImage,
                            iconImageSize: [32, 32]
                        }
                    }
                    result.marks.push(mark)
                }
            }

        }
    })
}

    productsFlows.forEach((item, index)=>{
        let from
        let to
        if(item.from.includes("cust")){
            if(customers)
                from = customers.find(elem => elem.name === item.from)
        }
        if(item.to.includes("cust")){
            if(customers)
                to = customers.find(elem => elem.name === item.to)

        }
        if(item.from.includes("sup")&&!item.from.includes("extsup")){
            if(suppliers)
                from = suppliers.find(elem => elem.name === item.from)
        }
        if(item.to.includes("sup")&&!item.from.includes("extsup")){
            if(suppliers)
                to = suppliers.find(elem => elem.name === item.to)
        }
        if(item.from.includes("dc")||item.from.includes("fact")||item.from.includes("extsup")){
            if(dcsAndFactories)
                from = dcsAndFactories.find(elem => elem.name === item.from)
        }
        if(item.to.includes("dc")||item.to.includes("fact")||item.to.includes("extsup")){
            if(dcsAndFactories)
                to = dcsAndFactories.find(elem => elem.name === item.to)
        }

        if(from && to) {
            let inLinesTo = result.lines.find(elem => elem.geometry.coordinates[0][0] === from.locations.latitude &&
                elem.geometry.coordinates[0][0] === from.locations.latitude &&
                elem.geometry.coordinates[0][1] === from.locations.longitude &&
                elem.geometry.coordinates[1][0] === to.locations.latitude &&
                elem.geometry.coordinates[1][1] === to.locations.longitude)


            let row = {
                vkm:'',
                client:'',
                sonk:0
            }

            if(toRoad) {
                let sonk = 0;
                if (item.product.includes('СОНК')) {
                    if (result.sonks.length === 0) {
                        row.vkm = item.from
                        productsFlows.forEach((pf) => {
                            if ((pf.from === row.vkm) && (pf.product.includes('СОНК'))) {
                                sonk += Math.ceil(pf.flow)
                            }
                        })
                        row.sonk = sonk;
                        result.sonks.push(row)
                         row = {
                            vkm:'',
                            client: item.to,
                            sonk: Math.ceil(item.flow)
                        }
                        result.sonks.push(row)
                    } else {
                        if (!result.sonks.find(elem => elem.vkm === item.from)) {
                            row.vkm = item.from
                            productsFlows.forEach((pf) => {
                                if ((pf.from === row.vkm) && (pf.product.includes('СОНК'))) {
                                    let count = Math.ceil(pf.flow)
                                    sonk += count
                                }
                            })
                            row.sonk = sonk
                            result.sonks.push(row)
                            row = {
                                vkm:'',
                                client: item.to,
                                sonk: Math.ceil(item.flow)
                            }
                            result.sonks.push(row)
                        } else {
                            row.client = item.to
                            row.sonk = Math.ceil(item.flow)
                            result.sonks.push(row)
                        }

                    }
                }
            }

            if (!inLinesTo) {


                let demands = []

                const getItemsDemandFulfillments = (demands, demandFulfillments, to, item) => {

                    let currentDF = demandFulfillments.filter(elem => elem.customer === to.name)
                    // let currentPF = productsFlows.filter(elem => elem.to === to.name)

                    // for(let i = 0; i<currentPF.length; i++){
                    for (let j = 0; j < currentDF.length; j++) {
                        // if (currentPF[i].product === currentDF[j].product) {
                        let df = currentDF[j]
                        demands.push(df)
                    }
                    //}
                }
                // }

                const setBalloonContent = (demands) => {
                    let content = ""
                    demands.forEach((item, index) => {
                        if (item.percentage === 100) {
                            content += '<div class="balloonContentItem high">' +
                                '<div><span>Номенклатура: ' + item.product + '</span></div>' +
                                '<div><span>Поставлено: ' + item.satisfied + '</span></div>' +
                                '<div><span>Процент от необходимой поставки: ' + item.percentage + '</span></div>' +
                                '</div>'
                        }

                        if (item.percentage < 100 && item.percentage > 0) {
                            content += '<div class="balloonContentItem medium">' +
                                '<div><span>Номенклатура: ' + item.product + '</span></div>' +
                                '<div><span>Поставлено: ' + item.satisfied + '</span></div>' +
                                '<div><span>Процент от необходимой поставки: ' + item.percentage + '</span></div>' +
                                '</div>'
                        }

                        if (item.percentage === 0) {
                            content += '<div class="balloonContentItem low">' +
                                '<div><span>Номенклатура: ' + item.product + '</span></div>' +
                                '<div><span>Поставлено: ' + item.satisfied + '</span></div>' +
                                '<div><span>Процент от необходимой поставки: ' + item.percentage + '</span></div>' +
                                '</div>'
                        }
                    })

                    if (content === "") {
                        content += '<div class="balloonContentItem nothing">' + '<div><span>' + 'Данных о перевозке ненайдено!' +
                            '</span></div></div>'
                    }

                    return '<div class="balloonContent">' + content + '</div>';
                }

                if (from && to) {

                    getItemsDemandFulfillments(demands, demandFulfillments, to, item)


                    if (demands) {
                        let line = {
                            type: 'Feature',
                            id: currentId++,
                            geometry: {
                                type: 'LineString',
                                coordinates: [[from.locations.latitude, from.locations.longitude], [to.locations.latitude, to.locations.longitude]],
                            }, options: {
                                opacity: 1,
                                strokeWidth: 1,
                                strokeColor: '#222'
                            },
                            properties: {
                                hintContent: from.name + " ➔ " + to.name,
                                balloonContentHeader: '<h3>' + 'Данные о перемещении грузов' + '</h3>',
                                balloonContentBody: setBalloonContent(demands)
                            }
                        }
                        result.lines.push(line)

                    } else {
                        let line = {
                            type: 'Feature',
                            id: currentId++,
                            geometry: {
                                type: 'LineString',
                                coordinates: [[from.locations.latitude, from.locations.longitude], [to.locations.latitude, to.locations.longitude]],
                            }, options: {
                                opacity: 0.2,
                                strokeWidth: 1,
                                strokeColor: '#000000'
                            },
                            properties: {
                                hintContent: from.name + " ➔ " + to.name,
                                balloonContentHeader: item.distance,
                                balloonContentBody: "Данных о перемещении не найдено",
                            }
                        }
                        result.lines.push(line)
                    }
                }

            }
        }

    })



    return result;
}

function createLine (currentId, item, from, to, color) {
    let line = {
        type: 'Feature',
        id: currentId++,
        geometry: {
            type: 'LineString',
            coordinates: [[from.locations.latitude, from.locations.longitude], [to.locations.latitude, to.locations.longitude]],
        }, options: {
            opacity: 0.2,
            strokeWidth: 1,
            strokeColor: color
        },
        properties: {
            hintContent: from.name + " ➔ " + to.name,
            balloonContentHeader: item.distance,
            balloonContentBody: "Продукт:" + item.product + "Откуда: " + from.name + <br/> + "Куда: " + to.name,
        }
    }

    return line;
}

function createMap(customers, dcsAndFactories, suppliers, productsFlows, demandFulfillments, groups, road){

    let newDcsAndFactories = []
    let newProductFlows = []
    let newCustomers = []
    let newSuppliers = []
    let newDcsAndFactoriesWithProduct = []



    if(road === "Общая"){
        return createPlacemarks(customers, dcsAndFactories, suppliers, productsFlows, demandFulfillments, groups, road, false)
    }
    else {





        dcsAndFactories.forEach((item)=>{
            if(item.road !== null) {
                if (item.road.name === road) {
                    newDcsAndFactories.push(item)
                }
            }
        })

        newDcsAndFactories.forEach((newDcsAndFactory)=>{
           productsFlows.forEach((productsFlow)=>{
               if(productsFlow.product.includes('СОНК')) {
                   if (productsFlow.from === newDcsAndFactory.name ||
                       productsFlow.to === newDcsAndFactory.name) {
                       newProductFlows.push(productsFlow)
                       newDcsAndFactoriesWithProduct.push(newDcsAndFactory)
                   }
               }
            })
        })



        newProductFlows.forEach((newProductFlow)=>{
            customers.forEach((customer)=>{
                if(newProductFlow.from === customer.name ||
                newProductFlow.to === customer.name){
                    if(newCustomers.length === 0){
                        newCustomers.push(customer)
                    }
                    if(newCustomers.filter(i=>JSON.stringify(  Object.entries(i).sort()) !==
                        JSON.stringify(Object.entries(customer).sort())  ).length > 0)
                    newCustomers.push(customer)
                }
            })
        })



        newProductFlows.forEach((newProductFlow)=>{
            dcsAndFactories.forEach((dcsAndFactory)=>{

                if(newProductFlow.from === dcsAndFactory.name ||
                    newProductFlow.to === dcsAndFactory.name){
                    if(newSuppliers.filter(i=>JSON.stringify(  Object.entries(i).sort()) !==
                        JSON.stringify(Object.entries(dcsAndFactory).sort())  ).length > 0)
                        newDcsAndFactories.push(dcsAndFactory)
                }
            })
        })




    }



   return  createPlacemarks(newCustomers, newDcsAndFactoriesWithProduct, null,
       newProductFlows, demandFulfillments, groups, road, true)
}
