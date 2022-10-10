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

    const url = (page) => {
        return 'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/ssc'
    }



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
            />
                <div className="datatable">
                    <Datatable url= {url} columns = {columnsSharedStoragesConstraints} table={"pageSharedStoragesConstraints"}
                             setError = {props.setError}/>
                </div>
        </div>
    );
};

export default SharedStoragesConstraints;