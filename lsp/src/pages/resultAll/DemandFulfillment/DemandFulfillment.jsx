import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import Datable from "../../../components/datable/Datable";
import {columnsDemandFulfillment} from "../../../HeadersTable";
import NavBar from "../../../components/navbar/NavBar";
import MenuIcon from "@mui/icons-material/Menu";
import "./demandfulfillment.scss"

const DemandFulfillment = (props) => {

    const [rowId, setRowId] = useState();
    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/results/dfilm/data');
                const result = await response.json();

                // непосредственное обновление состояния при условии, что компонент не размонтирован
                if(!cleanupFunction) {
                    setData(result);
                }

            } catch (e) {
                console.error(e.message)
            }
        };


        fetchData().then();
        // функция очистки useEffect
        return () => cleanupFunction = true;
    }, [])


    /*const fetchDataCreateCSV = async () => {
        try {
            const response = await fetch('http://localhost:8080/dfilm/create');
            const result = await response.json();

            setFileDir("Файл загружен: "+result.path);


        } catch (e) {
            console.error(e.message)
        }
    }*/



    return (
        <div className="demandfulfillment">
            <div className="openMenu">
                <MenuIcon className="menuButton" onClick={() => setIcon(!icon)}/>
            </div>
            <SideBar
                menu = {props.menu}
                setMenu = {props.setMenu}
                open = {icon}
                close = {()=>setIcon(!icon)}
            />
                <div className="datatable">
                    <Datable rows = {data.dataTable} columns = {columnsDemandFulfillment}/>
                </div>
            </div>
    );
};

export default DemandFulfillment;