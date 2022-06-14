export const columnsProductFlow = [
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



export const columnsDemandFulfillment = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},
    { field: 'period', headerName: 'ПЕРИОД', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )} },
    { field: 'customer', headerName: 'ПОКУПАТЕЛЬ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.customer}</div>
        )} },
    { field: 'product', headerName: 'ТОВАР', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.product}</div>
        )} },

    { field: 'demandMin', headerName: 'МИН.ТРЕБОВАНИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.demandMin}</div>
        )}},
    { field: 'demandMax', headerName: 'МАКС.ТРЕБОВАНИЯ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.demandMax}</div>
        )} },
    { field: 'satisfied', headerName: "ОБЩИЙ ОБЪЕМ", flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.satisfied}</div>
        )} },
    { field: 'percentage', headerName: '%', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.percentage}</div>
        )} },
    { field: 'revenue_per_item', headerName: 'ДОХОД, ЗА ЕД.', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.revenue_per_item}</div>
        )}},
    { field: 'revenueTotal', headerName: 'ОБЩИЙ ДОХОД', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.revenueTotal}</div>
        )} },

    { field: 'under_cost', headerName: 'НИЖЕ ЦЕНЫ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.under_cost}</div>
        )} },

    { field: 'over_cost', headerName: 'ВЫШЕ ЦЕНЫ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.over_cost}</div>
        )} },

    { field: 'penalty', headerName: 'ШТРАФ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.penalty}</div>
        )} },
    // {
    //     field: 'vehicle_amount',
    //     headerName: 'VEHICLE AMOUNT',
    //     type: 'number',
    //     width: 90,
    // },
    // {
    //     field: 'quantity',
    //     headerName: 'QUANTITY',
    //     type: 'number',
    //     width: 90,
    // }
];

export const columnsDemandFulfillmentWithColor = (data1, data2)=> {
    return [


        {
            field: 'iterationCell', headerName: 'ИТЕРАЦИЯ', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.iteration}</div>
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
            field: 'customer', headerName: 'ПОКУПАТЕЛЬ', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.customer}</div>
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
            field: 'demandMin', headerName: 'МИН.ТРЕБОВАНИЕ', flex: 1, renderCell: (params) => {
                if (params.row.demandMin === chooseColor("demandMin", params.row.demandMin, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.demandMin}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.demandMin}</div>
                    )
                }
            }
        },
        {
            field: 'demandMax', headerName: 'МАКС.ТРЕБОВАНИЕ', flex: 1, renderCell: (params) => {
                if (params.row.demandMax < chooseColor("demandMin", params.row.demandMax, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.demandMax}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.demandMax}</div>
                    )
                }
            }
        },
        {
            field: 'satisfied', headerName: "ВЫПОЛНЕНО", flex: 1, renderCell: (params) => {
                if (params.row.demandMax < chooseColor("demandMin", params.row.demandMax, data1, data2)) {
                    return (
                        <div className="cell over">{params.row.satisfied}</div>
                    )
                } else {
                    return (
                        <div className="cell lower">{params.row.satisfied}</div>
                    )
                }
            }
        },
        {
            field: 'percentage', headerName: '%', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.percentage}</div>
                )
            }
        },
        {
            field: 'revenue_per_item', headerName: 'ДОХОД, ЗА ЕД.', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.revenue_per_item}</div>
                )
            }
        },
        {
            field: 'revenueTotal', headerName: 'ОБЩИЙ ДОХОД', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.revenueTotal}</div>
                )
            }
        },

        {
            field: 'under_cost', headerName: 'НИЖЕ СТОИМОСТИ', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.under_cost}</div>
                )
            }
        },

        {
            field: 'over_cost', headerName: 'ВЫШЕ СТОИМОСТИ', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.over_cost}</div>
                )
            }
        },

        {
            field: 'penalty', headerName: 'ШТРАФ', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.penalty}</div>
                )
            }
        }
    ];
}


const chooseColor = (key, currentValue, firstValue, secondValue) => {

   let value = firstValue.find(value => value[key.toString()] === currentValue);
   let index = firstValue.indexOf(value);

   return secondValue[index][key.toString()];

}



