import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import React, {useEffect, useState} from "react";
import YMap from "../../components/map/Map";

import "./mappage.scss"
import {resizeHeight, resizeWidth} from "../../ResizeElement";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MenuIcon from '@mui/icons-material/Menu';
import Alert from "@mui/material/Alert";
import Checkbox from '@mui/material/Checkbox';

const Map = (props) => {



    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [icon, setIcon] = useState(false)
    const [message, setMessage] = useState("")
    const [typeMsg, setTeypeMsg] = useState("")
    const [chooseTable2, setChoseTable2] = useState("")
    const [roads, setRoads] = useState([])
    const [road, setRoad] = useState({})

    useEffect(()=>{
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/roads');
                const result = await response.json();

                // непосредственное обновление состояния при условии, что компонент не размонтирован
                if(!cleanupFunction){
                    setRoads(result)
                }

            } catch (e) {
                console.error(e.message)
            }
        };


        fetchData().then();
        // функция очистки useEffect
        return () => cleanupFunction = true;
    }, [])

    const handleSubmitTable2=(e) =>{
        e.preventDefault();
    }

    const handleChangeTable2=(e) => {
        setChoseTable2(e.target.value);
    }

    const roadsList = roads.map((item)=>{
        return(
        <option key={item.id} id={item.id} value={item}>
            {item.name}</option>
        )
    })

    const chooseRoad = ()=>{
        return(
        <div className="roadsList">
            <form onSubmit={handleSubmitTable2}>
                <label className="roads">
                    Выберите доорогу:
                    {/*<select value={chooseTable2} onChange={handleChangeTable2}>*/}
                    {/*    {roadsList}*/}
                    {/*</select>*/}
                </label>
            </form>
        </div>
        )
    }



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
                <div className="expInp">
                <form onSubmit={handleSubmitTable2}>
                    <label className="search">
                        Выберите номер эксперимента:
                        <select value={chooseTable2} onChange={handleChangeTable2}>
                            <option value="#1">#1</option>
                            <option value="#2">#2</option>
                            <option value="#3">#3</option>
                            <option value="#4">#4</option>
                        </select>
                    </label>
                </form>
                </div>
                <div className="roadsList">
                    <form onSubmit={handleSubmitTable2}>
                        <label className="roads">
                            Выберите доорогу:
                            <select value={chooseTable2} onChange={handleChangeTable2}>
                                {roadsList}
                            </select>
                        </label>
                    </form>
                </div>
            </div>
            <SideBar
                menu = {props.menu}
                setMenu = {props.setMenu}
                open = {icon}
                close = {()=>setIcon(!icon)}
                experiments={props.experiments}
            />
            <YMap>
            </YMap>
            {openAlert()}
        </div>
    );
};

export default Map