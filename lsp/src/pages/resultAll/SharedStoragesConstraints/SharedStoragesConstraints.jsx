import React, {useEffect, useState} from 'react';
import './sharedstoragesconstraints.scss'
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datable from "../../../components/datable/Datable";
import {columnsSharedStoragesConstraints} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu";

const SharedStoragesConstraints = (props) => {

    //const [data, setData] = useState([]);
    //const [rowId, setRowId] = useState();
    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url = (page) => {
        return 'http://localhost:8080/results/datasets/shared_storages_constraints?limit=' + 8 + '&offset=' + page * 8
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
                    <Datable url= {url} columns = {columnsSharedStoragesConstraints} table={"pageSharedStoragesConstraints"}
                             setError = {props.setError}/>
                </div>
        </div>
    );
};

export default SharedStoragesConstraints;