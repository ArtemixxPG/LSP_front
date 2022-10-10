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


    const [data, setData] = useState([])


    useEffect(()=>{
        let active = true;
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                let result = null;
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
                    let str = numeral(obj[propKey]["value"]).format("0.000e+0");
                    obj[propKey]["value"] = parseFloat(str);
                    if((obj[propKey]["iteration"] && obj[propKey]["expression_name"]) != null) {
                        obj[propKey]["lol"] = str;
                    }
                    if (obj[propKey]["lol"] == "0.000e+0") {
                        obj[propKey]["lol"] = "0";
                    }
                }
                return obj;
            }
        };

        fetchData().then();
        // функция очистки useEffect
        return () => cleanupFunction = true;
    }, [])


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