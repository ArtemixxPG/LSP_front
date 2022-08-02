import React, {useContext, useEffect, useReducer, useState} from 'react';

import "./sidebar.scss"
import {Link} from "react-router-dom"
import MenuList from "./MenuList/MenuList";
import Drawer from "@mui/material/Drawer";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import OptimizationMenuList from "./MenuList/OptimizationMenuList/OptimizationMenuList";
import SimulationMenuList from "./MenuList/SimulationMenuList/SimulationMenuList";
import ListItemText from "@mui/material/ListItemText";
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import EMenu from "../ExperimentMenu/EMenu";

const experiments = [
    {label:"Оптимизационный"},
    {label:"Симмуляционный"}
]




const SideBar = (props) => {

    const [check, setCheck] = useState(false)

    const [nameRes, setNameRes] = useState("Выбирете эксперимент")

    const checkExp = (type) => {

    }






    const chooseMenu = (exp) =>{
        if(typeof exp==='string')
        setNameRes(exp)
        if(exp.includes("Оптимизационный")){
            props.setMenu( <OptimizationMenuList/>)
        } else if(exp.includes("Симмуляционный")){
            props.setMenu( <SimulationMenuList/>)
        }

    }


    return (
        <Drawer
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
        </Drawer>
    );
};

export default SideBar;