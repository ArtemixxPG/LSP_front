import React, {useState, Fragment, useEffect} from 'react';
import { Waypoint } from "react-waypoint";
import MUIDataTable from "mui-datatables";
import {
    Paper
} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material";
import "./NewDatatable/datable.scss"

const CompareDatatable = (props) => {

    const styles = theme => ({
        root: {
            width: "100%",
            overflowX: "auto",
            height: 300,
            flexGrow: 1
        },
        head: {
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            position: "sticky",
            fontSize: ".6rem",
            top: 0
        },
        table: {
            minWidth: 700,
            height: 200
        },
        tableCell: {
            fontSize: ".6rem"
        },
    });

    let numeral = require('numeral');
    const [data, setData] = useState([])


    // useEffect(()=>{
    //     let active = true;
    //     let cleanupFunction = false;
    //     const fetchData = async () => {
    //         try {
    //             let result = null;
    //             const response = await fetch(props.url);
    //
    //             if(response.ok) {
    //                 result = await response.json();
    //
    //             } else {
    //                 // props.setError(true);
    //             }
    //
    //             // непосредственное обновление состояния при условии, что компонент не размонтирован
    //             if(!cleanupFunction) {
    //                 if(props.marker === 'df') {
    //                     setData(props.dataSet(formData(result)).demandFulfilmentNew);
    //                 } else {
    //                     setData(formData(result));
    //                 }
    //             }
    //         } catch (e) {
    //             // props.setError(true);
    //             console.error(e.message)
    //         }
    //
    //         function formData(obj) {
    //             let dfps = 0;
    //             let dfpm = 0;
    //             let dfop = 0;
    //             let dfopp = 0;
    //             let vpc = 0;
    //             let vp = 0;
    //             for (let propKey in obj) {
    //                 if(obj[propKey]["vehicle_type"] === "Авто 20 т КП") {
    //                     vpc += obj[propKey]["vehicle_trips"];
    //                     vp += obj[propKey]["actual_load"];
    //                 }
    //                 if(obj[propKey]["vehicle_type"] === "Авто 10 т КП") {
    //                     vpc += obj[propKey]["vehicle_trips"];
    //                     vp += obj[propKey]["actual_load"];
    //                 }
    //                 if(obj[propKey]["vehicle_type"] === "Авто 5 т КП") {
    //                     vpc += obj[propKey]["vehicle_trips"];
    //                     vp += obj[propKey]["actual_load"];
    //                 }
    //                 if(obj[propKey]["vehicle_type"] === "Полувагон КП") {
    //                     vpc += obj[propKey]["vehicle_trips"];
    //                     vp += obj[propKey]["actual_load"];
    //                 }
    //                 if(obj[propKey]["vehicle_type"] === "Ж/д платформа КП") {
    //                     vpc += obj[propKey]["vehicle_trips"];
    //                     vp += obj[propKey]["actual_load"];
    //                 }
    //                 let str = numeral(obj[propKey]["value"]).format("0.000e+0");
    //                 obj[propKey]["value"] = parseFloat(str);
    //                 if((obj[propKey]["iteration"] && obj[propKey]["expression_name"]) != null) {
    //                     obj[propKey]["lol"] = str;
    //                 }
    //                 if(obj[propKey] == 0){
    //                     delete obj[propKey];
    //                 }
    //                 if(obj[propKey]["iteration"] && obj[propKey]["revenue"] == null) {
    //                     delete obj[propKey]["iteration"];
    //                     delete obj[propKey]["inbound_processing_cost"];
    //                     delete obj[propKey]["outbound_processing_cost"];
    //                     delete obj[propKey]["production_cost"];
    //                     delete obj[propKey]["transportation_cost"];
    //                     delete obj[propKey]["supply_cost"];
    //                     delete obj[propKey]["revenue"];
    //                     delete obj[propKey]["total_cost"];
    //                     delete obj[propKey]["profit"];
    //                 }
    //
    //                 dfps += obj[propKey]["satisfied"];
    //                 dfpm += obj[propKey]["demandMin"];
    //
    //                 if(obj[propKey]["percentage"] >= 90) {
    //                     dfop += 1;
    //                 }
    //                 if(obj[propKey]["percentage"]) {
    //                     dfopp += 1;
    //                 }
    //
    //                 if((obj[propKey]["inbound_processing_cost"] && obj[propKey]["outbound_processing_cost"]) != null) {
    //                     let num1 = obj[propKey]["inbound_processing_cost"] + obj[propKey]["outbound_processing_cost"] +
    //                         obj[propKey]["production_cost"] + obj[propKey]["transportation_cost"] + obj[propKey]["supply_cost"];
    //                     obj[propKey]["total_cost"] = num1;
    //                 }
    //                 if((obj[propKey]["revenue"] && obj[propKey]["total_cost"]) != null) {
    //                     let num2 = obj[propKey]["revenue"] + obj[propKey]["total_cost"];
    //                     obj[propKey]["profit"] = num2;
    //                 }
    //             }
    //             obj["0"]["vehicleParametersCapacity"] = vpc;
    //             obj["0"]["vehicleParameters"] = vp;
    //
    //             let dfores = (dfop * 100) / dfopp;
    //             obj["0"]["demandForOrder"] = dfopp;
    //
    //             let dfp = (dfps * 100) / dfpm;
    //             obj["0"]["demandForProduct"] = dfp;
    //             return obj;
    //         }
    //     };
    //
    //     fetchData().then();
    //     // функция очистки useEffect
    //     return () => cleanupFunction = true;
    // }, [])


    const columns = [
        {
            name: "Id",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const rowIndex = tableMeta.rowIndex;
                    const { filteredMessages } = this.state;

                    if (rowIndex === filteredMessages.length - 10) {
                        return (
                            <Fragment>
                                <Waypoint
                                    onEnter={() => {
                                        console.log("WAYPOINT REACHED");
                                        setData({
                                            // filteredMessages: [...filteredMessages, ...newData]
                                        });
                                    }}
                                />
                                {value}*
                            </Fragment>
                        );
                    } else {
                        return <Fragment>{value}</Fragment>;
                    }
                }
            }
        },
        {
            name: "Message"
        },
        {
            name: "Requester"
        }
    ];

    const options = {
        filter: false,
        filterType: "dropdown",
        responsive: "scroll",
        selectableRows: "multiple",
        pagination: false,
        onRowClick(rowNode) {
            console.log(rowNode);
        }
    };

    const theme  =
        createTheme({
            typography: {
                useNextVariants: true
            },
            overrides: {
                MUIDataTable: {
                    root: {}
                },
                MUIDataTableBodyRow: {
                    root: {
                        "&:nth-child(odd)": {
                            backgroundColor: "#f6f6f6"
                        }
                    }
                },
                MUIDataTableBodyCell: {

                }
            }
        });

    return (
        <Fragment>
            <Paper className="table">
                <ThemeProvider theme={theme}>
                    <MUIDataTable
                        data={props.data}
                        columns={props.columns}
                        options={options}
                    />
                </ThemeProvider>
            </Paper>
        </Fragment>
    );
};

export default CompareDatatable;