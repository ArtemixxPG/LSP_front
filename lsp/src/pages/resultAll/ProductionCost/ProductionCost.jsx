import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datable from "../../../components/datable/Datable";
import './productioncost.scss'
import {columnsProductionCost} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu";


const ProductionCost = (props) => {

    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url = (page) => {
        return 'http://localhost:8080/results/datasets/production_cost?limit=' + 8 + '&offset=' + page * 8
    }

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
                <div className="datatable">
                    <Datable url = {url} columns = {columnsProductionCost} table={"pageProductionCosts"} setError = {props.setError}/>
                </div>
        </div>
    );
};

export default ProductionCost;