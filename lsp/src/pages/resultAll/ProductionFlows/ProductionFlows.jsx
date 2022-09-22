import React, {useEffect, useState} from 'react';
import './productionflows.scss'
import {columnsProductionFlows} from "../../../HeadersTable";
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datable from "../../../components/datable/Datable";
import MenuIcon from "@mui/icons-material/Menu";

const ProductionFlows = (props) => {

    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url = (page) => {
        return 'http://localhost:8080/results/datasets/production_flows?limit=' + 8 + '&offset=' + page * 8
    }

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
                <div className="datatable">
                    <Datable url = {url} columns = {columnsProductionFlows} table={"pageProductionFlows"} setError = {props.setError}/>
            </div>
        </div>
    );
};

export default ProductionFlows;