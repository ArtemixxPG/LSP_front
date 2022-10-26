import React, {useEffect, useState} from 'react';
import './vehicleflows.scss'
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datatable from "../../../components/datable/NewDatatable/Datatable";
import {columnsVehicleFlows} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu";
import ErrorModal from "../../../components/Modal/ErrorModal";
import numeral from "numeral";


const VehicleFlows = (props) => {

    //const [data, setData] = useState([]);
    //const [rowId, setRowId] = useState();
    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

     //const url = 'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/vf'
    const url = 'http://localhost:8080/results/vf'


    return (
        <div className="vehicleflows">
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
                <div className="datatable">ТРАНСПОРТНЫЕ ПОТОКИ
                    <Datatable url = {url} columns = {columnsVehicleFlows} /*table={"pageVehicleFlows"}*/ /*setError = {props.setError}*//>
                </div>

            {/*<ErrorModal error = {props.error} handleClose={props.handleClose} />*/}
        </div>
    );
};

export default VehicleFlows;