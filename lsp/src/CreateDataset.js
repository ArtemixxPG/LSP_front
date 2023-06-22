export const createFinalStatVFDataset = (vehicleFlows) =>{

    let vehicleParametersCapacity = {
        auto20T: 0,
        auto5T: 0,
        auto10T: 0,
        poluvagon: 0,
        platforma: 0,
    }

    let vehicleParameters = {
        auto20T: 0,
        auto5T: 0,
        auto10T: 0,
        poluvagon: 0,
        platforma: 0,
    }


    vehicleFlows.forEach((item, index)=>{
        if(item.vehicleType==="Авто 20 т КП"){
            vehicleParametersCapacity.auto20T+=item.vehicleTrips;
            vehicleParameters.auto20T += item.actualLoad;
        }

        if(item.vehicleType==="Авто 10 т КП"){
            vehicleParametersCapacity.auto10T+=item.vehicleTrips;
            vehicleParameters.auto10T += item.actualLoad;
        }

        if(item.vehicleType==="Авто 5 т КП"){
            vehicleParametersCapacity.auto5T+=item.vehicleTrips;
            vehicleParameters.auto5T+= item.actualLoad;
        }

        if(item.vehicleType==="Полувагон КП"){
            vehicleParametersCapacity.poluvagon+=item.vehicleTrips;
            vehicleParameters.poluvagon = item.actualLoad;
        }

        if(item.vehicleType==="Ж/д платформа КП"){
            vehicleParametersCapacity.platforma+=item.vehicleTrips;
            vehicleParameters.platforma += item.actualLoad;
        }

    })

    console.log(vehicleParameters)
    console.log(vehicleParametersCapacity)

    const vehicleFlowsNew = {
        vehicleParametersCapacity:vehicleParametersCapacity,
        vehicleParameters:vehicleParameters
    }

    return vehicleFlowsNew

}

export const createFinalStatNEDataSet = (data)=> {

    const namedExpressions = data["namedExpressions"]

    let namedExpressionsNew =
        [
            {
                InboundProcessingCost:0,
                OutboundProcessingCost:0,
                ProductionCost:0,
                TransportationCost:0,
                SupplyCost:0,
                TotalCost:0,
                Revenue:0,
                Profit:0,
            }
        ]



    namedExpressions.forEach((item, key) =>{

        namedExpressionsNew.forEach((obj, _key)=>{

            for(let names in obj){
                for(let outer_names in item){
                    if(names.toString() === outer_names.toString()){
                        obj[names] = item.value;
                        break;
                    }
                }
            }
        })
    })

    return {
        namedExpressionsNew: namedExpressionsNew
    }


}

export const createFinalStatDFDataSet = (demandFulfillment) => {




    let demandForProduct = {
        min: 0,
        satisfied: 0,
        result: 0,
    }

    let demandForOrder = {
        percentage: 0,
        result: 0,
    }


    demandFulfillment.forEach((item, index) => {
        demandForProduct.min += item.demandMin
        demandForProduct.satisfied += item.satisfied
        if (item.percentage >= 0.9) {
            demandForOrder.percentage += 1
        }
    })


    demandForProduct.result = demandForProduct.satisfied * 100 / demandForProduct.min

    demandForOrder.result = demandForOrder.percentage * 100 / demandFulfillment.length


    return {
            demandForProduct: demandForProduct,
            demandForOrder: demandForOrder
    }
}