export const columnsProductFlow = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},
    { field: 'object', headerName: 'ОБЪЕКТ', flex:1, renderCell:(params)=>{return(
        <div className="cell">{params.row.object}</div>
        )}},
    { field: 'product', headerName: 'ТОВАР', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.product}</div>
        )} },
    { field: 'destination', headerName: 'РАССТОЯНИЕ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.destination}</div>
        )} },
    { field: 'period', headerName: 'ПЕРИОД', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )} },
    { field: 'statistics', headerName: 'СТАТИСТИКА', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.statistics}</div>
        )} },
    {
        field: 'amount',
        headerName: 'СУММА',
        type: 'number',
        width: 90,
    }
];

export const columnsShipmentShedule = [
        {
            field: 'object', headerName: 'ОБЪЕКТ', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.object}</div>
                )
            }
        },
        {
            field: 'shipment_id', headerName: 'ID ОТПРАВКИ', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.shipment_id}</div>
                )
            }
        },
        {
            field: 'original_shipper', headerName: 'ОТПРАВИТЕЛЬ', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.original_shipper}</div>
                )
            }
        },
        {
            field: 'vehicle_type', headerName: 'ТИП ТРАНСПОРТА', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.vehicle_type}</div>
                )
            }
        },

        {
            field: 'previous_location', headerName: 'ПРЕДЫДУЩЕЕ МЕСТОПОЛОЖЕНИЕ', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.previous_location}</div>
                )
            }
        },
        {
            field: 'current_location', headerName: 'ТЕКУЩЕЕ МЕСТОПОЛОЖЕНИЕ', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.current_location}</div>
                )
            }
        },
        {
            field: 'next_location', headerName: "СЛЕДУЮЩЕЕ МЕСТОПОЛОЖЕНИЕ", flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.next_location}</div>
                )
            }
        },
        {
            field: 'action', headerName: 'ЦЕЛЬ', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.action}</div>
                )
            }
        },
        {
            field: 'date', headerName: 'ДАТА', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.date}</div>
                )
            }
        },
        {
            field: 'product', headerName: 'ТОВАР', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.product}
                    </div>
                )
            }
        },

        {
            field: 'unit', headerName: 'ЕД.ИЗМЕРЕНИЯ', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.unit}</div>
                )
            }
        },
        {
            field: 'vehicle_amount',
            headerName: 'КОЛИЧЕСТВО ТРАНСПОРТА',
            type: 'number',
            width: 90,
        },
        {
            field: 'quantity',
            headerName: 'ВЕЛИЧИНА',
            type: 'number',
            width: 90,
        }
    ];

export const columnsTotalCost = [
    {
        field: 'account', headerName: 'СЧЕТ', flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.account}</div>
            )
        }
    },
    {
        field: 'bom', headerName: 'СОСТАВЛЯЮЩИЕ ПРОДУКТА', flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.bom}</div>
            )
        }
    },
    {
        field: 'destination', headerName: 'РАССТОЯНИЕ', flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.destination}</div>
            )
        }
    },
    {
        field: 'object', headerName: 'ОБЪЕКТ', flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.object}</div>
            )
        }
    },

    {
        field: 'period', headerName: 'ПЕРИОД', flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.period}</div>
            )
        }
    },
    {
        field: 'product', headerName: 'ТОВАР', flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.product}</div>
            )
        }
    },
    {
        field: 'sale_bath', headerName: "СЛЕДУЮЩЕЕ МЕСТОПОЛОЖЕНИЕ", flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.sale_bath}</div>
            )
        }
    },
    {
        field: 'source', headerName: 'ИСТОЧНИК', flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.source}</div>
            )
        }
    },
    {
        field: 'staff_type', headerName: 'ТИП ПЕРСОНАЛА', flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.staff_type}</div>
            )
        }
    },
    {
        field: 'statistics', headerName: 'СТАТИСТИКА', flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.statistics}</div>
            )
        }
    },

    {
        field: 'type', headerName: 'МОДЕЛЬ', flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.type}</div>
            )
        }
    },

    {
        field: 'unit', headerName: 'ЕД.ИЗМЕРЕНИЯ', flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.unit}</div>
            )
        }
    },

    {
        field: 'vehicle_type', headerName: 'ТИП ТРАНСПОРТА', flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.vehicle_type}</div>
            )
        }
    },

    {
        field: 'zone', headerName: 'ПОТОК', flex: 1, renderCell: (params) => {
            return (
                <div className="cell">{params.row.zone}</div>
            )
        }
    },

    {
        field: 'value',
        headerName: 'ЗНАЧЕНИЕ',
        type: 'number',
        width: 90,
    }
];

