import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import FlakyIcon from '@mui/icons-material/Flaky';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import {ExpandLess, ExpandMore} from "@mui/icons-material";
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
import OptimizationMenuList from "./OptimizationMenuList/OptimizationMenuList";
import SimulationMenuList from "./SimulationMenuList/SimulationMenuList";
import ToolsMenuList from "./ToolsMenuList/ToolsMenuList";

export default function MenuList ()  {

    const [openOpti, setOpenOpti] = React.useState(false);
    const [openSim, setOpenSim] = React.useState(false);
    const [openTools, setOpenTools] = React.useState(false);


//     const ListOptimization = ()=>{
//         return(
//             <List>
//                 <ListItemButton>
//                 <li>
//                     <Link to="/sitestate" style={{textDecoration:"none"}}>
//                         <InventoryIcon className="icon"/>
//                         <span>Приход товара</span>
//                     </Link>
//                 </li>
//             </ListItemButton>
//                 <ListItemButton>
//                 <li>
//                     <Link to="/opsites" style={{textDecoration:"none"}}>
//                         <AirlineStopsIcon className="icon"/>
//                         <span>Движение объекта</span>
//                     </Link>
//                 </li>
//                 </ListItemButton>
//                 <ListItemButton>
//                 <li>
//                     <Link to="/othcost" style={{textDecoration:"none"}}>
//                         <MoneyIcon className="icon"/>
//                         <span>Прочие расходы</span>
//                     </Link>
//                 </li>
//                 </ListItemButton>
//                 <ListItemButton>
//                 <li>
//                     <Link to="/opsites" style={{textDecoration:"none"}}>
//                         <MonetizationOnIcon className="icon"/>
//                         <span>Операционая стоимость</span>
//                     </Link>
//                 </li>
//                 </ListItemButton>
//                 <ListItemButton>
//                 <li>
//                     <Link to="/sbp" style={{textDecoration:"none"}}>
//                         <WarehouseIcon className="icon"/>
//                         <span>Хранилища товаров</span>
//                     </Link>
//                 </li>
//                     </ListItemButton>
//             <ListItemButton>
//                 <li>
//                     <Link to="/pdncost" style={{textDecoration:"none"}}>
//                         <AttachMoneyIcon className="icon"/>
//                         <span>Себестоимость продукции</span>
//                     </Link>
//                 </li>
//             </ListItemButton>
//                 <ListItemButton>
//                 <li>
//                     <Link to="/pdnflows" style={{textDecoration:"none"}}>
//                         <BuildIcon className="icon"/>
//                         <span>Производственный поток</span>
//                     </Link>
//                 </li>
//                 </ListItemButton>
//                 <ListItemButton>
//                 <li>
//                     <Link to="/sfc" style={{textDecoration:"none"}}>
//                         <RunningWithErrorsIcon className="icon"/>
//                         <span>Общие ограничения производства</span>
//                     </Link>
//                 </li>
//                 </ListItemButton>
//                 <ListItemButton>
//                 <li>
//                     <Link to="/ssc" style={{textDecoration:"none"}}>
//                         <AssignmentLateIcon className="icon"/>
//                         <span>Общие ограничения хранения</span>
//                     </Link>
//                 </li>
//                 </ListItemButton>
//                 <ListItemButton>
//                 <li>
//                     <Link to="/dfilm" style={{textDecoration:"none"}}>
//                         <FactCheckIcon className="icon"/>
//                         <span>Реализация спроса</span>
//                     </Link>
//                 </li>
//                 </ListItemButton>
//                 <ListItemButton>
//                 <li>
//                     <Link to="/vf" style={{textDecoration:"none"}}>
//                         <DirectionsRailwayFilledIcon className="icon"/>
//                         <span>Траспортный поток</span>
//                     </Link>
//                 </li>
//                 </ListItemButton>
//                 <ListItemButton>
//                 <li>
//                     <Link to="/infograph" style={{textDecoration:"none"}}>
//                         <AutoGraphIcon className="icon"/>
//                         <span>Инфографика</span>
//                     </Link>
//                 </li>
//                 </ListItemButton>
//             </List>
//         )
// }


    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                </ListSubheader>
            }
        >
            <ListItemButton onClick={()=>setOpenOpti(!openOpti)}>
                <ListItemIcon>
                   <FlakyIcon/>
                </ListItemIcon>
                <ListItemText primary="Оптимизационный экспиретмент" />
                {openOpti ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openOpti} timeout="auto" unmountOnExit>
                   <OptimizationMenuList/>
            </Collapse>
            <ListItemButton onClick={()=>setOpenSim(!openSim)}>
                <ListItemIcon>
                    <ImportantDevicesIcon/>
                </ListItemIcon>
                <ListItemText primary="Симуляционный экспиретмент" />
                {openSim ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSim} timeout="auto" unmountOnExit>
                <SimulationMenuList/>
            </Collapse>
            <ListItemButton onClick={()=>setOpenTools(!openTools)}>
                <ListItemIcon>
                    <ArchitectureIcon/>
                </ListItemIcon>
                <ListItemText primary="Инструменты" />
                {openTools ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openTools} timeout="auto" unmountOnExit>
               <ToolsMenuList/>
            </Collapse>
        </List>
    );

 }
