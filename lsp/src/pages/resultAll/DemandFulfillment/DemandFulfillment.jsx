import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import Datatable from "../../../components/datable/NewDatatable/Datatable";
import {columnsDemandFulfillment, columnsProductFlow} from "../../../HeadersTable";
import NavBar from "../../../components/navbar/NavBar";
import MenuIcon from "@mui/icons-material/Menu";
import "./demandfulfillment.scss"

const DemandFulfillment = (props) => {

    const [rowId, setRowId] = useState();
    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url =  'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/dfilm'



    return (
        <div className="demandfulfillment">
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
                <div className="datatable">
                    <Datatable url = {url} columns = {columnsDemandFulfillment} table={"pageDemandFulfillment"} setError = {props.setError}/>
                </div>
            </div>
    );
};

export default DemandFulfillment;