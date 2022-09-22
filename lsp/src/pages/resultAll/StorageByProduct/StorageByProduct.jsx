import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datable from "../../../components/datable/Datable";
import {columnsStorageByProducts} from "../../../HeadersTable";
import './storagebyproduct.scss'
import MenuIcon from "@mui/icons-material/Menu";

const StorageByProduct = (props) => {

    const [rowId, setRowId] = useState();
    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url = (page) => {
        return 'http://localhost:8080/results/datasets/storages_by_product?limit=' + 8 + '&offset=' + page * 8
    }

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
                <div className="datatable">
                    <Datable url = {url} columns = {columnsStorageByProducts} table={"pageStorageByProducts"}
                             setError = {props.setError}/>
                </div>
        </div>
    );
};

export default StorageByProduct;