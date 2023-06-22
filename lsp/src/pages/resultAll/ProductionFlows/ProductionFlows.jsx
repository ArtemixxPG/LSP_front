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
    const [urlPage, setUrlPage] = useState(new URL('http://62.213.30.22:8585/LSP_back-1.0-SNAPSHOT/results/pdnflows/exp_limit'))

    //const url =  'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/pdnflows'

    const limit = 25

    // useEffect(()=>{
    //     setUrlPage(new URL('http://10.1.1.170:8585/LSP_back-1.0-SNAPSHOT/results/pdnflows/exp_limit'))
    //     urlPage.searchParams.append("experiment", props.experiment)
    //     urlPage.searchParams.append("limit", 25)
    // }, [props.experiment])

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
                setExperiment={props.setExperiment}
            />
                <div className="datatable">ПРОИЗВОДСТВЕННЫЕ ПОТОКИ
                    <Datatable url = {urlPage} limit ={limit} experiment={props.experiment} columns = {columnsProductionFlows} table={"pageProductionFlows"} setError = {props.setError}/>
            </div>
        </div>
    );
};

export default ProductionFlows;