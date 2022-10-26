import React, {useEffect, useState} from 'react';

import "./operatingsites.scss"
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datatable from "../../../components/datable/NewDatatable/Datatable";
import {columnsOperatingSites} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu";

const OperatingSites = (props) => {


    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    //const url =  'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/datasets/opsites'
    const url =  'http://localhost:8080/results/opsites'





    return (
        <div className="operatingsites">
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
                <div className="datatable">ОПЕРАЦИОННЫЕ ЗАТРАТЫ
                    <Datatable url = {url} columns = {columnsOperatingSites} table={"pageOperatingSites"} setError = {props.setError}/>
            </div>
        </div>
    );
};

export default OperatingSites;