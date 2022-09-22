import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datable from "../../../components/datable/Datable";
import {columnsOtherCosts} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu";
import "./othercosts.scss"

const OtherCosts = (props) => {

    //const [data, setData] = useState([]);
    //const [rowId, setRowId] = useState();
    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url = (page) => {
        return 'http://localhost:8080/results/datasets/other_costs?limit=' + 8 + '&offset=' + page * 8
    }

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
                    <Datable url = {url} columns = {columnsOtherCosts} table={"pageOtherCosts"} setError = {props.setError}/>
                </div>
        </div>
    );
};

export default OtherCosts;