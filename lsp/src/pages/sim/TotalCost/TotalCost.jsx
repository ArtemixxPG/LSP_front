import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Chart from "../../../components/chart/Chart";
import Datable from "../../../components/datable/Datable";
import {columnsProductFlow, columnsSharedFlowConstraints, columnsTotalCost} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu"
import "./totalcost.scss"

const TotalCost = (props) => {

    const [data, setData] = useState({ dataTable:[], dataSet: []})
    const [rowId, setRowId] = useState();
    const [icon, setIcon] = useState(false)


    const url = (page) => {
        return 'http://localhost:8080/sim/datasets/totalcost?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    }

    useEffect(()=>{
            let cleanupFunction = false;
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:8080/sim/tc/data');
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
        <div className="totalcost">
            <div className="openMenu">
                <MenuIcon className="menuButton" onClick={() => setIcon(!icon)}/>
            </div>
            <SideBar
                menu = {props.menu}
                setMenu = {props.setMenu}
                open = {icon}
                close = {()=>setIcon(!icon)}
            />
            <div className="content">
                <div className="charts">
                    <Chart FirstName= "показатель"  data={data.dataSet}  dataName = "name" dataKeyFirst="value"/>
                </div>
                <div className="datatable">
                    <Datable url = {url} columns={columnsTotalCost} table={"pageTotalCosts"}/>
                </div>
            </div>
        </div>
    );
};

export default TotalCost;