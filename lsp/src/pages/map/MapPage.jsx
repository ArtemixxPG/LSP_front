import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import React, {useState} from "react";
import YMap from "../../components/map/Map";

import "./mappage.scss"
import {resizeHeight, resizeWidth} from "../../ResizeElement";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MenuIcon from '@mui/icons-material/Menu';
import Alert from "@mui/material/Alert";

const Map = () => {





    const [icon, setIcon] = useState(false)
    const [message, setMessage] = useState("")
    const [typeMsg, setTeypeMsg] = useState("")

    const callBackMsg = (text, type) => {
        if (text!=="" && type!==""){
            setMessage(text)
            setTeypeMsg(type)
        }
    }

    const openAlert = () => {
        if(message!=="" && typeMsg !==""){
          return <div className="alert"> <Alert severity={typeMsg} >Выбран: {message}</Alert> </div>
        }
    }

    return (
        <div className="mappage">
            <div className="openMenu">
            <MenuIcon  className="menuButton" onClick={() => setIcon(!icon)}/>
            </div>
            <SideBar
                open = {icon}
                close ={()=>setIcon(!icon)}
                message = {callBackMsg}
            />
            <YMap>
            </YMap>
            {openAlert()}
        </div>
    );
};

export default Map