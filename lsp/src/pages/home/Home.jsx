import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";


import "./home.scss"
import {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "../../components/Modal/Modal";
import MapTable from "../../components/datable/NewDatatable/MapTable";
import {columnsMapSONK} from "../../HeadersTable";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ScienceIcon from "@mui/icons-material/Science";
import SubMenuList from "../../components/List/RoadList/SubMenuList";



const stylesModalHeader = {
    paddingBottom:"5px",
    marginBottom:"10px",
    textAlign:"center",
    color:"#1E90FF",
    fontSize: 16
}

const  stylesModalContent = {
    padding:"5px",
    margin:"10px",
    textAlign: "justify",
    color:"#1E90FF",
    fontStyle:"italic"
}

const stylesModalList = {
    position:"absolute",
    left:"50%",
    marginLeft:"-200px",
    color:"#1E90FF",
    fontStyle: "normal"
}

const Home = (props) => {

    const [icon, setIcon] = useState(false)
    const [openModal, setOpenModal] = useState(true)
    const [listExperimentOpen, setListExperimentOpen] = useState(false)

    const Header = () =>
            <div style={stylesModalHeader}>
                <h2>Добро пожаловать в ЛСП Трансресурс!</h2>
            </div>


    const handleChangeExperiment=(event: React.MouseEvent<HTMLDivElement, MouseEvent>, experimentName:string) => {
        event.preventDefault();
        props.setExperiment(experimentName);
        setOpenModal(false)
    }

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

    const Content = () =>
            <div style={stylesModalContent}>
                <p>*Для начала работы выбирете доступный эксперимент</p>
                <div style={stylesModalList}>
                <SubMenuList listItems={experimentsList} subheader='Поле выбора экспериментов'
                             header={ "Текущий эксперимент не выбран"}
                             icon = {<ScienceIcon style={{color:'#1010ee'}}/>}
                             changeStateList={()=>setListExperimentOpen(!listExperimentOpen)}
                             open={listExperimentOpen}/>
                </div>
            </div>



    return (
        <div style={{width: document.documentElement.clientWidth, height: document.documentElement.clientHeight - 1}}
             className="home">
            <div className="openMenu">
                <MenuIcon className="menuButton" onClick={() => setIcon(!icon)}/>
            </div>
            <SideBar
                menu={props.menu}
                setMenu={props.setMenu}
                open={icon}
                close={() => setIcon(!icon)}
                experiments={props.experiments}
                experiment={props.experiment}
            />
            <div className="homeContainer">
                <Modal open={openModal}
                       content={Content()}
                       header={Header()}
                       height={"150px"}/>
            </div>
        </div>
    );
};

export default Home;