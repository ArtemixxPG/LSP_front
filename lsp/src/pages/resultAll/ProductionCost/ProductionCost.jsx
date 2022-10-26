import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datatable from "../../../components/datable/NewDatatable/Datatable";
import './productioncost.scss'
import {columnsProductionCost} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu";


const ProductionCost = (props) => {

    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url = 'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/pdncost'




    return (
        <div className="productioncost">
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
                <div className="datatable">ЗАТРАТЫ НА ПРОИЗВОДСТВО
                    <Datatable url = {url} columns = {columnsProductionCost} table={"pageProductionCosts"} setError = {props.setError}/>
                </div>
        </div>
    );
};

export default ProductionCost;