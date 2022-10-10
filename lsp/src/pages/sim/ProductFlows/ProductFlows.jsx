import React, {useEffect, useState} from 'react';
import NavBar from "../../../components/navbar/NavBar";
import SideBar from "../../../components/sidebar/SideBar";
import Chart from "../../../components/chart/Chart";
import {columnsProductFlow, columnsSharedFlowConstraints} from "../../../HeadersTable"

import "./productflows.scss"
import Datable from "../../../components/datable/Datable";
import MenuIcon from "@mui/icons-material/Menu";

const ProductFlows = (props) => {

    const [data, setData] = useState({ dataTable:[], dataSet: []})
    const [rowId, setRowId] = useState();
    const [icon, setIcon] = useState(false)

    const url = (page) => {
        return 'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/sim/datasets/productflows?limit=' +  5 + '&offset=' + page * 5
    }

    useEffect(()=>{
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/sim/pf/data');
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
                menu = {props.menu}
                setMenu = {props.setMenu}
                open = {icon}
                close = {()=>setIcon(!icon)}
                experiments={props.experiments}
            />
            <div className="content">
                <div className="charts">
                <Chart FirstName = "количество" data={data.dataSet}  dataName = "name" dataKeyFirst="firstValue" dataKeySecond=""/>
                </div>
                <div className="datatable">
                    <Datable url={url} columns={columnsProductFlow} table={"pageProductFlows"}/>
                </div>
            </div>
        </div>
    );
};

export default ProductFlows;