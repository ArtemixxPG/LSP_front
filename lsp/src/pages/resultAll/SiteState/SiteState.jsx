import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datable from "../../../components/datable/Datable";
import {columnsSiteState} from "../../../HeadersTable";

import './sitestate.scss'
import MenuIcon from "@mui/icons-material/Menu";
import Alert from "@mui/material/Alert";

const SiteState = (props) => {

    const [data, setData] = useState([]);
    const [rowId, setRowId] = useState(0);
    const [icon, setIcon] = useState(false)



    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/ss');
                const result = await response.json();

                // непосредственное обновление состояния при условии, что компонент не размонтирован
                if(!cleanupFunction) {
                    setData(result);
                }

            } catch (e) {
                console.error(e.message)
            }
        };


        fetchData().then();
        // функция очистки useEffect
        return () => cleanupFunction = true;
    }, [])

    return (
        <div className="main">
            <div className="openMenu">
                <MenuIcon className="menuButton" onClick={() => setIcon(!icon)}/>
            </div>
            <SideBar
                menu = {props.menu}
                setMenu = {props.setMenu}
                open = {icon}
                close = {()=>setIcon(!icon)}
            />
            <div className="container">
                <div className="datatable">
                    <Datable rows = {data}
                             columns = {columnsSiteState}
                             new_id = {rowId}
                             pageSize={5}
                             rowsPerPageOptions={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default SiteState;