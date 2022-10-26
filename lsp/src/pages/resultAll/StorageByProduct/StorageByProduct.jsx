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

    //const url = 'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/sbp'
    const url = 'http://localhost:8080/results/sbp'


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
            />
                <div className="datatable">ХРАНЕНИЕ ПРОДУКЦИИ
                    <Datatable url = {url} columns = {columnsStorageByProducts} table={"pageStorageByProducts"}
                             setError = {props.setError}/>
                </div>
        </div>
    );
};

export default StorageByProduct;