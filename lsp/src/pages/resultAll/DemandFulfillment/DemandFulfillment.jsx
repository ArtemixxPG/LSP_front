import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import Datable from "../../../components/datable/Datable";
import {columnsDemandFulfillment} from "../../../HeadersTable";
import NavBar from "../../../components/navbar/NavBar";

import "./demandfulfillment.scss"

const DemandFulfillment = () => {

    const [data, setData] = useState([]);
    const [rowId, setRowId] = useState();
    const [fileDir, setFileDir] = useState("");

    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/dfilm');
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


    const fetchDataCreateCSV = async () => {
        try {
            const response = await fetch('http://localhost:8080/dfilm/create');
            const result = await response.json();

            setFileDir("Файл загружен: "+result.path);


        } catch (e) {
            console.error(e.message)
        }
    }



    return (
        <div className="main">
            <SideBar/>
            <div className="container">
                <NavBar/>
                <div className="datatable">
                <Datable rows = {data}
                columns = {columnsDemandFulfillment}
                         new_id = {rowId}
                         pageSize={5}
                         rowsPerPageOptions={5}
                />
                </div>
                <div className="button">
                    <button onClick={fetchDataCreateCSV
                    }>Загрузить результат</button>
                    <label>{fileDir}</label>
                </div>
            </div>
        </div>
    );
};

export default DemandFulfillment;