import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";
import InventoryIcon from "@mui/icons-material/Inventory";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import MoneyIcon from "@mui/icons-material/Money";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BuildIcon from "@mui/icons-material/Build";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import DirectionsRailwayFilledIcon from "@mui/icons-material/DirectionsRailwayFilled";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import * as React from "react";
import Divider from "@mui/material/Divider";
import BarChartIcon from '@mui/icons-material/BarChart';
import Collapse from "@mui/material/Collapse";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";
import ListItemText from "@mui/material/ListItemText";

export default function OptimizationMenuList (props){
    return(
        <List component="div" disablePadding>
            <ListItemButton onClick={props.handleClickOptimization}>
                <ListItemIcon>
                    <SendTimeExtensionIcon className="icon"/>
                </ListItemIcon>
                <ListItemText primary="Оптимизационный эксперимент" />
                {/*// eslint-disable-next-line no-restricted-globals*/}
                {props.openOptimization ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={props.openOptimization} timeout="auto" unmountOnExit>
            <ListItemButton>
                <li>
                    <Link to="/prdflow" style={{textDecoration:"none"}}>
                        <InventoryIcon className="icon"/>
                        <span>Товарные потоки</span>
                    </Link>
                </li>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <li>
                    <Link to="/sitestate" style={{textDecoration:"none"}}>
                        <AirlineStopsIcon className="icon"/>
                        <span>Статус узла</span>
                    </Link>
                </li>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <li>
                    <Link to="/othcost" style={{textDecoration:"none"}}>
                        <MoneyIcon className="icon"/>
                        <span>Прочие затраты</span>
                    </Link>
                </li>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <li>
                    <Link to="/opsites" style={{textDecoration:"none"}}>
                        <MonetizationOnIcon className="icon"/>
                        <span>Операционные затраты</span>
                    </Link>
                </li>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <li>
                    <Link to="/sbp" style={{textDecoration:"none"}}>
                        <WarehouseIcon className="icon"/>
                        <span>Хранение продукции</span>
                    </Link>
                </li>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <li>
                    <Link to="/pdncost" style={{textDecoration:"none"}}>
                        <AttachMoneyIcon className="icon"/>
                        <span>Затраты на производство</span>
                    </Link>
                </li>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <li>
                    <Link to="/pdnflows" style={{textDecoration:"none"}}>
                        <BuildIcon className="icon"/>
                        <span>Производственные потоки</span>
                    </Link>
                </li>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <li>
                    <Link to="/sfc" style={{textDecoration:"none"}}>
                        <RunningWithErrorsIcon className="icon"/>
                        <span>Ограничения на потоки</span>
                    </Link>
                </li>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <li>
                    <Link to="/ssc" style={{textDecoration:"none"}}>
                        <AssignmentLateIcon className="icon"/>
                        <span>Ограничения на хранение</span>
                    </Link>
                </li>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <li>
                    <Link to="/dfilm" style={{textDecoration:"none"}}>
                        <FactCheckIcon className="icon"/>
                        <span>Удовлетворение спроса</span>
                    </Link>
                </li>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <li>
                    <Link to="/vf" style={{textDecoration:"none"}}>
                        <DirectionsRailwayFilledIcon className="icon"/>
                        <span>Траспортные потоки</span>
                    </Link>
                </li>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <li>
                    <Link to="/infograph" style={{textDecoration:"none"}}>
                        <BarChartIcon className="icon"/>
                        <span>Итоговая статистика</span>
                    </Link>
                </li>
            </ListItemButton>
            </Collapse>
        </List>
    )
}