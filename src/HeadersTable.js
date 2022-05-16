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
    { field: 'object', headerName: 'OBJECT', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.object}</div>
        )}},
    { field: 'shipment_id', headerName: 'SHIPMENT ID', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.shipment_id}</div>
        )} },
    { field: 'original_shipper', headerName: 'ORIGINAL SHIPPER', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.original_shipper}</div>
        )} },
    { field: 'vehicle_type', headerName: 'VEHICLE TYPE', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.vehicle_type}</div>
        )} },

    { field: 'previous_location', headerName: 'PREVIOUS LOCATION', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.previous_location}</div>
        )}},
    { field: 'current_location', headerName: 'CURRENT LOCATION', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.current_location}</div>
        )} },
    { field: 'next_location', headerName: "NEXT LOCATION", flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.next_location}</div>
        )} },
    { field: 'action', headerName: 'ACTION', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.action}</div>
        )} },
    { field: 'date', headerName: 'DATE', flex:1, renderCell:(params)=>{return(
            <div className="cell">{params.row.date}</div>
        )}},
    { field: 'product', headerName: 'PRODUCT', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.product}</div>
        )} },

    { field: 'unit', headerName: 'UNIT', flex:1,  renderCell:(params)=>{return(
            <div className="cell">{params.row.unit}</div>
        )} },
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