export const columnsDemandFulfillment = [
    // { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.iteration}</div>
    //     )}},
    // { field: 'period', headerName: 'ПЕРИОД', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.period}</div>
    //     )} },
    // { field: 'customer', headerName: 'ПОКУПАТЕЛЬ', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.customer}</div>
    //     )} },
    // { field: 'product', headerName: 'ТОВАР', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.product}</div>
    //     )} },
    //
    // { field: 'demandMin', headerName: 'МИН.ТРЕБОВАНИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.demandMin}</div>
    //     )}},
    // { field: 'demandMax', headerName: 'МАКС.ТРЕБОВАНИЯ', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.demandMax}</div>
    //     )} },
    // { field: 'satisfied', headerName: "ОБЩИЙ ОБЪЕМ", flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.satisfied}</div>
    //     )} },
    // { field: 'percentage', headerName: '%', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.percentage}</div>
    //     )} },
    // { field: 'revenue_per_item', headerName: 'ДОХОД, ЗА ЕД.', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.revenue_per_item}</div>
    //     )}},
    // { field: 'revenueTotal', headerName: 'ОБЩИЙ ДОХОД', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.revenueTotal}</div>
    //     )} },
    //
    // { field: 'under_cost', headerName: 'НИЖЕ ЦЕНЫ', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.under_cost}</div>
    //     )} },
    //
    // { field: 'over_cost', headerName: 'ВЫШЕ ЦЕНЫ', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.over_cost}</div>
    //     )} },
    //
    // { field: 'penalty', headerName: 'ШТРАФ', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.penalty}</div>
    //     )} },
    {
        name: "iteration",
        label: "ИТЕРАЦИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "period",
        label: "ПЕРИОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "customer",
        label: "ПОКУПАТЕЛЬ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "product",
        label: "ТОВАР",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "demandMin",
        label: "МИН.ТРЕБОВАНИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "demandMax",
        label: "МАКС.ТРЕБОВАНИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "satisfied",
        label: "ОБЩИЙ ОБЪЁМ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "percentage",
        label: "%",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "revenue_per_item",
        label: "ДОХОД, ЗА ЕД.",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "revenueTotal",
        label: "ДОХОД, ОБЩИЙ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "under_cost",
        label: "НИЖЕ ЦЕНЫ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "over_cost",
        label: "ВЫШЕ ЦЕНЫ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "penalty",
        label: "ШТРАФ",
        options: {
            filter: true,
            sort: true,
        }
    },
];

export const columnsVehicleFlowsWithColor = (data1, data2)=> {
    return [
        {
            field: 'vehicleParametersCapacity', headerName: 'ИСПОЛЬЗУЕМАЯ ЕМКОСТЬ ТС ПО ТИПУ', flex: 1, renderCell: (params) => {
                if (params.row.vehicleParametersCapacity === chooseColor("vehicleParametersCapacity", params.row.vehicleParametersCapacity, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.vehicleParametersCapacity}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.vehicleParametersCapacity}</div>
                    )
                }
            }
        },

        {
            field: 'vehicleParameters', headerName: 'МАКСИМАЛЬНОЕ КОЛ-ВО ТС ПО ТИПУ', flex: 1, renderCell: (params) => {
                if (params.row.vehicleParameters === chooseColor("vehicleParameters", params.row.vehicleParameters, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.vehicleParameters}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.vehicleParameters}</div>
                    )
                }
            }
        },
    ]
}

/*export const columnsNamedExpressionWithColor = (data1, data2)=> {
    return [
        {
            field: 'inbound_processing_cost', headerName: 'РАЗГРУЗКА', flex: 1, renderCell: (params) => {
                if (params.row.inbound_processing_cost === chooseColor("inbound_processing_cost", params.row.inbound_processing_cost, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.inbound_processing_cost}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.inbound_processing_cost}</div>
                    )
                }
            }
        },

        {
            field: 'outbound_processing_cost', headerName: 'ЗАГРУЗКА', flex: 1, renderCell: (params) => {
                if (params.row.outbound_processing_cost === chooseColor("outbound_processing_cost", params.row.outbound_processing_cost, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.outbound_processing_cost}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.outbound_processing_cost}</div>
                    )
                }
            }
        },

        {
            field: 'production_cost', headerName: 'ПРОИЗВОДСТВО', flex: 1, renderCell: (params) => {
                if (params.row.production_cost === chooseColor("production_cost", params.row.production_cost, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.production_cost}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.production_cost}</div>
                    )
                }
            }
        },

        {
            field: 'transportation_cost', headerName: 'ТРАНСПОРТ', flex: 1, renderCell: (params) => {
                if (params.row.transportation_cost === chooseColor("transportation_cost", params.row.transportation_cost, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.transportation_cost}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.transportation_cost}</div>
                    )
                }
            }
        },

        {
            field: 'supply_cost', headerName: 'ЗАКУПКИ У ПОСТАВЩИКОВ', flex: 1, renderCell: (params) => {
                if (params.row.supply_cost === chooseColor("supply_cost", params.row.supply_cost, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.supply_cost}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.supply_cost}</div>
                    )
                }
            }
        },

        {
            field: 'total_cost', headerName: 'ОБЩИЕ ЗАТРАТЫ', flex: 1, renderCell: (params) => {
                if (params.row.total_cost === chooseColor("total_cost", params.row.total_cost, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.total_cost}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.total_cost}</div>
                    )
                }
            }
        },

        {
            field: 'revenue', headerName: 'ВЫРУЧКА', flex: 1, renderCell: (params) => {
                if (params.row.revenue === chooseColor("revenue", params.row.revenue, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.revenue}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.revenue}</div>
                    )
                }
            }
        },

        {
            field: 'profit', headerName: 'ПРИБЫЛЬ', flex: 1, renderCell: (params) => {
                if (params.row.profit === chooseColor("profit", params.row.profit, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.profit}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.profit}</div>
                    )
                }
            }
        },
    ]
}*/

export const columnsDemandFulfillmentWithColor = (data1, data2)=> {
    return [
        {
            field: 'demandForProduct', headerName: 'УДОВЛЕТВОРЕНИЕ СПРОСА ПО ПРОДУКТАМ', flex: 1, renderCell: (params) => {
                if (params.row.demandForProduct === chooseColor("demandForProduct", params.row.demandForProduct, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.demandForProduct}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.demandForProduct}</div>
                    )
                }
            }
        },
        {
            field: 'demandForOrder', headerName: 'УДОВЛЕТВОРЕНИЕ СПРОСА ПО ЗАКАЗАМ', flex: 1, renderCell: (params) => {
                if (params.row.demandForOrder < chooseColor("demandForOrder", params.row.demandForOrder, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.demandForOrder}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.demandForOrder}</div>
                    )
                }
            }
        },
    ];
}