export const columnsProductFlows = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{

        return(
            <div className="cell">{params.row.iteration}</div>
        )
        }},
    { field: 'period', headerName: 'ПЕРИОД', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )} },
    { field: 'from', headerName: 'ИЗ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.from}</div>
        )} },
    { field: 'to', headerName: 'ДО', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.to}</div>
        )} },

    { field: 'arrival_period', headerName: 'ВРЕМЯ ПРИБЫТИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.arrival_period}</div>
        )}},
    { field: 'product', headerName: 'ТОВАР', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.product}</div>
        )} },
    { field: 'flow', headerName: "РАСХОД", flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow}</div>
        )} },
    { field: 'unit', headerName: 'ЕД.ИЗМЕРЕНИЯ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.unit}</div>
        )} },
    { field: 'flow_min', headerName: 'МИН.РАСХОД', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_min}</div>
        )}},
    { field: 'flow_max', headerName: 'МАКС.РАСХОД', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_max}</div>
        )} },

    { field: 'percentage', headerName: '%', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.percentage}</div>
        )} },

    { field: 'flow_under', headerName: 'НЕДОРАСХОД', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_under}</div>
        )} },

    { field: 'flow_over', headerName: 'СВЕРХ РАСХОД', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_over}</div>
        )} },

    { field: 'distance', headerName: 'РАССТОЯНИЕ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.distance}</div>
        )} },

    { field: 'vehicle_type', headerName: 'ТИП ТРАНСПОРТА', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.vehicle_type}</div>
        )} },

    { field: 'travel_time_day', headerName: 'ВРЕМЯ ПЕРЕВОЗКИ, ДЕНЬ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.travel_time_day}</div>
        )} },

    { field: 'out_processing_cost', headerName: 'СТОИМОСТЬ ВЫХОДЯЩЕЙ ОБРАБОТКИ, ЗА ДЕНЬ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.out_processing_cost}</div>
        )} },

    { field: 'out_processing_cost_t', headerName: 'СТОИМОСТЬ ВЫХОДЯЩЕЙ ОБРАБОТКИ, ВСЕГО', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.out_processing_cost_t}</div>
        )} },

    { field: 'transportation_cost', headerName: 'СТОИМОСТЬ ПЕРЕВОЗКИ, ЗА ДЕНЬ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.transportation_cost}</div>
        )} },

    { field: 'transportation_cost_t', headerName: 'СТОИМОСТЬ ПЕРЕВОЗКИ, ВСЕГО', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.transportation_cost_t}</div>
        )} },

    { field: 'tariff', headerName: 'ТАРИФ, ЗА ЕД.', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.tariff}</div>
        )} },

    { field: 'tariff_t', headerName: 'ТАРИФ, ВСЕГО', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.tariff_t}</div>
        )} },

    { field: 'in_processing_cost', headerName: 'СТОИМОСТЬ ВХОДЯЩЕЙ ОБРАБОТКИ, ЗА ЕД.', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.in_processing_cost}</div>
        )} },

    { field: 'in_processing_cost_t', headerName: 'СТОИМОСТЬ ВХОДЯЩЕЙ ОБРАБОТКИ, ВСЕГО', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.in_processing_cost_t}</div>
        )} },

    { field: 'flow_cost', headerName: 'РАСХОДЫ, ЗА ЕД.', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_cost}</div>
        )} },

    { field: 'penalty', headerName: 'ШТРАФ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.penalty}</div>
        )} },

    { field: 'flow_cost_t', headerName: 'РАСХОДЫ, ВСЕГО', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_cost_t}</div>
        )} },

    { field: 'flow_cost_co2', headerName: 'РАСХОД CO2, ЗА ЕД.', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_cost_co2}</div>
        )} },

    { field: 'flow_cost_co2_t', headerName: 'РАСХОД CO2, ВСЕГО', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_cost_co2_t}</div>
        )} },

    { field: 'total', headerName: 'ИТОГО', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.total}</div>
        )} },
];


export const columnsSiteState = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'ПЕРИОД', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )} },

    { field: 'site', headerName: 'СДЕЛКА', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.from}</div>
        )} },

    { field: 'initial_state', headerName: 'НАЧАЛЬНОЕ ПОЛОЖЕНИЕ', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.to}</div>
        )} },

    { field: 'new_state', headerName: 'НОВОЕ ПОЛОЖЕНИЕ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.arrival_period}</div>
        )}},
    { field: 'initial_cost', headerName: 'НАЧАЛЬНАЯ ЦЕНА', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.product}</div>
        )} },
    { field: 'closing_cost', headerName: "ЦЕНА НА ЗАКРЫТИИ", flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow}</div>
        )} },
];


export const columnsOtherCosts = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
        <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'site', headerName: 'СДЕЛКА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.site}</div>
        )}},

    { field: 'other_cost', headerName: 'ПРОЧИЕ РАСХОДЫ, ЗА ДЕНЬ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.other_cost}</div>
        )}},

    { field: 'other_cost_pp', headerName: 'ПРОЧИЕ РАСХОДЫ, ЗА ПЕРИОД', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.other_cost_pp}</div>
        )}},
];


