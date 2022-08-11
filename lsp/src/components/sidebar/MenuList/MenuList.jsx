import * as React from 'react';
import Box from '@mui/material/Box';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import FlakyIcon from '@mui/icons-material/Flaky';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ScienceIcon from '@mui/icons-material/Science';
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import OptimizationMenuList from "./OptimizationMenuList/OptimizationMenuList";
import SimulationMenuList from "./SimulationMenuList/SimulationMenuList";
import ToolsMenuList from "./ToolsMenuList/ToolsMenuList";

import "./list.scss"
import {useEffect, useState, ReactNode} from "react";

export default function MenuList (props)  {

    return (
        <Box sx={{ width: '100%', maxWidth: 290, bgcolor: 'background.paper' }}>
        <List
            className="list"
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                </ListSubheader>
            }
        >
                {props.menu}
        </List>
        </Box>
    );

 }