const chooseColor = (key, currentValue, firstValue, secondValue) => {

   let value = firstValue.find(value => value[key.toString()] === currentValue);
   let index = firstValue.indexOf(value);

   return secondValue[index][key.toString()];
}


export const columnsProductFlows = [

    {
        name: "iteration",
        label: "ИТЕРАЦИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "timePeriod",
        label: "ПЕРИОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "from",
        label: "ОТКУДА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "to",
        label: "КУДА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "arrivalPeriod",
        label: "ВРЕМЯ ПРИБЫТИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "product",
        label: "ТОВАР",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flow",
        label: "РАСХОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "unit",
        label: "ЕД.ИЗМЕРЕНИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flowMin",
        label: "МИН.РАСХОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flowMax",
        label: "МАКС.РАСХОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "percentage",
        label: "%",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flowUnderCost",
        label: "НЕДОРАСХОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flowOverCost",
        label: "СВЕРХ РАСХОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "distance",
        label: "РАССТОЯНИЕ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "vehicleType",
        label: "ТИП ТРАНСПОРТА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "travelTime",
        label: "ВРЕМЯ ПЕРЕВОЗКИ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "penalty",
        label: "ШТРАФ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "outProcessingCostPi",
        label: "СТОИМОСТЬ ВЫХОДЯЩЕЙ ОБРАБОТКИ, ЗА ЕД.",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "outProcessingCostT",
        label: "СТОИМОСТЬ ВЫХОДЯЩЕЙ ОБРАБОТКИ, ВСЕГО",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "transportationCostPi",
        label: "СТОИМОСТЬ ПЕРЕВОЗКИ, ЗА ДЕНЬ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "transportationCostT",
        label: "СТОИМОСТЬ ПЕРЕВОЗКИ, ВСЕГО",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "tariffPi",
        label: "ТАРИФ, ЗА ЕД.",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "tariffT",
        label: "ТАРИФ, ВСЕГО",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "inProcessingCostPi",
        label: "СТОИМОСТЬ ВХОДЯЩЕЙ ОБРАБОТКИ, ЗА ЕД.",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "inProcessingCostT",
        label: "СТОИМОСТЬ ВХОДЯЩЕЙ ОБРАБОТКИ, ВСЕГО",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "penalty",
        label: "ШТРАФ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flowCostPi",
        label: "РАСХОД, ЗА ЕД.",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flowCostT",
        label: "РАСХОД, ВСЕГО",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flowCO2pi",
        label: "РАСХОД СО2, ЗА ЕД.",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flowCO2t",
        label: "РАСХОД СО2, ВСЕГО",
        options: {
            filter: true,
            sort: true,
        }
    },
    // { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{
    //     return(
    //         <div className="cell">{params.row.iteration}</div>
    //     )
    //     }},
    //
    // { field: 'timePeriod', headerName: 'ПЕРИОД', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.timePeriod}</div>
    //     )} },
    //
    // { field: 'from', headerName: 'ОТКУДА', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.from}</div>
    //     )} },
    //
    // { field: 'to', headerName: 'КУДА', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.to}</div>
    //     )} },
    //
    // { field: 'arrivalPeriod', headerName: 'ВРЕМЯ ПРИБЫТИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.arrivalPeriod}</div>
    //     )}},
    //
    // { field: 'product', headerName: 'ТОВАР', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.product}</div>
    //     )} },
    // {
    //     field: 'flow',
    //     headerName: 'РАСХОД',
    //     type: 'number',
    //     width: 90,
    // },
    //
    // { field: 'unit', headerName: 'ЕД.ИЗМЕРЕНИЯ', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.unit}</div>
    //     )} },
    //
    // {
    //     field: 'flowMin',
    //     headerName: 'МИН.РАСХОД',
    //     type: 'number',
    //     width: 90,
    // },
    //
    // {
    //     field: 'flowMax',
    //     headerName: 'МАКС.РАСХОД',
    //     type: 'number',
    //     width: 90,
    // },
    //
    // {
    //     field: 'percentage',
    //     headerName: '%',
    //     type: 'number',
    //     width: 80,
    // },
    //
    // {
    //     field: 'flowUnderCost',
    //     headerName: 'НЕДОРАСХОД',
    //     type: 'number',
    //     width: 90,
    // },
    //
    // {
    //     field: 'flowOverCost',
    //     headerName: 'СВЕРХ РАСХОД',
    //     type: 'number',
    //     width: 90,
    // },
    //
    // {
    //     field: 'distance',
    //     headerName: 'РАССТОЯНИЕ',
    //     type: 'number',
    //     width: 100,
    // },
    //
    // { field: 'vehicleType', headerName: 'ТИП ТРАНСПОРТА', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.vehicleType}</div>
    //     )} },
    //
    // {
    //     field: 'travelTime',
    //     headerName: 'ВРЕМЯ ПЕРЕВОЗКИ, ДЕНЬ',
    //     type: 'number',
    //     width: 100,
    // },
    //
    // {
    //     field: 'outProcessingCostPi',
    //     headerName: 'СТОИМОСТЬ ВЫХОДЯЩЕЙ ОБРАБОТКИ, ЗА ДЕНЬ',
    //     type: 'number',
    //     width: 100,
    // },
    //
    // {
    //     field: 'outProcessingCosT',
    //     headerName: 'СТОИМОСТЬ ВЫХОДЯЩЕЙ ОБРАБОТКИ, ВСЕГО',
    //     type: 'number',
    //     width: 100,
    // },
    //
    // {
    //     field: 'transportationCostPi',
    //     headerName: 'СТОИМОСТЬ ПЕРЕВОЗКИ, ЗА ДЕНЬ',
    //     type: 'number',
    //     width: 100,
    // },
    //
    // {
    //     field: 'transportationCostT',
    //     headerName: 'СТОИМОСТЬ ПЕРЕВОЗКИ, ВСЕГО',
    //     type: 'number',
    //     width: 100,
    // },
    //
    // {
    //     field: 'tariffPi',
    //     headerName: 'ТАРИФ, ЗА ЕД.',
    //     type: 'number',
    //     width: 90,
    // },
    //
    // {
    //     field: 'tariffT',
    //     headerName: 'ТАРИФ, ВСЕГО',
    //     type: 'number',
    //     width: 90,
    // },
    //
    // {
    //     field: 'inProcessingCostPi',
    //     headerName: 'СТОИМОСТЬ ВХОДЯЩЕЙ ОБРАБОТКИ, ЗА ЕД.',
    //     type: 'number',
    //     width: 100,
    // },
    //
    // {
    //     field: 'inProcessingCostT',
    //     headerName: 'СТОИМОСТЬ ВХОДЯЩЕЙ ОБРАБОТКИ, ВСЕГО',
    //     type: 'number',
    //     width: 100,
    // },
    //
    // {
    //     field: 'flowCostPi',
    //     headerName: 'РАСХОДЫ, ЗА ЕД.',
    //     type: 'number',
    //     width: 90,
    // },
    //
    // {
    //     field: 'penalty',
    //     headerName: 'ШТРАФ',
    //     type: 'number',
    //     width: 90,
    // },
    //
    // {
    //     field: 'flowCostT',
    //     headerName: 'РАСХОДЫ, ВСЕГО',
    //     type: 'number',
    //     width: 90,
    // },
    //
    // {
    //     field: 'flowCO2pi',
    //     headerName: 'РАСХОД CO2, ЗА ЕД.',
    //     type: 'number',
    //     width: 90,
    // },
    //
    // {
    //     field: 'flowCO2t',
    //     headerName: 'РАСХОД CO2, ВСЕГО',
    //     type: 'number',
    //     width: 90,
    // },
];


