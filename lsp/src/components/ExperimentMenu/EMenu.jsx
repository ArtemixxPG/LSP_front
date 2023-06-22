import * as React from "react";
import {styled, alpha} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ScienceIcon from '@mui/icons-material/Science';
import Stack from '@mui/material/Stack';
import Tooltip, {tooltipClasses} from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import InventoryIcon from "@mui/icons-material/Inventory";
import MapIcon from "@mui/icons-material/Map";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {useContext} from "react";
import {DarkModeContext} from "../../context/darkModeContext";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import {Link} from "react-router-dom";
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import SendTimeExtensionIcon from '@mui/icons-material/SendTimeExtension';

import "./EMenu.scss"



export default function EMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [hidden, setHidden] = React.useState(false);
    const { dispatch } = useContext(DarkModeContext);
    const [showOptimization, setShowOptimization] = React.useState(false)



    const handleClickExp = (event) => {
        setAnchorEl(event.currentTarget);
        setShowOptimization(!showOptimization);
    };

    const handleClose = (item) => {
        setAnchorEl(null);
        if (typeof item === "string") {
            props.setExperiment(item)
        }
    };



    const CustomTooltip = styled(({className, ...props}) => (
        <Tooltip {...props} classes={{popper: className}}/>
    ))(({theme}) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.white
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: '#218bff',
            boxShadow: theme.shadows[1],
            fontSize: 11,
            opacity: 0
        },
    }));

    const StyledMenu = styled((props) => (
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            elevation={0}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "left"
            }}
            {...props}
        />
    ))(({theme}) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            maxWidth: "300px",
            color:
                theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                color: "#218bff",
                '& .MuiIconButton-root': {
                   padding:0
                },
                '& .MuiSvgIcon-root': {
                    fontSize: 24,
                    color: "#218bff",
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    }));

    const menuItems = props.experiments.map((item, key) =>
        (key !== props.experiments.length - 1) ?
            <div key={item.name}>
                <MenuItem  onClick={() => handleClose(item.name)}>

                        {/*<IconButton*/}
                        {/*    id="exp-button"*/}
                        {/*    aria-controls={open ? "demo-positioned-menu" : undefined}*/}
                        {/*    aria-haspopup="true"*/}
                        {/*    aria-expanded={open ? "true" : undefined}*/}
                        {/*    onClick={handleClickExp}*/}
                        {/*>*/}
                        {/*    <SendTimeExtensionIcon className="icon"/>*/}
                        {/*</IconButton>*/}
                        {item.name}

                </MenuItem>
                <Divider/>
            </div>
            :
            <MenuItem key={item.name} onClick={() => handleClose(item.name)}>
                {/*<CustomTooltip title={"Эксперимент:" + item.name} arrow disableInteractive>*/}
                    {/*<IconButton*/}
                    {/*    id="exp-button"*/}
                    {/*    aria-controls={open ? "demo-positioned-menu" : undefined}*/}
                    {/*    aria-haspopup="true"*/}
                    {/*    aria-expanded={open ? "true" : undefined}*/}
                    {/*    onClick={handleClickExp}*/}
                    {/*>*/}
                    {/*    <SendTimeExtensionIcon className="icon"/>*/}
                    {/*</IconButton>*/}
                    {item.name}
                {/*</CustomTooltip>*/}
            </MenuItem>

    )

    return (
        <div>
            <Stack direction="row" spacing={3}>
                <IconButton
                    id="exp-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClickExp}
                >
                    <CustomTooltip title="Поле выбора эксперимента" arrow disableInteractive>
                    <ScienceIcon className="icon"/>
                    </CustomTooltip>
                </IconButton>

                {/*<CustomTooltip title="Тёмный режим" arrow disableInteractive>*/}
                <IconButton
                    id="tools-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={() => dispatch({type: "TOGGLE"})}
                    variant="outlined"
                    disabled
                >
                <DarkModeOutlinedIcon className="icon-disable"/>
                </IconButton>
                {/*</CustomTooltip>*/}
                <CustomTooltip title="Карта" arrow disableInteractive>
                <IconButton
                    id="tools-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={() => dispatch({type: "TOGGLE"})}
                    variant="outlined"
                >
                    <Link to="/map" style={{textDecoration: "none",
                        width:"24px",
                        height:"24px"}}>
                    <MapIcon className="icon"/>
                    </Link>
                </IconButton>
                </CustomTooltip>
                <CustomTooltip title="Сравнение значений эспериментов" arrow disableInteractive>
                <IconButton
                    id="tools-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="outlined"
                >
                    <Link to="/compare" style={{textDecoration: "none",
                    width:"24px",
                    height:"24px"}}>
                     <InventoryIcon className="icon"/>
                    </Link>
                </IconButton>
                </CustomTooltip>
                <CustomTooltip title="Загрузка CSV-файла" arrow disableInteractive>
                <IconButton
                    id="tools-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={() => dispatch({type: "TOGGLE"})}
                    variant="outlined"
                >
                    <Link to="/upload" style={{textDecoration: "none",
                        width:"24px",
                        height:"24px"}}>
                    <UploadFileIcon className="icon"/>
                    </Link>
                </IconButton>
                </CustomTooltip>
                {/*<CustomTooltip title="Уведомления" arrow disableInteractive>*/}
                    <IconButton
                        id="tools-button"
                        aria-controls={open ? "demo-positioned-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={() => dispatch({type: "TOGGLE"})}
                        variant="outlined"
                        disabled
                    >
                        <NotificationsNoneIcon className="icon-disable"/>
                    </IconButton>
                {/*</CustomTooltip>*/}
            </Stack>

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {menuItems}

            </StyledMenu>

        </div>
    );
}