export const columnsOperatingSites = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
        <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'site', headerName: 'СДЕЛКА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.site}</div>
        )}},

    { field: 'status', headerName: 'СТАТУС', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.status}</div>
        )}},

    { field: 'initial_cost', headerName: 'НАЧАЛЬНАЯ ЦЕНА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.initial_cost}</div>
        )}},

    { field: 'closing_cost', headerName: 'ЦЕНА НА ЗАКРЫТИИ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.closing_cost}</div>
        )}},

    { field: 'other_cost', headerName: 'ПРОЧИЕ РАСХОДЫ, ЗА ПЕРИОД', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.other_cost}</div>
        )}},

    { field: 'total_cost', headerName: 'ОБЩАЯ ЦЕНА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.total_cost}</div>
        )}},
];


export const columnsStorageByProducts = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'facility', headerName: 'УСТАНОВКА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.facility}</div>
        )}},

    { field: 'product', headerName: 'ТОВАР', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.product}</div>
        )}},

    { field: 'in_flow', headerName: 'ПЕРЕВОЗИТСЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.in_flow}</div>
        )}},

    { field: 'initial_storage', headerName: 'НАЧАЛЬНОЕ ХРАНЕНИЕ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.initial_storage}</div>
        )}},

    { field: 'storage', headerName: 'ХРАНЕНИЕ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage}</div>
        )}},

    { field: 'percentage', headerName: '%', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.percentage}</div>
        )}},

    { field: 'out_flow', headerName: 'ПЕРЕВЕЗЕНО', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.out_flow}</div>
        )}},

    { field: 'carrying_cost', headerName: 'ИЗДЕРЖКИ ХРАНЕНИЯ, ЗА ЕД.', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.carrying_cost}</div>
        )}},

    { field: 'total_carrying_cost', headerName: 'ОБЩИЕ ИЗДЕРЖКИ ХРАНЕНИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.total_carrying_cost}</div>
        )}},

    { field: 'storage_min', headerName: 'МИН.ХРАНЕНИЕ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage_min}</div>
        )}},

    { field: 'storage_max', headerName: 'МАКС.ХРАНИЕ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage_max}</div>
        )}},

    { field: 'understock_penalty', headerName: 'ШТРАФ НЕДОСТАТОК, ЗА ЕД.', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.understock_penalty}</div>
        )}},

    { field: 'overstock_penalty', headerName: 'ШТРАФ ИЗБЫТОК, ЗА ЕД.', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.overstock_penalty}</div>
        )}},

    { field: 'storage_penalty', headerName: 'ШТРАФ ХРАНЕНИЕ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage_penalty}</div>
        )}},

    { field: 'total', headerName: 'ИТОГО', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.total}</div>
        )}},
];


export const columnsProductionCost = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'facility', headerName: 'УСТАНОВКА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.facility}</div>
        )}},

    { field: 'bom', headerName: 'СПЕЦИФИКАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.bom}</div>
        )}},

    { field: 'end_product', headerName: 'КОНЕЧНЫЙ ТОВАР', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.end_product}</div>
        )}},

    { field: 'amount', headerName: 'СУММА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.amount}</div>
        )}},

    { field: 'production_cost', headerName: 'СТОИМОСТЬ ПРОИЗВОДСТВА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.production_cost}</div>
        )}},

    { field: 'min_throughput', headerName: 'МИН.ПРОПУСКНАЯ СПОСОБНОСТЬ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.min_throughput}</div>
        )}},

    { field: 'max_throughput', headerName: 'МАКС.ПРОПУСКНАЯ СПОСОБНОСТЬ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.max_throughput}</div>
        )}},

    { field: 'production_penalty', headerName: 'ПРОИЗВОДСТВЕННЫЙ ШТРАФ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.production_penalty}</div>
        )}},

    { field: 'total_cost', headerName: 'ОБЩАЯ СТОИМОСТЬ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.total_cost}</div>
        )}},
];


export const columnsProductionFlows = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'facility', headerName: 'УСТАНОВКА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.facility}</div>
        )}},

    { field: 'bom', headerName: 'СПЕЦИФИКАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.bom}</div>
        )}},

    { field: 'product', headerName: 'ТОВАР', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.product}</div>
        )}},

    { field: 'consumed', headerName: 'ПОТРЕБЛЕНО', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.consumed}</div>
        )}},

    { field: 'produced', headerName: 'ПРОИЗВЕДЕНО', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.produced}</div>
        )}},

];


export const columnsSharedFlowConstraints = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'from', headerName: 'ИЗ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.from}</div>
        )}},

    { field: 'to', headerName: 'ДО', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.to}</div>
        )}},

    { field: 'products', headerName: 'ТОВАРЫ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.products}</div>
        )}},

    { field: 'flow', headerName: 'РАСХОД, ОБЪЕМ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow}</div>
        )}},

    { field: 'flow_min', headerName: 'МИН.РАСХОД, ОБЪЕМ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_min}</div>
        )}},

    { field: 'flow_max', headerName: 'МАКС.РАСХОД, ОБЪЕМ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_max}</div>
        )}},

    { field: 'flow_under_cost', headerName: 'РАСХОД НИЖЕ ЗАТРАТ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_under_cost}</div>
        )}},

    { field: 'flow_over_cost', headerName: 'РАСХОД СВЕРХ ЗАТРАТ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_over_cost}</div>
        )}},

    { field: 'penalty', headerName: 'ШТРАФ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.penalty}</div>
        )}},
];