export const columnsSiteState = [

    {
        name: "iteration",
        label: "ИТЕРАЦИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "timePeriod",
        label: "ПЕРИОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "site",
        label: "СДЕЛКА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "initial_state",
        label: "НАЧАЛЬНОЕ ПОЛОЖЕНИЕ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "new_state",
        label: "НОВОЕ ПОЛОЖЕНИЕ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "initial_cost",
        label: "НАЧАЛЬНАЯ ЦЕНА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "closing_cost",
        label: "ЦЕНА НА ЗАКРЫТИИ",
        options: {
            filter: true,
            sort: true,
        }
    },

    // { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.iteration}</div>
    //     )}},
    //
    // { field: 'timePeriod', headerName: 'ПЕРИОД', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.timePeriod}</div>
    //     )} },
    //
    // { field: 'site', headerName: 'СДЕЛКА', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.site}</div>
    //     )} },
    //
    // { field: 'initial_state', headerName: 'НАЧАЛЬНОЕ ПОЛОЖЕНИЕ', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.initial_state}</div>
    //     )} },
    //
    // { field: 'new_state', headerName: 'НОВОЕ ПОЛОЖЕНИЕ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.new_state}</div>
    //     )}},
    // { field: 'initial_cost', headerName: 'НАЧАЛЬНАЯ ЦЕНА', flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.initial_cost}</div>
    //     )} },
    // { field: 'closing_cost', headerName: "ЦЕНА НА ЗАКРЫТИИ", flex:1,  renderCell:(params)=>{return(
    //         <div className="cell">{params.row.closing_cost}</div>
    //     )} },
];


export const columnsOtherCosts = [

    {
        name: "iteration",
        label: "ИТЕРАЦИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "period",
        label: "ПЕРИОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "site",
        label: "СДЕЛКА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "other_cost",
        label: "ПРОЧИЕ РАСХОДЫ, ЗА ДЕНЬ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "other_cost_pp",
        label: "ПРОЧИЕ РАСХОДЫ, ЗА ПЕРИОД",
        options: {
            filter: true,
            sort: true,
        }
    },
    // { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
    //     <div className="cell">{params.row.iteration}</div>
    //     )}},
    //
    // { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.period}</div>
    //     )}},
    //
    // { field: 'site', headerName: 'СДЕЛКА', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.site}</div>
    //     )}},
    //
    // { field: 'other_cost', headerName: 'ПРОЧИЕ РАСХОДЫ, ЗА ДЕНЬ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.other_cost}</div>
    //     )}},
    //
    // { field: 'other_cost_pp', headerName: 'ПРОЧИЕ РАСХОДЫ, ЗА ПЕРИОД', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.other_cost_pp}</div>
    //     )}},
];


