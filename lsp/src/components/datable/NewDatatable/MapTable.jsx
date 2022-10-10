import React, {useState, Fragment, Component, useEffect} from 'react';
import { Waypoint } from "react-waypoint";
import MUIDataTable from "mui-datatables";
import {
    Paper
} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material";
import numeral from "numeral";

const Maptable = (props) => {

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
                useNextVariants: true,
                minWidth: 700,
                height: 200
            },
            overrides: {
                MUIDataTable: {
                    root: {

                    },

                    minWidth: 700,
                    height: 200
                },
                MUIDataTableBodyRow: {
                    root: {
                        "&:nth-child(odd)": {
                            backgroundColor: "#f6f6f6",

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

export default Maptable;