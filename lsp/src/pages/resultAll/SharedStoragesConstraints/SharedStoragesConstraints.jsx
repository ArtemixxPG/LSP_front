import React, {useEffect, useState} from 'react';
import './sharedstoragesconstraints.scss'
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datatable from "../../../components/datable/NewDatatable/Datatable";
import {columnsSharedStoragesConstraints} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu";

const SharedStoragesConstraints = (props) => {

    //const [data, setData] = useState([]);
    //const [rowId, setRowId] = useState();
    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)
    const [urlPage, setUrlPage] = useState(new URL('http://62.213.30.22:8585/LSP_back-1.0-SNAPSHOT/results/ssc/exp_limit'))

    // const url = (page) => {
    //     return 'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/ssc'
    // }

    const limit = 25

    // useEffect(()=>{
    //     setUrlPage(new URL('http://10.1.1.170:8585/LSP_back-1.0-SNAPSHOT/results/ssc/exp_limit'))
    //     urlPage.searchParams.set("experiment", props.experiment)
    //     urlPage.searchParams.set("limit", 25)
    //
    // }, [props.experiment])


    return (
        <div className="sharedstoragesconstraints">
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
                <div className="datatable">ОГРАНИЧЕНИЯ НА ХРАНЕНИЕ
                    <Datatable url= {urlPage} limit ={limit} experiment={props.experiment} columns = {columnsSharedStoragesConstraints} table={"pageSharedStoragesConstraints"}
                             setError = {props.setError}/>
                </div>
        </div>
    );
};

export default SharedStoragesConstraints;