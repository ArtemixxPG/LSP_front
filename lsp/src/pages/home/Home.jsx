import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";


import "./home.scss"
import {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Home = (props) => {

    const [icon, setIcon] = useState(false)

    return (
        <div style={{width:document.documentElement.clientWidth, height:document.documentElement.clientHeight-1}} className="home">
            <div className="openMenu">
                <MenuIcon className="menuButton" onClick={() => setIcon(!icon)}/>
            </div>
            <SideBar
                menu = {props.menu}
                setMenu = {props.setMenu}
                open = {icon}
                close = {()=>setIcon(!icon)}
            />
            <div className="homeContainer">
                </div>
        </div>
    );
};

export default Home;