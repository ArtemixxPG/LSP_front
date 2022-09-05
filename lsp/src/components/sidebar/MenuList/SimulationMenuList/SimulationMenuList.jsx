import React, {Component} from 'react';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";
import ListAltIcon from '@mui/icons-material/ListAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";
import ListItemText from "@mui/material/ListItemText";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

export default function SimulationMenuList(props) {

        return (
            <List component="div" disablePadding>
                <ListItemButton onClick={props.handleClickSimulation}>
                    <ListItemIcon>
                        <SendTimeExtensionIcon className="icon"/>
                    </ListItemIcon>
                    <ListItemText primary="Симмуляционный эксперимент" />
                    {props.openSimulation ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={props.openSimulation} timeout="auto" unmountOnExit>
                <ListItemButton>
                    <li>
                        <Link to="/pfsim" style={{textDecoration: "none"}}>
                            <ProductionQuantityLimitsIcon className="icon"/>
                            <span>Товарный поток</span>
                        </Link>
                    </li>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <li>
                        <Link to="/shsh" style={{textDecoration: "none"}}>
                            <ListAltIcon className="icon"/>
                            <span>Расписание отгрузки</span>
                        </Link>
                    </li>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <li>
                        <Link to="/tc" style={{textDecoration: "none"}}>
                            <CreditScoreIcon className="icon"/>
                            <span>Полная стоимость</span>
                        </Link>
                    </li>
                </ListItemButton>
                </Collapse>
            </List>
        )
}

