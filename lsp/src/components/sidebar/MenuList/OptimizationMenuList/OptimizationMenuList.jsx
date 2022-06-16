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

export default function OptimizationMenuList (){
    return(
        <List component="div" disablePadding>
            <ListItemButton>
                <li>
                    <Link to="/sitestate" style={{textDecoration:"none"}}>
                        <InventoryIcon className="icon"/>
                        <span>Приход товара</span>
                    </Link>
                </li>
            </ListItemButton>
            <ListItemButton>
                <li>
                    <Link to="/opsites" style={{textDecoration:"none"}}>
                        <AirlineStopsIcon className="icon"/>
                        <span>Движение объекта</span>
                    </Link>
                </li>
            </ListItemButton>
            <ListItemButton>
                <li>
                    <Link to="/othcost" style={{textDecoration:"none"}}>
                        <MoneyIcon className="icon"/>
                        <span>Прочие расходы</span>
                    </Link>
                </li>
            </ListItemButton>
            <ListItemButton>
                <li>
                    <Link to="/opsites" style={{textDecoration:"none"}}>
                        <MonetizationOnIcon className="icon"/>
                        <span>Операционая стоимость</span>
                    </Link>
                </li>
            </ListItemButton>
            <ListItemButton>
                <li>
                    <Link to="/sbp" style={{textDecoration:"none"}}>
                        <WarehouseIcon className="icon"/>
                        <span>Хранилища товаров</span>
                    </Link>
                </li>
            </ListItemButton>
            <ListItemButton>
                <li>
                    <Link to="/pdncost" style={{textDecoration:"none"}}>
                        <AttachMoneyIcon className="icon"/>
                        <span>Себестоимость продукции</span>
                    </Link>
                </li>
            </ListItemButton>
            <ListItemButton>
                <li>
                    <Link to="/pdnflows" style={{textDecoration:"none"}}>
                        <BuildIcon className="icon"/>
                        <span>Производственный поток</span>
                    </Link>
                </li>
            </ListItemButton>
            <ListItemButton>
                <li>
                    <Link to="/sfc" style={{textDecoration:"none"}}>
                        <RunningWithErrorsIcon className="icon"/>
                        <span>Общие ограничения производства</span>
                    </Link>
                </li>
            </ListItemButton>
            <ListItemButton>
                <li>
                    <Link to="/ssc" style={{textDecoration:"none"}}>
                        <AssignmentLateIcon className="icon"/>
                        <span>Общие ограничения хранения</span>
                    </Link>
                </li>
            </ListItemButton>
            <ListItemButton>
                <li>
                    <Link to="/dfilm" style={{textDecoration:"none"}}>
                        <FactCheckIcon className="icon"/>
                        <span>Реализация спроса</span>
                    </Link>
                </li>
            </ListItemButton>
            <ListItemButton>
                <li>
                    <Link to="/vf" style={{textDecoration:"none"}}>
                        <DirectionsRailwayFilledIcon className="icon"/>
                        <span>Траспортный поток</span>
                    </Link>
                </li>
            </ListItemButton>
            <ListItemButton>
                <li>
                    <Link to="/infograph" style={{textDecoration:"none"}}>
                        <AutoGraphIcon className="icon"/>
                        <span>Инфографика</span>
                    </Link>
                </li>
            </ListItemButton>
        </List>
    )
}