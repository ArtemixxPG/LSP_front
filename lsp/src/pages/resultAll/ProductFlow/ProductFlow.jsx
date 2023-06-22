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
    const [urlPage, setUrlPage] = useState(new URL('http://62.213.30.22:8585/LSP_back-1.0-SNAPSHOT/results/prdflow/exp_limit'))

    // const url =  'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/prdflow'
    //const url =  'http://localhost:8080/results/prdflow'


    const limit = 25

    // useEffect(()=>{
    //     setUrlPage(new URL('http://10.1.1.170:8585/LSP_back-1.0-SNAPSHOT/results/prdflow/exp_limit'))
    //     urlPage.searchParams.append("experiment", props.experiment)
    //     urlPage.searchParams.append("limit", 25)
    //     console.log(urlPage)
    // }, [props.experiment])

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
                setExperiment={props.setExperiment}
            />
                <div className="datatable">ТОВАРНЫЕ ПОТОКИ
                    <Datatable url = {urlPage} limit ={limit} experiment={props.experiment} columns = {columnsProductFlows} /*table={"pageProductsFlows"} setError = {props.setError}*//>
                </div>
            {/*<ErrorModal error = {props.error} handleClose={props.handleClose}/>*/}
        </div>
    );
};

export default ProductFlow;