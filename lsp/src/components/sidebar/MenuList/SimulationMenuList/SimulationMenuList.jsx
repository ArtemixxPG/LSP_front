import React, {Component} from 'react';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";
import ListAltIcon from '@mui/icons-material/ListAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

export default function SimulationMenuList() {

        return (
            <List component="div" disablePadding>
                <ListItemButton>
                    <li>
                        <Link to="/pfsim" style={{textDecoration: "none"}}>
                            <ProductionQuantityLimitsIcon className="icon"/>
                            <span>Товарный поток</span>
                        </Link>
                    </li>
                </ListItemButton>
                <ListItemButton>
                    <li>
                        <Link to="/shsh" style={{textDecoration: "none"}}>
                            <ListAltIcon className="icon"/>
                            <span>Расписание отгрузки</span>
                        </Link>
                    </li>
                </ListItemButton>
                <ListItemButton>
                    <li>
                        <Link to="/tc" style={{textDecoration: "none"}}>
                            <CreditScoreIcon className="icon"/>
                            <span>Полная стоимость</span>
                        </Link>
                    </li>
                </ListItemButton>
            </List>
        )
}

