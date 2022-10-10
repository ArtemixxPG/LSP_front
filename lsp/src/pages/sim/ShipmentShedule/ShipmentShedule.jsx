import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Chart from "../../../components/chart/Chart";
import Datable from "../../../components/datable/Datable";
import {columnsSharedFlowConstraints, columnsShipmentShedule} from "../../../HeadersTable";
import "./shipmentshedule.scss"
import MenuIcon from "@mui/icons-material/Menu";
//import "./shipmentshedule.scss"


const ShipmentShedule = (props) => {
    const [data, setData] = useState({ dataTable:[], dataSet: []});
    const [rowId, setRowId] = useState();
    const [icon, setIcon] = useState(false)

    const url = (page) => {
        return 'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/sim/datasets/shipmentshedule?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    }

    useEffect(()=>{
            let cleanupFunction = false;
            const fetchData = async () => {
                try {
                    const response = await fetch('http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/sim/ss/data');
                    const result = await response.json();
                    // непосредственное обновление состояния при условии, что компонент не размонтирован
                    if(!cleanupFunction) { setData(result);
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
                    <Chart FirstName = "величина" SecondName = "количество машин" data={data.dataSet}  dataName ="name"
                           dataKeyFirst="firstValue" dataKeySecond="secondValue"/>
                </div>
                <div className="datatable">
                    <Datable url={url} columns={columnsShipmentShedule} table={"pageShipmentShedule"}/>
                </div>
            </div>
        </div>
    );
};

export default ShipmentShedule;