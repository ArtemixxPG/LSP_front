import React, {useEffect, useState, useReducer} from 'react';
import {
    DataGrid, ruRU} from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import "./datable.scss"
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme(
    ruRU
)

const StyledGridOverlay = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    '& .ant-empty-img-1': {
        fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
    },
    '& .ant-empty-img-2': {
        fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
    },
    '& .ant-empty-img-3': {
        fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
    },
    '& .ant-empty-img-4': {
        fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
    },
    '& .ant-empty-img-5': {
        fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
        fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
    },
}));




function CustomNoRowsOverlay() {
    return (
        <StyledGridOverlay>
            <svg
                width="120"
                height="100"
                viewBox="0 0 184 152"
                aria-hidden
                focusable="false"
            >
                <g fill="none" fillRule="evenodd">
                    <g transform="translate(24 31.67)">
                        <ellipse
                            className="ant-empty-img-5"
                            cx="67.797"
                            cy="106.89"
                            rx="67.797"
                            ry="12.668"
                        />
                        <path
                            className="ant-empty-img-1"
                            d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                        />
                        <path
                            className="ant-empty-img-2"
                            d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                        />
                        <path
                            className="ant-empty-img-3"
                            d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                        />
                    </g>
                    <path
                        className="ant-empty-img-3"
                        d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                    />
                    <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
                        <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
                        <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
                    </g>
                </g>
            </svg>
            <Box sx={{ mt: 1 }}>No Rows</Box>
        </StyledGridOverlay>
    );
}

const CompareDatable = (props) => {

    const initialDataSet = {
        count: 0,
        data: []
    }

    let numeral = require('numeral');

    const [count, setCount] = useState(0);
    const [page, setPage] = React.useState(0);
    const [rows, setRows] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [selectionModel, setSelectionModel] = React.useState([]);


    useEffect(()=>{
            let active = true;
            let cleanupFunction = false;
            const fetchData = async () => {
                setLoading(true);
                try {
                    let result = null;
                    const response = await fetch(props.url(page));
                    if(response.ok) {
                        result = await response.json();
                    } else {
                        props.setError(true);
                    }

                    // непосредственное обновление состояния при условии, что компонент не размонтирован
                    if(!cleanupFunction) {
                        setCount(result["count"] = 1);
                        setRows(result[props.table]);
                        formData(result[props.table]);
                        setLoading(false);
                    }
                } catch (e) {
                    props.setError(true);
                    console.error(e.message);
                }

                function formData(obj) {
                    let dfps = 0;
                    let dfpm = 0;
                    let dfop = 0;
                    let dfopp = 0;
                    let vpc = 0;
                    let vp = 0;
                    for (let propKey in obj) {
                        if(obj[propKey]["vehicleType"] === "Авто 20 т КП") {
                            vpc += obj[propKey]["vehicleTrips"];
                            vp += obj[propKey]["actualLoad"];
                        }
                        if(obj[propKey]["vehicleType"] === "Авто 10 т КП") {
                            vpc += obj[propKey]["vehicleTrips"];
                            vp += obj[propKey]["actualLoad"];
                        }
                        if(obj[propKey]["vehicleType"] === "Авто 5 т КП") {
                            vpc += obj[propKey]["vehicleTrips"];
                            vp += obj[propKey]["actualLoad"];
                        }
                        if(obj[propKey]["vehicleType"] === "Полувагон КП") {
                            vpc += obj[propKey]["vehicleTrips"];
                            vp += obj[propKey]["actualLoad"];
                        }
                        if(obj[propKey]["vehicleType"] === "Ж/д платформа КП") {
                            vpc += obj[propKey]["vehicleTrips"];
                            vp += obj[propKey]["actualLoad"];
                        }
                        let str = numeral(obj[propKey]["value"]).format("0.000e+0");
                        obj[propKey]["value"] = parseFloat(str);
                        if((obj[propKey]["iteration"] && obj[propKey]["expression_name"]) != null) {
                            obj[propKey]["lol"] = str;
                        }
                        if(obj[propKey] == 0){
                            delete obj[propKey];
                        }
                        if(obj[propKey]["iteration"] && obj[propKey]["revenue"] == null) {
                            delete obj[propKey]["iteration"];
                            delete obj[propKey]["inbound_processing_cost"];
                            delete obj[propKey]["outbound_processing_cost"];
                            delete obj[propKey]["production_cost"];
                            delete obj[propKey]["transportation_cost"];
                            delete obj[propKey]["supply_cost"];
                            delete obj[propKey]["revenue"];
                            delete obj[propKey]["total_cost"];
                            delete obj[propKey]["profit"];
                        }

                        dfps += obj[propKey]["satisfied"];
                        dfpm += obj[propKey]["demandMin"];

                        if(obj[propKey]["percentage"] >= 90) {
                            dfop += 1;
                        }
                        if(obj[propKey]["percentage"]) {
                            dfopp += 1;
                        }

                        if((obj[propKey]["inbound_processing_cost"] && obj[propKey]["outbound_processing_cost"]) != null) {
                            let num1 = obj[propKey]["inbound_processing_cost"] + obj[propKey]["outbound_processing_cost"] +
                                obj[propKey]["production_cost"] + obj[propKey]["transportation_cost"] + obj[propKey]["supply_cost"];
                            obj[propKey]["total_cost"] = num1;
                        }
                        if((obj[propKey]["revenue"] && obj[propKey]["total_cost"]) != null) {
                            let num2 = obj[propKey]["revenue"] + obj[propKey]["total_cost"];
                            obj[propKey]["profit"] = num2;
                        }
                    }
                    obj["0"]["vehicleParametersCapacity"] = vpc;
                    obj["0"]["vehicleParameters"] = vp;

                    let dfores = (dfop * 100) / dfopp;
                    obj["0"]["demandForOrder"] = dfopp;

                    let dfp = (dfps * 100) / dfpm;
                    obj["0"]["demandForProduct"] = dfp;
                    return obj;
                }
            };


            fetchData().then();
            // функция очистки useEffect
            return () => cleanupFunction = true;
        }, [page]
    )

    return (
        <div className="datable">
            <ThemeProvider theme={theme}>
                <DataGrid
                    rows={rows}
                    columns={props.columns(rows, rows)}
                    pagination
                    checkboxSelection
                    pageSize={8}
                    rowsPerPageOptions={[8]}
                    rowCount={count}

                    paginationMode="server"
                    onPageChange={(newPage) => {
                        setPage(newPage);
                    }}
                    onSelectionModelChange={(newSelectionModel) => {
                        setSelectionModel(newSelectionModel);
                    }}
                    selectionModel={selectionModel}
                    loading={loading}
                    keepNonExistentRowsSelected
                />
            </ThemeProvider>
        </div>
    );
};

export default CompareDatable;