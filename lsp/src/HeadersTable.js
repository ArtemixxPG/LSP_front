export const columnsProductFlow = [
    { field: 'object', headerName: 'OBJECT', flex:1, renderCell:(params)=>{return(
        <div className="cell">{params.row.object}</div>
        )}},
    { field: 'product', headerName: 'PRODUCT', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.product}</div>
        )} },
    { field: 'destination', headerName: 'DESTINATION', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.destination}</div>
        )} },
    { field: 'period', headerName: 'PERIOD', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )} },
    {
        field: 'amount',
        headerName: 'AMOUNT',
        type: 'number',
        width: 90,
    }
];

export const columnsShipmentShedule = [
        {
            field: 'object', headerName: 'OBJECT', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.object}</div>
                )
            }
        },
        {
            field: 'shipment_id', headerName: 'SHIPMENT ID', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.shipment_id}</div>
                )
            }
        },
        {
            field: 'original_shipper', headerName: 'ORIGINAL SHIPPER', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.original_shipper}</div>
                )
            }
        },
        {
            field: 'vehicle_type', headerName: 'VEHICLE TYPE', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.vehicle_type}</div>
                )
            }
        },

        {
            field: 'previous_location', headerName: 'PREVIOUS LOCATION', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.previous_location}</div>
                )
            }
        },
        {
            field: 'current_location', headerName: 'CURRENT LOCATION', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.current_location}</div>
                )
            }
        },
        {
            field: 'next_location', headerName: "NEXT LOCATION", flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.next_location}</div>
                )
            }
        },
        {
            field: 'action', headerName: 'ACTION', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.action}</div>
                )
            }
        },
        {
            field: 'date', headerName: 'DATE', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.date}</div>
                )
            }
        },
        {
            field: 'product', headerName: 'PRODUCT', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.product}
                    </div>
                )
            }
        },

        {
            field: 'unit', headerName: 'UNIT', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.unit}</div>
                )
            }
        },
        {
            field: 'vehicle_amount',
            headerName: 'VEHICLE AMOUNT',
            type: 'number',
            width: 90,
        },
        {
            field: 'quantity',
            headerName: 'QUANTITY',
            type: 'number',
            width: 90,
        }
    ];



