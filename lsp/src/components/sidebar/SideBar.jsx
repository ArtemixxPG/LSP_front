import React, {useContext, useEffect, useReducer, useState} from 'react';

import "./sidebar.scss"
import {Link} from "react-router-dom"
import MenuList from "./MenuList/MenuList";
import Drawer, {drawerClasses} from "@mui/material/Drawer";
import OptimizationMenuList from "./MenuList/OptimizationMenuList/OptimizationMenuList";
import SimulationMenuList from "./MenuList/SimulationMenuList/SimulationMenuList";
import EMenu from "../ExperimentMenu/EMenu";
import Tooltip from '@mui/material/Tooltip';
import {styled} from "@mui/material/styles";
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import SendTimeExtensionIcon from '@mui/icons-material/SendTimeExtension';
import {DarkModeContext} from "../../context/darkModeContext";



const SideBar = (props) => {

    const [check, setCheck] = useState(false)

    const [nameRes, setNameRes] = useState("Выбирете эксперимент")

    const checkExp = (type) => {

    }

    const StyledDrawer = styled(({className, ...props}) => (
        <Drawer {...props} classes={{popper: className}}/>
    ))(({theme}) => ({
        [`& .${drawerClasses.paper}`]: {
            color: theme.palette.common.white,
            minWidth: "310px"
        },

    }))


    const chooseMenu = (exp) =>{
        if(typeof exp==='string')
        setNameRes(exp)
        if(exp.includes("Оптимизация")){
            props.setMenu( <OptimizationMenuList/>)
        } else if(exp.includes("Симуляция")){
            props.setMenu( <SimulationMenuList/>)
        }

    }


    return (
        <StyledDrawer
            anchor={'left'}
            open={props.open}
            onClose={props.close}
        >
            <div className="sidebar">
                <div className="top">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <span className="logo">ЛСП ТРАНСРЕСУРС</span>
                    </Link>
                </div>
                <hr/>
                <div className="center">
                    <div className="autocomplete">
                        <EMenu setExperiment = {chooseMenu}/>
                    </div>
                    <MenuList menu={props.menu} nameExp={nameRes}/>
                </div>
            </div>
        </StyledDrawer>
    );
};

export default SideBar;