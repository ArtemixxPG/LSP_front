import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import Datable from "../../../components/datable/Datable";
import {columnsProductFlows} from "../../../HeadersTable";
import NavBar from "../../../components/navbar/NavBar";
import MenuIcon from "@mui/icons-material/Menu";
import ErrorModal from "../../../components/Modal/ErrorModal";


import './productflow.scss'

const ProductFlow = (props) => {

    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)

    const url = (page) => {
        return 'http://localhost:8080/results/datasets/products_flows?limit=' + 8 + '&offset=' + page * 8
    }


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
                experiments={props.experiments}
            />
                <div className="datatable">
                    <Datable url = {url} columns = {columnsProductFlows} table={"pageProductsFlows"} setError = {props.setError}/>
                </div>
            <ErrorModal error = {props.error} handleClose={props.handleClose}/>
        </div>
    );
};

export default ProductFlow;