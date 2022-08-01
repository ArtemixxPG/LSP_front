import React, {useEffect, useState} from 'react';
import NavBar from "../../../components/navbar/NavBar";
import SideBar from "../../../components/sidebar/SideBar";
import Chart from "../../../components/chart/Chart";
import {columnsProductFlow, columnsSharedFlowConstraints} from "../../../HeadersTable"

import "./productflows.scss"
import Datable from "../../../components/datable/Datable";
import MenuIcon from "@mui/icons-material/Menu";

const ProductFlows = () => {

    const [data, setData] = useState({ dataTable:[], dataSet: []})
    const [rowId, setRowId] = useState();
    const [icon, setIcon] = useState(false)


    useEffect(()=>{
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/sim/pf/data');
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
        <div className="productflows">
            <div className="openMenu">
                <MenuIcon className="menuButton" onClick={() => setIcon(!icon)}/>
            </div>
            <SideBar
                open = {icon}
                close ={()=>setIcon(!icon)}
            />
            <Datable rows = {data}
                     columns = {columnsSharedFlowConstraints}
                     new_id = {rowId}
                     pageSize={5}
                     rowsPerPageOptions={5}
            />
                <div className="charts">
                <Chart data={data.dataSet}  dataName = "name" dataKeyFirst="value" dataKeySecond=""/>
                </div>
                <div className="datatable">
                    <Datable rows={data.dataTable} columns={columnsProductFlow}/>
                </div>


        </div>
    );
};

export default ProductFlows;