export const columnsDemandFulfillment = [
    { field: 'iteration', headerName: 'ITERATION', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},
    { field: 'period', headerName: 'PERIOD', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )} },
    { field: 'customer', headerName: 'CUSTOMER', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.customer}</div>
        )} },
    { field: 'product', headerName: 'PRODUCT', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.product}</div>
        )} },

    { field: 'demandMin', headerName: 'DEMAND MIN', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.demandMin}</div>
        )}},
    { field: 'demandMax', headerName: 'DEMAND MAX', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.demandMax}</div>
        )} },
    { field: 'satisfied', headerName: "SATISFIED", flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.satisfied}</div>
        )} },
    { field: 'percentage', headerName: 'PERCENTAGE', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.percentage}</div>
        )} },
    { field: 'revenue_per_item', headerName: 'REVENUE, PER ITEM', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.revenue_per_item}</div>
        )}},
    { field: 'revenueTotal', headerName: 'REVENUE TOTAL', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.revenueTotal}</div>
        )} },

    { field: 'under_cost', headerName: 'UNDER COST', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.under_cost}</div>
        )} },

    { field: 'over_cost', headerName: 'OVER COST', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.over_cost}</div>
        )} },

    { field: 'penalty', headerName: 'PENALTY', flex:1,  renderCell:(params)=>{return(
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
            field: 'iterationCell', headerName: 'ITERATION', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.iteration}</div>
                )
            }
        },


        {
            field: 'period', headerName: 'PERIOD', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.period}</div>
                )
            }
        },
        {
            field: 'customer', headerName: 'CUSTOMER', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.customer}</div>
                )
            }
        },
        {
            field: 'product', headerName: 'PRODUCT', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.product}</div>
                )
            }
        },

        {
            field: 'demandMin', headerName: 'DEMAND MIN', flex: 1, renderCell: (params) => {
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
            field: 'demandMax', headerName: 'DEMAND MAX', flex: 1, renderCell: (params) => {
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
            field: 'satisfied', headerName: "SATISFIED", flex: 1, renderCell: (params) => {
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
            field: 'percentage', headerName: 'PERCENTAGE', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.percentage}</div>
                )
            }
        },
        {
            field: 'revenue_per_item', headerName: 'REVENUE, PER ITEM', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.revenue_per_item}</div>
                )
            }
        },
        {
            field: 'revenueTotal', headerName: 'REVENUE TOTAL', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.revenueTotal}</div>
                )
            }
        },

        {
            field: 'under_cost', headerName: 'UNDER COST', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.under_cost}</div>
                )
            }
        },

        {
            field: 'over_cost', headerName: 'OVER COST', flex: 1, renderCell: (params) => {
                return (
                    <div className="cell">{params.row.over_cost}</div>
                )
            }
        },

        {
            field: 'penalty', headerName: 'PENALTY', flex: 1, renderCell: (params) => {
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
    { field: 'iteration', headerName: 'ITERATION', flex:1, renderCell:(params)=>{

        return(
            <div className="cell">{params.row.iteration}</div>
        )
        }},
    { field: 'period', headerName: 'PERIOD', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )} },
    { field: 'from', headerName: 'FROM', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.from}</div>
        )} },
    { field: 'to', headerName: 'TO', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.to}</div>
        )} },

    { field: 'arrival_period', headerName: 'ARRIVAL PERIOD', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.arrival_period}</div>
        )}},
    { field: 'product', headerName: 'PRODUCT', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.product}</div>
        )} },
    { field: 'flow', headerName: "FLOW", flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow}</div>
        )} },
    { field: 'unit', headerName: 'UNIT', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.unit}</div>
        )} },
    { field: 'flow_min', headerName: 'FLOW MIN', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_min}</div>
        )}},
    { field: 'flow_max', headerName: 'FLOW MAX', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_max}</div>
        )} },

    { field: 'percentage', headerName: 'PERCENTAGE', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.percentage}</div>
        )} },

    { field: 'flow_under', headerName: 'FLOW UNDER', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_under}</div>
        )} },

    { field: 'flow_over', headerName: 'FLOW OVER', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_over}</div>
        )} },

    { field: 'distance', headerName: 'DISTANCE', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.distance}</div>
        )} },

    { field: 'vehicle_type', headerName: 'VEHICLE_TYPE', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.vehicle_type}</div>
        )} },

    { field: 'travel_time_day', headerName: 'TRAVEL TIME, DAY', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.travel_time_day}</div>
        )} },

    { field: 'out_processing_cost', headerName: 'OUT PROCESSING COST, PER ITEM', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.out_processing_cost}</div>
        )} },

    { field: 'out_processing_cost_t', headerName: 'OUT PROCESSING COST, TOTAL', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.out_processing_cost_t}</div>
        )} },

    { field: 'transportation_cost', headerName: 'TRANSPORTATION COST, PER ITEM', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.transportation_cost}</div>
        )} },

    { field: 'transportation_cost_t', headerName: 'TRANSPORTATION COST, TOTAL', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.transportation_cost_t}</div>
        )} },

    { field: 'tariff', headerName: 'TARIFF, PER ITEM', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.tariff}</div>
        )} },

    { field: 'tariff_t', headerName: 'TARIFF, TOTAL', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.tariff_t}</div>
        )} },

    { field: 'in_processing_cost', headerName: 'IN PROCESSING COST, PER ITEM', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.in_processing_cost}</div>
        )} },

    { field: 'in_processing_cost_t', headerName: 'IN PROCESSING COST, TOTAL', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.in_processing_cost_t}</div>
        )} },

    { field: 'flow_cost', headerName: 'FLOW COST, PER ITEM', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_cost}</div>
        )} },

    { field: 'penalty', headerName: 'PENALTY', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.penalty}</div>
        )} },

    { field: 'flow_cost_t', headerName: 'FLOW COST, TOTAL', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_cost_t}</div>
        )} },

    { field: 'flow_cost_co2', headerName: 'FLOW COST CO2, PER ITEM', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_cost_co2}</div>
        )} },

    { field: 'flow_cost_co2_t', headerName: 'FLOW COST CO2, TOTAL', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_cost_co2_t}</div>
        )} },

    { field: 'total', headerName: 'TOTAL', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.total}</div>
        )} },
];


