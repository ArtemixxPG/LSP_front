import React, {useEffect, useState} from 'react';
import './sharedflowconstraints.scss'
import {columnsSharedFlowConstraints} from "../../../HeadersTable";
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datable from "../../../components/datable/Datable";
import MenuIcon from "@mui/icons-material/Menu";


const SharedFlowConstraints = (props) => {

    //const [data, setData] = useState([]);
    //const [rowId, setRowId] = useState();
    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url = (page) => {
        return 'http://localhost:8080/results/datasets/shared_flow_constraints?limit=' + 8 + '&offset=' + page * 8
    }

    return (
        <div className="sharedflowconstraints">
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
                    <Datable url = {url} columns = {columnsSharedFlowConstraints} table={"pageSharedFlowConstraints"} setError = {props.setError}/>
                </div>
        </div>
    );
};

export default SharedFlowConstraints;