export const columnsOperatingSites = [

    {
        name: "iteration",
        label: "ИТЕРАЦИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "period",
        label: "ПЕРИОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "site",
        label: "СДЕЛКА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "status",
        label: "СТАТУС",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "initial_cost",
        label: "НАЧАЛЬНАЯ ЦЕНА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "closing_cost",
        label: "ЦЕНА НА ЗАКРЫТИИ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "other_cost",
        label: "ПРОЧИЕ РАСХОДЫ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "total_cost",
        label: "ОБЩАЯ ЦЕНА",
        options: {
            filter: true,
            sort: true,
        }
    },
    // { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
    //     <div className="cell">{params.row.iteration}</div>
    //     )}},
    //
    // { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.period}</div>
    //     )}},
    //
    // { field: 'site', headerName: 'СДЕЛКА', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.site}</div>
    //     )}},
    //
    // { field: 'status', headerName: 'СТАТУС', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.status}</div>
    //     )}},
    //
    // { field: 'initial_cost', headerName: 'НАЧАЛЬНАЯ ЦЕНА', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.initial_cost}</div>
    //     )}},
    //
    // { field: 'closing_cost', headerName: 'ЦЕНА НА ЗАКРЫТИИ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.closing_cost}</div>
    //     )}},
    //
    // { field: 'other_cost', headerName: 'ПРОЧИЕ РАСХОДЫ, ЗА ПЕРИОД', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.other_cost}</div>
    //     )}},
    //
    // { field: 'total_cost', headerName: 'ОБЩАЯ ЦЕНА', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.total_cost}</div>
    //     )}},
];


export const columnsStorageByProducts = [

    {
        name: "iteration",
        label: "ИТЕРАЦИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "period",
        label: "ПЕРИОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "facility",
        label: "УСТАНОВКА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "product",
        label: "ТОВАР",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "in_flow",
        label: "ПЕРЕВОЗИТСЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "initial_storage",
        label: "НАЧАЛЬНОЕ ХРАНЕНИЕ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "storage",
        label: "ХРАНЕНИЕ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "percentage",
        label: "%",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "out_flow",
        label: "ПЕРЕВЕЗЕНО",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "carrying_cost_pu",
        label: "ИЗДЕРЖКИ ХРАНЕНИЯ, ЗА ЕД.",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "total_carrying_cost_t",
        label: "ОБЩИЕ ИЗДЕРЖКИ ХРАНЕНИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "storage_min",
        label: "МИН.ХРАНЕНИЕ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "storage_max",
        label: "МАКС.ХРАНЕНИЕ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "understock_penalty",
        label: "ШТРАФ НЕДОСТАТОК, ЗА ЕД.",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "overstock_penalty",
        label: "ШТРАФ ИЗБЫТОК, ЗА ЕД.",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "storage_penalty",
        label: "ШТРАФ ХРАНЕНИЕ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "total_cost",
        label: "ИТОГО",
        options: {
            filter: true,
            sort: true,
        }
    },
    // { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.iteration}</div>
    //     )}},
    //
    // { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.period}</div>
    //     )}},
    //
    // { field: 'facility', headerName: 'УСТАНОВКА', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.facility}</div>
    //     )}},
    //
    // { field: 'product', headerName: 'ТОВАР', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.product}</div>
    //     )}},
    //
    // { field: 'in_flow', headerName: 'ПЕРЕВОЗИТСЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.in_flow}</div>
    //     )}},
    //
    // { field: 'initial_storage', headerName: 'НАЧАЛЬНОЕ ХРАНЕНИЕ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.initial_storage}</div>
    //     )}},
    //
    // { field: 'storage', headerName: 'ХРАНЕНИЕ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.storage}</div>
    //     )}},
    //
    // { field: 'percentage', headerName: '%', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.percentage}</div>
    //     )}},
    //
    // { field: 'out_flow', headerName: 'ПЕРЕВЕЗЕНО', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.out_flow}</div>
    //     )}},
    //
    // { field: 'carrying_cost_pu', headerName: 'ИЗДЕРЖКИ ХРАНЕНИЯ, ЗА ЕД.', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.carrying_cost_pu}</div>
    //     )}},
    //
    // { field: 'total_carrying_cost_t', headerName: 'ОБЩИЕ ИЗДЕРЖКИ ХРАНЕНИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.carrying_cost_t}</div>
    //     )}},
    //
    // { field: 'storage_min', headerName: 'МИН.ХРАНЕНИЕ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.storage_min}</div>
    //     )}},
    //
    // { field: 'storage_max', headerName: 'МАКС.ХРАНИЕ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.storage_max}</div>
    //     )}},
    //
    // { field: 'understock_penalty', headerName: 'ШТРАФ НЕДОСТАТОК, ЗА ЕД.', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.understock_penalty}</div>
    //     )}},
    //
    // { field: 'overstock_penalty', headerName: 'ШТРАФ ИЗБЫТОК, ЗА ЕД.', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.overstock_penalty}</div>
    //     )}},
    //
    // { field: 'storage_penalty', headerName: 'ШТРАФ ХРАНЕНИЕ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.storage_penalty}</div>
    //     )}},
    //
    // { field: 'total_cost', headerName: 'ИТОГО', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.total_cost}</div>
    //     )}},
];


