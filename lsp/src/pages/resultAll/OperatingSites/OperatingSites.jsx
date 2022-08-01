import React, {useEffect, useState} from 'react';

import "./operatingsites.scss"
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datable from "../../../components/datable/Datable";
import {columnsOperatingSites} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu";

const OperatingSites = () => {


    const [data, setData] = useState([]);
    const [rowId, setRowId] = useState();
    const [icon, setIcon] = useState(false)



    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/opsites');
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
                open = {icon}
                close ={()=>setIcon(!icon)}
            />


                <div className="datatable">
                    <Datable rows = {data}
                             columns = {columnsOperatingSites}
                             new_id = {rowId}
                             pageSize={5}
                             rowsPerPageOptions={5}
                    />

            </div>
        </div>
    );
};

export default OperatingSites;