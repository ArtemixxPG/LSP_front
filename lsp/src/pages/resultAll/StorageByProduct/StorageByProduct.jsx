import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datatable from "../../../components/datable/NewDatatable/Datatable";
import {columnsStorageByProducts} from "../../../HeadersTable";
import './storagebyproduct.scss'
import MenuIcon from "@mui/icons-material/Menu";

const StorageByProduct = (props) => {

    const [rowId, setRowId] = useState();
    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)
    const [urlPage, setUrlPage] = useState(new URL('http://62.213.30.22:8585/LSP_back-1.0-SNAPSHOT/results/sbp/exp_limit'))

    const limit = 25

    //const url = 'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/sbp'
   // const url = 'http://localhost:8080/results/sbp'

    // useEffect(()=>{
    //     setUrlPage(new URL('http://10.1.1.170:8585/LSP_back-1.0-SNAPSHOT/results/spb/exp_limit'))
    //     urlPage.searchParams.append("experiment", props.experiment)
    //     urlPage.searchParams.append("limit", 25)
    // }, [props.experiment])

    return (
        <div className="storagebyproduct">
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
                <div className="datatable">ХРАНЕНИЕ ПРОДУКЦИИ
                    <Datatable url = {urlPage} limit ={limit} experiment={props.experiment} columns = {columnsStorageByProducts} table={"pageStorageByProducts"}
                             setError = {props.setError}/>
                </div>
        </div>
    );
};

export default StorageByProduct;