export const columnsProductionCost = [

    {
        name: "iteration",
        label: "ИТЕРАЦИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "period",
        label: "ПЕРИОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "facility",
        label: "УСТАНОВКА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "bom",
        label: "СПЕЦИФИКАЦИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "end_product",
        label: "КОНЕЧНЫЙ ТОВАР",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "amount",
        label: "СУММА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "production_cost",
        label: "СТОИМОСТЬ ПРОИЗВОДСТВА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "min_throughput",
        label: "МИН.ПРОПУСКНАЯ СПОСОБНОСТЬ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "max_throughput",
        label: "МАКС.ПРОПУСКНАЯ СПОСОБНОСТЬ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "production_penalty",
        label: "ПРОИЗВОДСТВЕННЫЙ ШТРАФ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "total_cost",
        label: "ОБЩАЯ СТОИМОСТЬ",
        options: {
            filter: true,
            sort: true,
        }
    },
    // { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.iteration}</div>
    //     )}},
    //
    // { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.period}</div>
    //     )}},
    //
    // { field: 'facility', headerName: 'УСТАНОВКА', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.facility}</div>
    //     )}},
    //
    // { field: 'bom', headerName: 'СПЕЦИФИКАЦИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.bom}</div>
    //     )}},
    //
    // { field: 'end_product', headerName: 'КОНЕЧНЫЙ ТОВАР', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.end_product}</div>
    //     )}},
    //
    // { field: 'amount', headerName: 'СУММА', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.amount}</div>
    //     )}},
    //
    // { field: 'production_cost', headerName: 'СТОИМОСТЬ ПРОИЗВОДСТВА', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.production_cost}</div>
    //     )}},
    //
    // { field: 'min_throughput', headerName: 'МИН.ПРОПУСКНАЯ СПОСОБНОСТЬ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.min_throughput}</div>
    //     )}},
    //
    // { field: 'max_throughput', headerName: 'МАКС.ПРОПУСКНАЯ СПОСОБНОСТЬ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.max_throughput}</div>
    //     )}},
    //
    // { field: 'production_penalty', headerName: 'ПРОИЗВОДСТВЕННЫЙ ШТРАФ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.production_penalty}</div>
    //     )}},
    //
    // { field: 'total_cost', headerName: 'ОБЩАЯ СТОИМОСТЬ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.total_cost}</div>
    //     )}},
];


export const columnsProductionFlows = [

    {
        name: "iteration",
        label: "ИТЕРАЦИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "period",
        label: "ПЕРИОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "facility",
        label: "УСТАНОВКА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "bom",
        label: "СПЕЦИФИКАЦИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "product",
        label: "ТОВАР",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "consumed",
        label: "ПОТРЕБЛЕНО",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "produced",
        label: "ПРОИЗВЕДЕНО",
        options: {
            filter: true,
            sort: true,
        }
    },
    // { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.iteration}</div>
    //     )}},
    //
    // { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.period}</div>
    //     )}},
    //
    // { field: 'facility', headerName: 'УСТАНОВКА', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.facility}</div>
    //     )}},
    //
    // { field: 'bom', headerName: 'СПЕЦИФИКАЦИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.bom}</div>
    //     )}},
    //
    // { field: 'product', headerName: 'ТОВАР', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.product}</div>
    //     )}},
    //
    // { field: 'consumed', headerName: 'ПОТРЕБЛЕНО', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.consumed}</div>
    //     )}},
    //
    // { field: 'produced', headerName: 'ПРОИЗВЕДЕНО', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.produced}</div>
    //     )}},
];


export const columnsSharedFlowConstraints = [

    {
        name: "iteration",
        label: "ИТЕРАЦИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "period",
        label: "ПЕРИОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "from",
        label: "ИЗ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "to",
        label: "КУДА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "products",
        label: "ТОВАРЫ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flow",
        label: "РАСХОД, ОБЪЁМ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flow_min",
        label: "МИН.РАСХОД, ОБЪЁМ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flow_max",
        label: "МАКС.РАСХОД, ОБЪЁМ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flow_under_cost",
        label: "РАСХОД НИЖЕ ЗАТРАТ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flow_over_cost",
        label: "РАСХОД ВЫШЕ ЗАТРАТ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "penalty",
        label: "ШТРАФ",
        options: {
            filter: true,
            sort: true,
        }
    },
    // { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.iteration}</div>
    //     )}},
    //
    // { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.period}</div>
    //     )}},
    //
    // { field: 'from', headerName: 'ИЗ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.from}</div>
    //     )}},
    //
    // { field: 'to', headerName: 'ДО', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.to}</div>
    //     )}},
    //
    // { field: 'products', headerName: 'ТОВАРЫ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.products}</div>
    //     )}},
    //
    // { field: 'flow', headerName: 'РАСХОД, ОБЪЕМ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.flow}</div>
    //     )}},
    //
    // { field: 'flow_min', headerName: 'МИН.РАСХОД, ОБЪЕМ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.flow_min}</div>
    //     )}},
    //
    // { field: 'flow_max', headerName: 'МАКС.РАСХОД, ОБЪЕМ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.flow_max}</div>
    //     )}},
    //
    // { field: 'flow_under_cost', headerName: 'РАСХОД НИЖЕ ЗАТРАТ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.flow_under_cost}</div>
    //     )}},
    //
    // { field: 'flow_over_cost', headerName: 'РАСХОД СВЕРХ ЗАТРАТ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.flow_over_cost}</div>
    //     )}},
    //
    // { field: 'penalty', headerName: 'ШТРАФ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.penalty}</div>
    //     )}},
];