export const columnsSharedStoragesConstraints = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'facilities', headerName: 'УСТАНОВКИ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.facilities}</div>
        )}},

    { field: 'products', headerName: 'ТОВАРЫ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.products}</div>
        )}},

    { field: 'storage', headerName: 'ХРАНИЛИЩЕ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage}</div>
        )}},

    { field: 'flow', headerName: 'РАСХОД, ОБЪЕМ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow}</div>
        )}},

    { field: 'storage_min', headerName: 'МИН.ХРАНЕНИЕ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage_min}</div>
        )}},

    { field: 'storage_max', headerName: 'МАКС.ХРАНЕНИЕ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage_max}</div>
        )}},

    { field: 'understock_penalty', headerName: 'ШТРАФ ЗА НЕДОСТАТОК, ЗА ЕД.', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.understock_penalty}</div>
        )}},

    { field: 'overstock_penalty', headerName: 'ШТРАФ ЗА ИЗБЫТОК, ЗА ЕД.', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.overstock_penalty}</div>
        )}},

    { field: 'penalty', headerName: 'ШТРАФ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.penalty}</div>
        )}},
];


export const columnsVehicleFlows = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'ПЕРИОД', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'source', headerName: 'ИСТОЧНИК', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.source}</div>
        )}},

    { field: 'destination', headerName: 'РАССТОЯНИЕ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.destination}</div>
        )}},

    { field: 'vehicle_type', headerName: 'ТИП ТРАНСПОРТА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.vehicle_type}</div>
        )}},

    { field: 'vehicle_trips', headerName: 'ТРАНСПОРТНЫЕ ПЕРЕВОЗКИ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.vehicle_trips}</div>
        )}},

    { field: 'cost', headerName: 'СТОИМОСТЬ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.cost}</div>
        )}},

    { field: 'co2', headerName: 'CO2', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.co2}</div>
        )}},

    { field: 'total_products_flow', headerName: 'ОБЩИЙ ПОТОК ПРОДУКЦИИ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.total_products_flow}</div>
        )}},

    { field: 'unit', headerName: 'ЕД.ИЗМЕРЕНИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.unit}</div>
        )}},

    { field: 'vehicle_capacity', headerName: 'ВМЕСТИМОСТЬ ТРАНСПОРТА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.vehicle_capacity}</div>
        )}},

    { field: 'min_load', headerName: 'МИН.ЗАГРУЗКА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.min_load}</div>
        )}},

    { field: 'actual_load', headerName: 'ФАКТИЧЕСКАЯ ЗАГРУЗКА', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.actual_load}</div>
        )}},
];

export const columnsNamedExpressions = [
    { field: 'iteration', headerName: 'ИТЕРАЦИЯ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'expression_name', headerName: 'НАЗВАНИЕ ОПЕРАЦИИ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.expression_name}</div>
        )}},

    { field: 'value', headerName: 'ЗНАЧЕНИЕ', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.value}</div>
        )}},

];

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
    { field: 'iteration', headerName: 'ITERATION', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'inbound_processing_cost', headerName: 'INBOUND PROCESSING COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.inbound_processing_cost}</div>
        )}},

    { field: 'transportation_cost', headerName: 'TRANSPORTATION COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.transportation_cost}</div>
        )}},

    { field: 'tariffs', headerName: 'TARIFFS', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.tariffs}</div>
        )}},

    { field: 'revenue', headerName: 'REVENUE', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.revenue}</div>
        )}},

    { field: 'supply_cost', headerName: 'SUPPLY COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.supply_cost}</div>
        )}},

    { field: 'outbound_processing_cost', headerName: 'OUTBOUND PROCESSING COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.outbound_processing_cost}</div>
        )}},

    { field: 'initial_cost', headerName: 'INITIAL COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.initial_cost}</div>
        )}},

    { field: 'closing_cost', headerName: 'CLOSING COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.closing_cost}</div>
        )}},

    { field: 'penalties', headerName: 'PENALTIES', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.penalties}</div>
        )}},

    { field: 'production_cost', headerName: 'PRODUCTION COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.production_cost}</div>
        )}},

    { field: 'other_cost', headerName: 'OTHER COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.other_cost}</div>
        )}},

    { field: 'carrying_cost', headerName: 'CARRYING COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.carrying_cost}</div>
        )}},

    { field: 'objective', headerName: 'OBJECTIVE', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.objective}</div>
        )}},
];
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