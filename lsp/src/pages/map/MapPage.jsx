//imports React.js
import React, {useEffect, useRef, useState} from "react";

//imports Yandex Map API
import YMap from "../../components/map/Map";

//imports Material MUI
import MenuIcon from '@mui/icons-material/Menu';
import Alert from "@mui/material/Alert";
import TrainIcon from '@mui/icons-material/Train';
import IconButton from "@mui/material/IconButton";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import PodcastsIcon from '@mui/icons-material/Podcasts';
import ScienceIcon from '@mui/icons-material/Science';
import Button from '@mui/material/Button';

//imports Components
import SideBar from "../../components/sidebar/SideBar";
import Modal from "../../components/Modal/Modal";
import MapTable from "../../components/datable/NewDatatable/MapTable";
import SubMenuList from "../../components/List/RoadList/SubMenuList";

//imports Columns for headers
import {columnsMapSONK} from "../../HeadersTable";

//imports css
import "./mappage.scss"


const Map = (props) => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [icon, setIcon] = useState(false)
    const [message, setMessage] = useState("")
    const [typeMsg, setTypeMsg] = useState("")
    const [chooseTable2, setChoseTable2] = useState("")
    const [roads, setRoads] = useState([])
    const [road, setRoad] = useState('Общая')
    const [openModal, setOpenModal] = useState(false)
    const [dataTable, setDataTable] = useState([])
    const [experiment, setExperiment] = useState(props.experiment)
    const [change, setChange] = useState(false)
    const [listOpen, setListOpen] = useState(false)

    let onMapTableChange = null

    const didOnMapTableChange = (mapChange) => {
        onMapTableChange = mapChange
    }

    const changeStateList = () => {
        setListOpen(!listOpen)
    }


    useEffect(()=>{
        setExperiment(props.experiment)
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/roads');
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



    const handleChangeExperiment=(event: React.MouseEvent<HTMLDivElement, MouseEvent>, experimentName:string) => {
        event.preventDefault();
        setExperiment(experimentName);
    }

    const handleChangeRoad=(event: React.MouseEvent<HTMLDivElement, MouseEvent>,
                            roadName:string) => {
        event.preventDefault()
        setListOpen(!listOpen)
        setDataTable(prevDataTable => dataTable.splice(0, dataTable.length))
        console.log(dataTable)
        setRoad(prevRoad => roadName)
        onMapTableChange(true)
    }



    const roadsList = roads.map((item)=>{
        return(
            <div key={item.name}>
            <ListItemButton onClick={(event)=>handleChangeRoad(event, item.name)}>
                <ListItemText primary={item.name} />
            </ListItemButton>
                <Divider/>
            </div>
        )
    })


    const experimentsList = props.experiments.map((item)=>{
        return(
            <div key={item.name}>
                <ListItemButton onClick={(event)=>handleChangeExperiment(event, item.name)}>
                    <ListItemText primary={item.name} />
                </ListItemButton>
                <Divider/>
            </div>
        )
    })



    const callBackMsg = (text, type) => {
        if (text!=="" && type!==""){
            setMessage(text)
            setTypeMsg(type)
        }
    }

    const openAlert = () => {
        if(message!=="" && typeMsg !=="") {
          return <div className="alert"> <Alert severity={typeMsg} >Выбран: {message}</Alert> </div>
        }
    }

    return (
        <div className="mappage">
            <div className="openMenu">
            <MenuIcon  className="menuButton" onClick={() => setIcon(!icon)}/>
                <div className="list">
                    <SubMenuList listItems={experimentsList} subheader='Поле выбора экспериментов'
                              header={ "Эксперимент: " + experiment} icon = {<ScienceIcon style={{color:'#1010ee'}}/>}/>
                </div>
                <div className="list">
                    <SubMenuList listItems={roadsList} subheader='Поле выбора ВКМ' header={ "Дорога: " + road}
                              icon = {<PodcastsIcon style={{color:'#1010ee'}}/>} changeStateList={changeStateList} open ={listOpen}/>
                </div>

                <div className="stat">
                    <Button style={{color:'#1010ee'}} onClick={()=>setOpenModal(!openModal)}>Таблица СОНК
                    </Button>
                </div>

            </div>

            <SideBar
                menu = {props.menu}
                setMenu = {props.setMenu}
                open = {icon}
                close = {()=>setIcon(!icon)}
                experiments={props.experiments}
            />
            <Modal open={openModal} handleClose={()=> setOpenModal(!openModal)}
                   content ={ <MapTable columns = {columnsMapSONK} data={dataTable}/>}
                   header= { <h2 style={{marginBottom:"10px"}}>{"ВКМ-таблица СОНК"}</h2>}/>
            <YMap road = {road} dataTable={dataTable} setDataTable={setDataTable}  didOnMapTableChange = {didOnMapTableChange}>
            </YMap>
        </div>
    );
};

export default Map;