export const columnsSharedStoragesConstraints = [

    {
        name: "iteration",
        label: "ИТЕРАЦИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "period",
        label: "ПЕРИОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "facilities",
        label: "УСТАНОВКИ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "products",
        label: "ТОВАРЫ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "storage",
        label: "ХРАНИЛИЩЕ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "flow",
        label: "РАСХОД, ОБЪЁМ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "storage_min",
        label: "МИН.ХРАНЕНИЕ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "storage_max",
        label: "МАКС.ХРАНЕНИЕ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "understock_penalty",
        label: "ШТРАФ ЗА НЕДОСТАТОК, ЗА ЕД.",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "overstock_penalty",
        label: "ШТРАФ ЗА ИЗБЫТОК, ЗА ЕД.",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "penalty",
        label: "ШТРАФ",
        options: {
            filter: true,
            sort: true,
        }
    },
    // { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.iteration}</div>
    //     )}},
    //
    // { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.period}</div>
    //     )}},
    //
    // { field: 'facilities', headerName: 'УСТАНОВКИ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.facilities}</div>
    //     )}},
    //
    // { field: 'products', headerName: 'ТОВАРЫ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.products}</div>
    //     )}},
    //
    // { field: 'storage', headerName: 'ХРАНИЛИЩЕ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.storage}</div>
    //     )}},
    //
    // { field: 'flow', headerName: 'РАСХОД, ОБЪЕМ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.flow}</div>
    //     )}},
    //
    // { field: 'storage_min', headerName: 'МИН.ХРАНЕНИЕ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.storage_min}</div>
    //     )}},
    //
    // { field: 'storage_max', headerName: 'МАКС.ХРАНЕНИЕ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.storage_max}</div>
    //     )}},
    //
    // { field: 'understock_penalty', headerName: 'ШТРАФ ЗА НЕДОСТАТОК, ЗА ЕД.', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.understock_penalty}</div>
    //     )}},
    //
    // { field: 'overstock_penalty', headerName: 'ШТРАФ ЗА ИЗБЫТОК, ЗА ЕД.', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.overstock_penalty}</div>
    //     )}},
    //
    // { field: 'penalty', headerName: 'ШТРАФ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.penalty}</div>
    //     )}},
];


export const columnsVehicleFlows = [

    {
        name: "iteration",
        label: "ИТЕРАЦИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "timePeriod",
        label: "ПЕРИОД",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "source",
        label: "ИСТОЧНИК",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "destination",
        label: "РАССТОЯНИЕ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "vehicleType",
        label: "ТИП ТРАНСПОРТА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "vehicleTrips",
        label: "ТРАНСПОРТНЫЕ ПЕРЕВОЗКИ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "cost",
        label: "СТОИМОСТЬ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "co2",
        label: "CO2",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "totalProductsFlow",
        label: "ОБЩИЙ ПОТОК ПРОДУКЦИИ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "unit",
        label: "ЕД.ИЗМЕРЕНИЯ",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "vehicleCapacity",
        label: "ВМЕСТИМОСТЬ ТРАНСПОРТА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "minLoad",
        label: "МИН.ЗАГРУЗКА",
        options: {
            filter: true,
            sort: true,
        }
    },

    {
        name: "actualLoad",
        label: "ФАКТИЧЕСКАЯ ЗАГРУЗКА",
        options: {
            filter: true,
            sort: true,
        }
    },
    // { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.iteration}</div>
    //     )}},
    //
    // { field: 'timePeriod', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.timePeriod}</div>
    //     )}},
    //
    // { field: 'source', headerName: 'ИСТОЧНИК', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.source}</div>
    //     )}},
    //
    // { field: 'destination', headerName: 'РАССТОЯНИЕ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.destination}</div>
    //     )}},
    //
    // { field: 'vehicleType', headerName: 'ТИП ТРАНСПОРТА', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.vehicleType}</div>
    //     )}},
    //
    // { field: 'vehicleTrips', headerName: 'ТРАНСПОРТНЫЕ ПЕРЕВОЗКИ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.vehicleTrips}</div>
    //     )}},
    //
    // { field: 'cost', headerName: 'СТОИМОСТЬ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.cost}</div>
    //     )}},
    //
    // { field: 'co2', headerName: 'CO2', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.co2}</div>
    //     )}},
    //
    // { field: 'totalProductsFlow', headerName: 'ОБЩИЙ ПОТОК ПРОДУКЦИИ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.totalProductsFlow}</div>
    //     )}},
    //
    // { field: 'unit', headerName: 'ЕД.ИЗМЕРЕНИЯ', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.unit}</div>
    //     )}},
    //
    // { field: 'vehicleCapacity', headerName: 'ВМЕСТИМОСТЬ ТРАНСПОРТА', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.vehicleCapacity}</div>
    //     )}},
    //
    // { field: 'minLoad', headerName: 'МИН.ЗАГРУЗКА', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.minLoad}</div>
    //     )}},
    //
    // { field: 'actualLoad', headerName: 'ФАКТИЧЕСКАЯ ЗАГРУЗКА', flex:1, renderCell:(params)=>{return(
    //         <div className="cell">{params.row.actualLoad}</div>
    //     )}},
];

export const columnsNamedExpressionsWithColor = (data1, data2)=> {
    return [
        {
            field: 'objective_member', headerName: 'ОБЩАЯ СТАТИСТИКА', flex: 1, renderCell: (params) => {
                if (params.row.objective_member === chooseColor("objective_member", params.row.objective_member, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.objective_member}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.objective_member}</div>
                    )
                }
            }
        },

        {
            field: 'value', headerName: 'ЗНАЧЕНИЕ', flex: 1, renderCell: (params) => {
                if (params.row.value === chooseColor("value", params.row.value, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.value}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.value}</div>
                    )
                }
            }
        },
    ];
}

export const columnsObjectiveMembers = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'objective_member', headerName: 'ОБЪЕКТЫ МОДЕЛИРОВАНИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.objective_member}</div>
        )}},

    { field: 'value', headerName: 'ЗНАЧЕНИЕ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.value}</div>
        )}},
];

