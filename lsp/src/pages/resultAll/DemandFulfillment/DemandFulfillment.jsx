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
    const [url, setUrl] = useState(new URL('http://62.213.30.22:8585/LSP_back-1.0-SNAPSHOT/results/dfilm/exp_limit'))

    //const url = 'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/dfilm'

    const limit = 25

    // useEffect(()=>{
    //     setUrl(new URL('http://10.1.1.170:8585/LSP_back-1.0-SNAPSHOT/results/dfilm'))
    //     url.searchParams.append("experiment", props.experiment)
    //     url.searchParams.append("limit", 25)
    // }, [props.experiment])

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
                setExperiment={props.setExperiment}
            />
                <div className="datatable">УДОВЛЕТВОРЕНИЕ СПРОСА
                    <Datatable url = {url} limit ={limit} experiment={props.experiment} columns = {columnsDemandFulfillment} /*table={"pageDemandFulfillment"}*/ setError = {props.setError}/>
                </div>
            </div>
    );
};

export default DemandFulfillment;