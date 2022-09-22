import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datable from "../../../components/datable/Datable";
import {columnsSiteState} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu";


import './sitestate.scss'

const SiteState = (props) => {

    const [rowId, setRowId] = useState();
    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url = (page) => {
        return 'http://localhost:8080/results/datasets/site_state?limit=' + 8 + '&offset=' + page * 8
    }

    return (
        <div className="sitestate">
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
                    <Datable url = {url} columns = {columnsSiteState} table={"pageSiteState"} setError = {props.setError}/>
                </div>
            </div>
    );
};

export default SiteState;