export const columnsOverallStats = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'inbound_processing_cost', headerName: 'СТОИМОСТЬ ВХОДЯЩЕЙ ОБРАБОТКИ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.inbound_processing_cost}</div>
        )}},

    { field: 'transportation_cost', headerName: 'СТОИМОСТЬ ПЕРЕВОЗКИ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.transportation_cost}</div>
        )}},

    { field: 'tariffs', headerName: 'ТАРИФЫ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.tariffs}</div>
        )}},

    { field: 'revenue', headerName: 'ДОХОД', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.revenue}</div>
        )}},

    { field: 'supply_cost', headerName: 'СТОИМОСТЬ ПОСТАВКИ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.supply_cost}</div>
        )}},

    { field: 'outbound_processing_cost', headerName: 'СТОИМОСТЬ ВЫХОДЯЩЕЙ ОБРАБОТКИ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.outbound_processing_cost}</div>
        )}},

    { field: 'initial_cost', headerName: 'НАЧАЛЬНАЯ СТОИМОСТЬ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.initial_cost}</div>
        )}},

    { field: 'closing_cost', headerName: 'СТОИМОСТЬ НА ЗАКРЫТИИ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.closing_cost}</div>
        )}},

    { field: 'penalties', headerName: 'ШТРАФЫ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.penalties}</div>
        )}},

    { field: 'production_cost', headerName: 'СТОИМОСТЬ ПРОИЗВОДСТВА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.production_cost}</div>
        )}},

    { field: 'other_cost', headerName: 'ПРОЧИЕ РАСХОДЫ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.other_cost}</div>
        )}},

    { field: 'carrying_cost', headerName: 'ИЗДЕРЖКИ СОДЕРЖАНИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.carrying_cost}</div>
        )}},

    { field: 'objective', headerName: 'ЦЕЛЬ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.objective}</div>
        )}},
];

export const columnsOverallStatsWithColor = (data1, data2)=> {
    return [
        {
            field: 'inbound_processing_cost', headerName: 'РАЗГРУЗКА', flex: 1, renderCell: (params) => {
                if (params.row.inbound_processing_cost === chooseColor("inbound_processing_cost", params.row.inbound_processing_cost, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.inbound_processing_cost}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.inbound_processing_cost}</div>
                    )
                }
            }
        },

        {
            field: 'outbound_processing_cost', headerName: 'ЗАГРУЗКА', flex: 1, renderCell: (params) => {
                if (params.row.outbound_processing_cost === chooseColor("outbound_processing_cost", params.row.outbound_processing_cost, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.outbound_processing_cost}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.outbound_processing_cost}</div>
                    )
                }
            }
        },

        {
            field: 'production_cost', headerName: 'ПРОИЗВОДСТВО', flex: 1, renderCell: (params) => {
                if (params.row.production_cost === chooseColor("production_cost", params.row.production_cost, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.production_cost}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.production_cost}</div>
                    )
                }
            }
        },

        {
            field: 'transportation_cost', headerName: 'ТРАНСПОРТ', flex: 1, renderCell: (params) => {
                if (params.row.transportation_cost === chooseColor("transportation_cost", params.row.transportation_cost, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.transportation_cost}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.transportation_cost}</div>
                    )
                }
            }
        },

        {
            field: 'supply_cost', headerName: 'ЗАКУПКИ У ПОСТАВЩИКОВ', flex: 1, renderCell: (params) => {
                if (params.row.supply_cost === chooseColor("supply_cost", params.row.supply_cost, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.supply_cost}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.supply_cost}</div>
                    )
                }
            }
        },

        {
            field: 'total_cost', headerName: 'ОБЩИЕ ЗАТРАТЫ', flex: 1, renderCell: (params) => {
                if (params.row.total_cost === chooseColor("total_cost", params.row.total_cost, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.total_cost}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.total_cost}</div>
                    )
                }
            }
        },

        {
            field: 'revenue', headerName: 'ВЫРУЧКА', flex: 1, renderCell: (params) => {
                if (params.row.revenue === chooseColor("revenue", params.row.revenue, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.revenue}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.revenue}</div>
                    )
                }
            }
        },

        {
            field: 'profit', headerName: 'ПРИБЫЛЬ', flex: 1, renderCell: (params) => {
                if (params.row.profit === chooseColor("profit", params.row.profit, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.profit}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.profit}</div>
                    )
                }
            }
        },
    ];
}
// export const dataCSV = (data) => {
//     const dataStringLines = data.split(/\r\n|\n/);
//     const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
//
//     const list = [];
//     for (let i = 1; i < dataStringLines.length; i++) {
//         const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
//         if (headers && row.length == headers.length) {
//             const obj = {};
//             for (let j = 0; j < headers.length; j++) {
//                 let d = row[j];
//                 if (d.length > 0) {
//                     if (d[0] == '"')
//                         d = d.substring(1, d.length - 1);
//                     if (d[d.length - 1] == '"')
//                         d = d.substring(d.length - 2, 1);
//                 }
//                 if (headers[j]) {
//                     obj[headers[j]] = d;
//                 }
//             }
//
//             // remove the blank rows
//             if (Object.values(obj).filter(x => x).length > 0) {
//                 list.push(obj);
//             }
//         }
//     }
//
//     // prepare columns list from headers
//     const columns = headers.map(c => ({
//         field: c, headerName: c, flex:1,  renderCell:(params)=>{return(
//             <div className="cell">{params.row.c}</div>
//         )}
//     }));
//     console.log(columns, list)
//     return [columns, list];
// }