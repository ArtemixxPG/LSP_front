
const translateNENames = [
    "Разгрузка",
    "Загрузка",
    "Производство",
    "Транспорт",
    "Закупки у поставщиков",
    "Общие затраты",
    "Выручка",
    "Прибыль",
    "Max кол-во ТС по типу"
]

const translateOSNames = [
    "Издержки хранения",
    "Цена на закрытии",
    "Стоимость входящей обработки",
    "Стоимость выходящей обработки",
    "Стоимость перевозки",
    "Начальная стоимость",
    "Прочие расходы",
    "Задача",
    "Штрафы",
    "Стоимость производства",
    "Доход",
    "Стоимость поставки",
    "Тарифы"
]


export function replaceNumeric(data){

    data.forEach((item)=>{
        for(let key in item){
            if(!isNaN(item[key])){
                let stringValue = item[key].toString()
                if(stringValue.includes('.')) {
                    if(Math.abs(item[key]) > 1){
                        let degree = stringValue.split('.')[0].length
                        if(item[key] > 1000) {
                            item[key] = stringValue.at(0) + '.' + stringValue.at(1) + stringValue.at(2) + '*10' + '^' + degree
                        }
                    } else {
                        let degree = stringValue.split('.')[1].length
                        item[key] = stringValue.at(0) + '.' + stringValue.at(1) + stringValue.at(2) + '*10' + '^-' + degree
                    }
                } else {
                    let degree = stringValue.split('.')[0].length
                    if(item[key] > 1000) {
                        item[key] = stringValue.at(0) + '.' + stringValue.at(1) + stringValue.at(2) + '*10' + '^' + degree
                    }
                }
            }
        }
    })

}



export function createChartDataSet(dataFirstExperiment, dataSecondExperiment, datasetType){

    let resultDataSet = []

    let node = {
        name : '',
        valueFirstExperiment: 0,
        valueSecondExperiment: 0,
    }

    let nodeOS = {
        name : '',
        valueFirstExperiment: 0,
        valueSecondExperiment: 0,
        nameRu: ''
    }

    if(datasetType === 'ne') {

        dataFirstExperiment.forEach((item) => {
            node.name = item.expression_name
            node.valueFirstExperiment = item.value
            resultDataSet.push(node)
        })

        dataSecondExperiment.forEach((item, index) => {
            resultDataSet[index].valueSecondExperiment = item.value
        })
    }

    if(datasetType === 'om') {

        dataFirstExperiment.forEach((item) => {
            node.name = item.expression_name
            node.valueFirstExperiment = item.value
            resultDataSet.push(node)
        })

        dataSecondExperiment.forEach((item, index) => {
            resultDataSet[index].valueSecondExperiment = item.value
        })
    }

    if(datasetType === 'os') {

        dataFirstExperiment.forEach((item) => {
            for(let key in item) {
                if(key==='carrying_cost') {
                    nodeOS.name = key
                    nodeOS.valueFirstExperiment = item[key]
                    nodeOS.nameRu = translateOSNames[0]
                    resultDataSet.push(node)
                }
                if(key==='closing_cost') {
                    nodeOS.name = key
                    nodeOS.valueFirstExperiment = item[key]
                    nodeOS.nameRu = translateOSNames[1]
                    resultDataSet.push(node)
                }
                if(key==='inbound_processing_cost') {
                    nodeOS.name = key
                    nodeOS.valueFirstExperiment = item[key]
                    nodeOS.nameRu = translateOSNames[2]
                    resultDataSet.push(node)
                }
                if(key==='outbound_processing_cost') {
                    nodeOS.name = key
                    nodeOS.valueFirstExperiment = item[key]
                    nodeOS.nameRu = translateOSNames[3]
                    resultDataSet.push(node)
                }
                if(key==='transportation_cost') {
                        nodeOS.name = key
                        nodeOS.valueFirstExperiment = item[key]
                        nodeOS.nameRu = translateOSNames[4]
                        resultDataSet.push(node)
                    }
                if(key==='initial_cost') {
                        nodeOS.name = key
                        nodeOS.valueFirstExperiment = item[key]
                        nodeOS.nameRu = translateOSNames[5]
                        resultDataSet.push(node)
                    }
                if(key==='other_cost') {
                        nodeOS.name = key
                        nodeOS.valueFirstExperiment = item[key]
                        nodeOS.nameRu = translateOSNames[6]
                        resultDataSet.push(node)
                    }
                if(key==='objective') {
                        nodeOS.name = key
                        nodeOS.valueFirstExperiment = item[key]
                        nodeOS.nameRu = translateOSNames[7]
                        resultDataSet.push(node)
                    }
                if(key==='penalties') {
                            nodeOS.name = key
                            nodeOS.valueFirstExperiment = item[key]
                            nodeOS.nameRu = translateOSNames[8]
                            resultDataSet.push(node)
                        }
                if(key==='production_cost') {
                            nodeOS.name = key
                            nodeOS.valueFirstExperiment = item[key]
                            nodeOS.nameRu = translateOSNames[9]
                            resultDataSet.push(node)
                        }
                if(key==='revenue') {
                            nodeOS.name = key
                            nodeOS.valueFirstExperiment = item[key]
                            nodeOS.nameRu = translateOSNames[10]
                            resultDataSet.push(node)
                        }
                if(key==='supply_cost') {
                            nodeOS.name = key
                            nodeOS.valueFirstExperiment = item[key]
                            nodeOS.nameRu = translateOSNames[11]
                            resultDataSet.push(node)
                        }

                    if(key==='tariffs') {
                        nodeOS.name = key
                        nodeOS.valueFirstExperiment = item[key]
                        nodeOS.nameRu = translateOSNames[12]
                        resultDataSet.push(node)
                    }
            }
        })

        dataSecondExperiment.forEach((item, index) => {
            for(let key in item) {
                resultDataSet[index].valueSecondExperiment = item[key]
            }
        })
    }



    return resultDataSet
}