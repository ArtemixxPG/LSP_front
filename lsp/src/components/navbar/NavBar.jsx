import React from 'react';

import SearchOutlinedIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import FullscreenExitOutlinedIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {useContext} from "react";

import "./navbar.scss"
import {DarkModeContext} from "../../context/darkModeContext";


const NavBar = () => {

    const { dispatch } = useContext(DarkModeContext);


    return (
        <div id='nav' className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Найти..."/>
                    <SearchOutlinedIcon/>
                </div>
                <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className="icon"/>
                    Русский
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({type: "TOGGLE"})}/>
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <NotificationsNoneIcon className="icon"/>
                </div>
                <div className="item">
                    <ChatBubbleOutlineIcon className="icon"/>
                </div>
                </div>
                </div>
        </div>
    );
};

export default NavBar;