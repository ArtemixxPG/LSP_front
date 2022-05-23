import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datable from "../../../components/datable/Datable";
import './productioncost.scss'
import {columnsProductionCost} from "../../../HeadersTable";

const ProductionCost = () => {

    const [data, setData] = useState([]);
    const [rowId, setRowId] = useState();

    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/pdncost');
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

    return (
        <div className="main">
            <SideBar/>
            <div className="container">
                <NavBar/>
                <div className="datatable">
                    <Datable rows = {data}
                             columns = {columnsProductionCost}
                             new_id = {rowId}
                             page_size = {5}
                             rowsPerPageOptions={5}
                    />
                </div>

            </div>
        </div>
    );
};

export default ProductionCost;