export const columnsSiteState = [
    { field: 'iteration', headerName: 'ITERATION', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'PERIOD', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )} },

    { field: 'site', headerName: 'SITE', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.from}</div>
        )} },

    { field: 'initial_state', headerName: 'INITIAL STATE', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.to}</div>
        )} },

    { field: 'new_state', headerName: 'NEW STATE', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.arrival_period}</div>
        )}},
    { field: 'initial_cost', headerName: 'INITIAL COST', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.product}</div>
        )} },
    { field: 'closing_cost', headerName: "CLOSING COST", flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.flow}</div>
        )} },
];


export const columnsOtherCosts = [
    { field: 'iteration', headerName: 'ITERATION', flex:1, renderCell:(params)=>{return(
        <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'PERIOD', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'site', headerName: 'SITE', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.site}</div>
        )}},

    { field: 'other_cost', headerName: 'OTHER COST, PER DAY', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.other_cost}</div>
        )}},

    { field: 'other_cost_pp', headerName: 'OTHER COST, PER PERIOD', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.other_cost_pp}</div>
        )}},
];


export const columnsOperatingSites = [
    { field: 'iteration', headerName: 'ITERATION', flex:1, renderCell:(params)=>{return(
        <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'PERIOD', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'site', headerName: 'SITE', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.site}</div>
        )}},

    { field: 'status', headerName: 'STATUS', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.status}</div>
        )}},

    { field: 'initial_cost', headerName: 'INITIAL COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.initial_cost}</div>
        )}},

    { field: 'closing_cost', headerName: 'CLOSING COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.closing_cost}</div>
        )}},

    { field: 'other_cost', headerName: 'OTHER COST, PER PERIOD', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.other_cost}</div>
        )}},

    { field: 'total_cost', headerName: 'TOTAL COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.total_cost}</div>
        )}},
];


export const columnsStorageByProducts = [
    { field: 'iteration', headerName: 'ITERATION', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'PERIOD', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'facility', headerName: 'FACILITY', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.facility}</div>
        )}},

    { field: 'product', headerName: 'PRODUCT', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.product}</div>
        )}},

    { field: 'in_flow', headerName: 'IN FLOW', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.in_flow}</div>
        )}},

    { field: 'initial_storage', headerName: 'INITIAL STORAGE', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.initial_storage}</div>
        )}},

    { field: 'storage', headerName: 'STORAGE', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage}</div>
        )}},

    { field: 'percentage', headerName: 'PERCENTAGE', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.percentage}</div>
        )}},

    { field: 'out_flow', headerName: 'OUT FLOW', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.out_flow}</div>
        )}},

    { field: 'carrying_cost', headerName: 'CARRYING COST, PER UNIT', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.carrying_cost}</div>
        )}},

    { field: 'total_carrying_cost', headerName: 'TOTAL CARRYING COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.total_carrying_cost}</div>
        )}},

    { field: 'storage_min', headerName: 'STORAGE MIN', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage_min}</div>
        )}},

    { field: 'storage_max', headerName: 'STORAGE MAX', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage_max}</div>
        )}},

    { field: 'understock_penalty', headerName: 'UNDERSTOCK PENALTY, PER UNIT', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.understock_penalty}</div>
        )}},

    { field: 'overstock_penalty', headerName: 'OVERSTOCK PENALTY, PER UNIT', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.overstock_penalty}</div>
        )}},

    { field: 'storage_penalty', headerName: 'STORAGE PENALTY', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage_penalty}</div>
        )}},

    { field: 'total', headerName: 'TOTAL', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.total}</div>
        )}},
];


export const columnsProductionCost = [
    { field: 'iteration', headerName: 'ITERATION', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'PERIOD', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'facility', headerName: 'FACILITY', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.facility}</div>
        )}},

    { field: 'bom', headerName: 'BOM', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.bom}</div>
        )}},

    { field: 'end_product', headerName: 'END PRODUCT', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.end_product}</div>
        )}},

    { field: 'amount', headerName: 'AMOUNT', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.amount}</div>
        )}},

    { field: 'production_cost', headerName: 'PRODUCTION COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.production_cost}</div>
        )}},

    { field: 'min_throughput', headerName: 'MIN THROUGHPUT', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.min_throughput}</div>
        )}},

    { field: 'max_throughput', headerName: 'MAX THROUGHPUT', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.max_throughput}</div>
        )}},

    { field: 'production_penalty', headerName: 'PRODUCTION PENALTY', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.production_penalty}</div>
        )}},

    { field: 'total_cost', headerName: 'TOTAL COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.total_cost}</div>
        )}},
];


