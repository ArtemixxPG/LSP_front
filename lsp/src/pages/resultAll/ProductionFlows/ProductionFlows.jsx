import React, {useEffect, useState} from 'react';
import './productionflows.scss'
import {columnsProductionFlows} from "../../../HeadersTable";
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datatable from "../../../components/datable/NewDatatable/Datatable";
import MenuIcon from "@mui/icons-material/Menu";

const ProductionFlows = (props) => {

    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url =  'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/pdnflows'




    return (
        <div className="productionflows">
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
                <div className="datatable">ПРОИЗВОДСТВЕННЫЕ ПОТОКИ
                    <Datatable url = {url} columns = {columnsProductionFlows} table={"pageProductionFlows"} setError = {props.setError}/>
            </div>
        </div>
    );
};

export default ProductionFlows;