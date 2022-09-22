import React, {useEffect, useState} from 'react';

import "./operatingsites.scss"
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datable from "../../../components/datable/Datable";
import {columnsOperatingSites} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu";

const OperatingSites = (props) => {


    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url = (page) => {
        return 'http://localhost:8080/results/datasets/operating_sites?limit=' + 8 + '&offset=' + page * 8
    }

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
            />
                <div className="datatable">
                    <Datable url = {url} columns = {columnsOperatingSites} table={"pageOperatingSites"} setError = {props.setError}/>
            </div>
        </div>
    );
};

export default OperatingSites;