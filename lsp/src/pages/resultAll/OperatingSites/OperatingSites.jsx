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
    const [url, setUrl] = useState(new URL('http://62.213.30.22:8585/LSP_back-1.0-SNAPSHOT/results/opsites/exp_limit'))


    //const url =  'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/datasets/opsites'
    //const url =  'http://localhost:8080/results/opsites'

    // useEffect(()=>{
    //     setUrl(new URL('http://10.1.1.170:8585/LSP_back-1.0-SNAPSHOT/results/opsites/exp_limit'))
    //     url.searchParams.append("experiment", props.experiment)
    //     url.searchParams.append("limit", 25)
    // }, [props.experiment])

    const limit = 25

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
                setExperiment={props.setExperiment}
            />
                <div className="datatable">ОПЕРАЦИОННЫЕ ЗАТРАТЫ
                    <Datatable url = {url} limit ={limit} experiment={props.experiment} columns = {columnsOperatingSites} table={"pageOperatingSites"} setError = {props.setError}/>
            </div>
        </div>
    );
};

export default OperatingSites;