export const columnsProductionFlows = [
    { field: 'iteration', headerName: 'ITERATION', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'PERIOD', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'facility', headerName: 'FACILITY', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.facility}</div>
        )}},

    { field: 'bom', headerName: 'BOM', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.bom}</div>
        )}},

    { field: 'product', headerName: 'PRODUCT', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.product}</div>
        )}},

    { field: 'consumed', headerName: 'CONSUMED', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.consumed}</div>
        )}},

    { field: 'produced', headerName: 'PRODUCED', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.produced}</div>
        )}},

];


export const columnsSharedFlowConstraints = [
    { field: 'iteration', headerName: 'ITERATION', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'PERIOD', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'from', headerName: 'FROM', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.from}</div>
        )}},

    { field: 'to', headerName: 'TO', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.to}</div>
        )}},

    { field: 'products', headerName: 'PRODUCTS', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.products}</div>
        )}},

    { field: 'flow', headerName: 'FLOW, VOLUME', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow}</div>
        )}},

    { field: 'flow_min', headerName: 'FLOW MIN, VOLUME', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_min}</div>
        )}},

    { field: 'flow_max', headerName: 'FLOW MAX, VOLUME', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_max}</div>
        )}},

    { field: 'flow_under_cost', headerName: 'FLOW UNDER COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_under_cost}</div>
        )}},

    { field: 'flow_over_cost', headerName: 'FLOW OVER COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow_over_cost}</div>
        )}},

    { field: 'penalty', headerName: 'PENALTY', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.penalty}</div>
        )}},
];


export const columnsSharedStoragesConstraints = [
    { field: 'iteration', headerName: 'ITERATION', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'PERIOD', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'facilities', headerName: 'FACILITIES', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.facilities}</div>
        )}},

    { field: 'products', headerName: 'PRODUCTS', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.products}</div>
        )}},

    { field: 'storage', headerName: 'STORAGE', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage}</div>
        )}},

    { field: 'flow', headerName: 'FLOW, VOLUME', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.flow}</div>
        )}},

    { field: 'storage_min', headerName: 'STORAGE MIN', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage_min}</div>
        )}},

    { field: 'storage_max', headerName: 'STORAGE MAX', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.storage_max}</div>
        )}},

    { field: 'understock_penalty', headerName: 'UNDERSTOCK PENALTY, PER UNIT', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.understock_penalty}</div>
        )}},

    { field: 'overstock_penalty', headerName: 'OVERSTOCK PENALTY, PER UNIT', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.overstock_penalty}</div>
        )}},

    { field: 'penalty', headerName: 'PENALTY', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.penalty}</div>
        )}},
];


export const columnsVehicleFlows = [
    { field: 'iteration', headerName: 'ITERATION', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.iteration}</div>
        )}},

    { field: 'period', headerName: 'PERIOD', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.period}</div>
        )}},

    { field: 'source', headerName: 'SOURCE', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.source}</div>
        )}},

    { field: 'destination', headerName: 'DESTINATION', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.destination}</div>
        )}},

    { field: 'vehicle_type', headerName: 'VEHICLE TYPE', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.vehicle_type}</div>
        )}},

    { field: 'vehicle_trips', headerName: 'VEHICLE TRIPS', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.vehicle_trips}</div>
        )}},

    { field: 'cost', headerName: 'COST', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.cost}</div>
        )}},

    { field: 'co2', headerName: 'CO2', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.co2}</div>
        )}},

    { field: 'total_products_flow', headerName: 'TOTAL PRODUCTS FLOW', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.total_products_flow}</div>
        )}},

    { field: 'unit', headerName: 'UNIT', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.unit}</div>
        )}},

    { field: 'vehicle_capacity', headerName: 'VEHICLE CAPACITY', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.vehicle_capacity}</div>
        )}},

    { field: 'min_load', headerName: 'MIN LOAD', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.min_load}</div>
        )}},

    { field: 'actual_load', headerName: 'ACTUAL LOAD', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.actual_load}</div>
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