import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datatable from "../../../components/datable/NewDatatable/Datatable";
import {columnsOtherCosts} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu";
import "./othercosts.scss"

const OtherCosts = (props) => {

    //const [data, setData] = useState([]);
    //const [rowId, setRowId] = useState();
    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url =  'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/othcost'




    return (
        <div className="othercosts">
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
                    <Datatable url = {url} columns = {columnsOtherCosts} table={"pageOtherCosts"} setError = {props.setError}/>
                </div>
        </div>
    );
};

export default OtherCosts;