import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import Datatable from "../../../components/datable/NewDatatable/Datatable";
import {columnsProductFlows} from "../../../HeadersTable";
import NavBar from "../../../components/navbar/NavBar";
import MenuIcon from "@mui/icons-material/Menu";
import ErrorModal from "../../../components/Modal/ErrorModal";


import './productflow.scss'
import numeral from "numeral";

const ProductFlow = (props) => {

    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    //const url =  'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/prdflow'
    const url =  'http://localhost:8080/results/prdflow'



    return (
        <div className="productflow">
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
                <div className="datatable">ТОВАРНЫЕ ПОТОКИ
                    <Datatable url = {url} columns = {columnsProductFlows} /*table={"pageProductsFlows"} setError = {props.setError}*//>
                </div>
            {/*<ErrorModal error = {props.error} handleClose={props.handleClose}/>*/}
        </div>
    );
};

export default ProductFlow;