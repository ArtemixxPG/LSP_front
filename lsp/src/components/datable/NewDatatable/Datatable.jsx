import React, {useState, Fragment, Component, useEffect} from 'react';
import { Waypoint } from "react-waypoint";
import MUIDataTable from "mui-datatables";
import {
    Paper
} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material";
import numeral from "numeral";
import "./datable.scss"

const Datatable = (props) => {

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
        }
    });

    let numeral = require('numeral');
    const [data, setData] = useState([])


    useEffect(()=>{
        let active = true;
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                let result = null;
                props.url.searchParams.append("experiment", props.experiment)
                props.url.searchParams.append("limit", props.limit)
                const response = await fetch(props.url);

                if(response.ok) {
                    result = await response.json();

                } else {

                        props.setError(true);

                }

                // непосредственное обновление состояния при условии, что компонент не размонтирован
                if(!cleanupFunction) {
                    setData(formData(result));
                }
            } catch (e) {
                props.setError(true);
                console.error(e.message)
            }

            function formData(obj) {
                for (let propKey in obj) {
                    //vehicle_flows
                    let strC = numeral(obj[propKey]["cost"]).format("0.000");
                    obj[propKey]["cost"] = parseFloat(strC);
                    let strTPF = numeral(obj[propKey]["total_products_flow"]).format("0.00");
                    obj[propKey]["total_products_flow"] = parseFloat(strTPF);
                    let strAL = numeral(obj[propKey]["actual_load"]).format("0.000");
                    obj[propKey]["actual_load"] = parseFloat(strAL);
                    let strFL = numeral(obj[propKey]["flow"]).format("0.00");

                    //product_flows
                    obj[propKey]["flow"] = parseFloat(strFL);
                    let strD = numeral(obj[propKey]["distance"]).format("0.00");
                    obj[propKey]["distance"] = parseFloat(strD);
                    let strFCP = numeral(obj[propKey]["flowCostPi"]).format("0.00");
                    obj[propKey]["flowCostPi"] = parseFloat(strFCP);
                    let strFCT = numeral(obj[propKey]["flowCostT"]).format("0.00");
                    obj[propKey]["flowCostT"] = parseFloat(strFCT);
                    let strIPCp = numeral(obj[propKey]["inProcessingCostPi"]).format("0.00");
                    obj[propKey]["inProcessingCostPi"] = parseFloat(strIPCp);
                    let strIPCt = numeral(obj[propKey]["inProcessingCostT"]).format("0.00");
                    obj[propKey]["inProcessingCostT"] = parseFloat(strIPCt);
                    let strOPCt = numeral(obj[propKey]["outProcessingCosT"]).format("0.00");
                    obj[propKey]["outProcessingCosT"] = parseFloat(strOPCt);
                    let strOPCp = numeral(obj[propKey]["outProcessingCostPi"]).format("0.00");
                    obj[propKey]["outProcessingCostPi"] = parseFloat(strOPCp);
                    let strTT = numeral(obj[propKey]["travelTime"]).format("0.00");
                    obj[propKey]["travelTime"] = parseFloat(strTT);
                    let strTCt = numeral(obj[propKey]["transportationCostT"]).format("0.00");
                    obj[propKey]["transportationCostT"] = parseFloat(strTCt);
                    let strTCp = numeral(obj[propKey]["transportationCostPi"]).format("0.00");
                    obj[propKey]["transportationCostPi"] = parseFloat(strTCp);
                    let strFC2p = numeral(obj[propKey]["flowCO2pi"]).format("0.00");
                    obj[propKey]["flowCO2pi"] = parseFloat(strFC2p);
                    let strFC2t = numeral(obj[propKey]["flowCO2t"]).format("0.00");
                    obj[propKey]["flowCO2t"] = parseFloat(strFC2t);
                    let strFmin = numeral(obj[propKey]["flowMin"]).format("0.00");
                    obj[propKey]["flowMin"] = parseFloat(strFmin);
                    let strFmax = numeral(obj[propKey]["flowMax"]).format("0.00");
                    obj[propKey]["flowMax"] = parseFloat(strFmax);
                    let strFOC = numeral(obj[propKey]["flowOverCost"]).format("0.00");
                    obj[propKey]["flowOverCost"] = parseFloat(strFOC);
                    let strFUC = numeral(obj[propKey]["flowUnderCost"]).format("0.00");
                    obj[propKey]["flowUnderCost"] = parseFloat(strFUC);
                    let strTp = numeral(obj[propKey]["tariffPi"]).format("0.00");
                    obj[propKey]["tariffPi"] = parseFloat(strTp);
                    let strTt = numeral(obj[propKey]["tariffT"]).format("0.00");
                    obj[propKey]["tariffT"] = parseFloat(strTt);
                    let strPen = numeral(obj[propKey]["penalty"]).format("0.00");
                    obj[propKey]["penalty"] = parseFloat(strPen);

                    //storage by product
                    let strSif = numeral(obj[propKey]["in_flow"]).format("0.00");
                    obj[propKey]["in_flow"] = parseFloat(strSif);
                    let strSis = numeral(obj[propKey]["initial_storage"]).format("0.00");
                    obj[propKey]["initial_storage"] = parseFloat(strSis);
                    let strSs = numeral(obj[propKey]["storage"]).format("0.00");
                    obj[propKey]["storage"] = parseFloat(strSs);
                    let strSof = numeral(obj[propKey]["out_flow"]).format("0.00");
                    obj[propKey]["out_flow"] = parseFloat(strSof);
                    let strSccp = numeral(obj[propKey]["carrying_cost_pu"]).format("0.00");
                    obj[propKey]["carrying_cost_pu"] = parseFloat(strSccp);
                    let strScct = numeral(obj[propKey]["carrying_cost_t"]).format("0.00");
                    obj[propKey]["carrying_cost_t"] = parseFloat(strScct);
                    let strSsm = numeral(obj[propKey]["storage_min"]).format("0.00");
                    obj[propKey]["storage_min"] = parseFloat(strSsm);
                    let strSsmax = numeral(obj[propKey]["storage_max"]).format("0.00");
                    obj[propKey]["storage_max"] = parseFloat(strSsmax);
                    let strSup = numeral(obj[propKey]["understock_penalty"]).format("0.00");
                    obj[propKey]["understock_penalty"] = parseFloat(strSup);
                    let strSop = numeral(obj[propKey]["overstock_penalty"]).format("0.00");
                    obj[propKey]["overstock_penalty"] = parseFloat(strSop);
                    let strSsp = numeral(obj[propKey]["storage_penalty"]).format("0.00");
                    obj[propKey]["storage_penalty"] = parseFloat(strSsp);
                    let strStc = numeral(obj[propKey]["total_cost"]).format("0.00");
                    obj[propKey]["total_cost"] = parseFloat(strStc);

                }
                return obj;
            }
        };

        fetchData().then();
        // функция очистки useEffect
        return () => cleanupFunction = true;
    }, [props.experiment])


    // const columns = [
    //     {
    //         name: "Id",
    //         options: {
    //             filter: false,
    //             customBodyRender: (value, tableMeta, updateValue) => {
    //                 const rowIndex = tableMeta.rowIndex;
    //                 const { filteredMessages } = this.state;
    //
    //                 if (rowIndex === filteredMessages.length - 10) {
    //                     return (
    //                         <Fragment>
    //                             <Waypoint
    //                                 onEnter={() => {
    //                                     console.log("WAYPOINT REACHED");
    //                                     setData({
    //                                         // filteredMessages: [...filteredMessages, ...newData]
    //                                     });
    //                                 }}
    //                             />
    //                             {value}*
    //                         </Fragment>
    //                     );
    //                 } else {
    //                     return <Fragment>{value}</Fragment>;
    //                 }
    //             }
    //         }
    //     },
    //     {
    //         name: "Message"
    //     },
    //     {
    //         name: "Requester"
    //     }
    // ];

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
        createTheme( {
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
                        data={data}
                        columns={props.columns}
                        options={options}
                    />
                </ThemeProvider>
            </Paper>
        </Fragment>
    );
};

export default Datatable;