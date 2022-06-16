import React, {useContext, useState} from 'react';

import "./sidebar.scss"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TableViewIcon from '@mui/icons-material/TableView';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InventoryIcon from '@mui/icons-material/Inventory';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import MoneyIcon from '@mui/icons-material/Money';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BuildIcon from '@mui/icons-material/Build';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DirectionsRailwayFilledIcon from '@mui/icons-material/DirectionsRailwayFilled';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import MapIcon from '@mui/icons-material/Map';

import {Link} from "react-router-dom"
import {DarkModeContext} from "../../context/darkModeContext";
import MenuList from "./MenuList/MenuList";







const SideBar = () => {
    const {dispatch} = useContext(DarkModeContext)

    const [typeExp, setTypeExp] = useState("");

    const handleSubmit=(e) =>{
        console.log('Ваш любимый вкус: ' + typeExp);
        e.preventDefault();
    }

    const handleChange=(e) => {
        setTypeExp( e.target.value);
    }

    return (
        <div id='side' className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">ЛСП ТРАНСРЕСУРС</span>
                </Link>
            </div>
            <hr/>
            <div className="center">

                    <MenuList
                    />
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
            </div>
        </div>
    );
};

export default SideBar;