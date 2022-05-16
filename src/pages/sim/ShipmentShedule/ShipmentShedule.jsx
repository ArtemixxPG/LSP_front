import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Chart from "../../../components/chart/Chart";
import Datable from "../../../components/datable/Datable";
import {columnsShipmentShedule} from "../../../HeadersTable";

import "./shipmentshedule.scss"

const ShipmentShedule = () => {
    const [data, setData] = useState({ dataTable:[], dataSet: []})


    useEffect(()=>{
            let cleanupFunction = false;
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:8080/sim/ss/data');
                    const result = await response.json();


                    // непосредственное обновление состояния при условии, что компонент не размонтирован
                    if(!cleanupFunction){ setData(result);

                    }


                } catch (e) {
                    console.error(e.message)
                }
            };


            fetchData().then();
            // функция очистки useEffect
            return () => cleanupFunction = true;
        }, []
    )

    return (
        <div className="shipmentshedule">
            <SideBar/>
            <div className="container">
                <NavBar/>
                <div className="charts">
                    <Chart data={data.dataSet}  dataName = "name" dataKeyFirst="firstValue" dataKeySecond="secondValue"/>
                </div>
                <div className="datatable">
                    <Datable rows={data.dataTable} columns={columnsShipmentShedule}/>
                </div>

            </div>
        </div>
    );
};

export default ShipmentShedule;