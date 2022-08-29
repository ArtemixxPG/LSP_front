import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import Datable from "../../../components/datable/Datable";
import {columnsProductFlows} from "../../../HeadersTable";
import NavBar from "../../../components/navbar/NavBar";
import MenuIcon from "@mui/icons-material/Menu";


import './productflow.scss'

const ProductFlow = (props) => {

    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url = (page) => {
        return 'http://localhost:8080/results/datasets/products_flows?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    }

    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/results/prdflow/data');
                const result = await response.json();

                // непосредственное обновление состояния при условии, что компонент не размонтирован
                if(!cleanupFunction) {
                    //setData(result);
                }

            } catch (e) {
                console.error(e.message)
            }
        };


        fetchData().then();
        // функция очистки useEffect
        return () => cleanupFunction = true;
    }, [])

    return (
        <div className="productflow">
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
                    <Datable rows = {url} columns = {columnsProductFlows} table={"pageProductsFlows"} setError = {props.setError}/>
                </div>
            </div>
    );
};

export default ProductFlow;