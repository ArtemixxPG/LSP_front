import React, {useEffect, useState} from 'react';
import SideBar from "../../components/sidebar/SideBar";
import Datable from "../../components/datable/Datable";
import {columnsDemandFulfillment, columnsDemandFulfillmentWithColor} from "../../HeadersTable";
import NavBar from "../../components/navbar/NavBar";

import "./compare.scss"

const CompareDemandFulfillment = () => {

    const [data, setData] = useState([]);
    const [rowId, setRowId] = useState();
    const [fileDir, setFileDir] = useState("");
    const [typeExp, setTypeExp] = useState("");
    const [chooseTable1, setChoseTable1] = useState("")
    const [chooseTable2, setChoseTable2] = useState("")

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



   const handleSubmit=(e) =>{
        console.log('Ваш любимый вкус: ' + typeExp);
        e.preventDefault();
    }

   const handleChange=(e) => {
        setTypeExp( e.target.value);
    }

    const handleSubmitTable1=(e) =>{
        console.log('Ваш любимый вкус: ' + chooseTable1);
        e.preventDefault();
    }

    const handleChangeTable1=(e) => {
        setChoseTable1( e.target.value);
    }

    const handleSubmitTable2=(e) =>{
        console.log('Ваш любимый вкус: ' + chooseTable2);
        e.preventDefault();
    }

    const handleChangeTable2=(e) => {
        setChoseTable2(e.target.value);
    }

    return (
        <div className="main">
            <SideBar/>
            <div className="container">
                <NavBar/>
                <div className="chooseExpirement">
                    <form onSubmit={handleSubmit}>
                        <label className="search">
                            Выберите таблицу:
                            <select value={typeExp} onChange={handleChange}>
                                <option value="Таблица 1">#1</option>
                                <option value="Таблица 2">#2</option>
                                <option value="Таблица 3">#3</option>
                                <option value="Таблица 4">#4</option>
                            </select>
                        </label>
                    </form>
                </div>
                <div className="datatable">
                    <form onSubmit={handleSubmitTable1}>
                        <label className="search">
                            Выберите номер эксперимента:
                            <select value={chooseTable1} onChange={handleChangeTable1}>
                                <option value="#1">#1</option>
                                <option value="#2">#2</option>
                                <option value="#3">#3</option>
                                <option value="#4">#4</option>
                            </select>
                        </label>
                    </form>
                    <Datable rows = {data}
                             columns = {columnsDemandFulfillmentWithColor(data, data)}
                             new_id = {rowId}
                             pageSize={5}
                             rowsPerPageOptions={5}
                    />
                </div>

                <div className="datatable">
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
                    <Datable rows = {data}
                             columns = {columnsDemandFulfillmentWithColor(data, data)}
                             new_id = {rowId}
                             pageSize={5}
                             rowsPerPageOptions={5}
                    />

                </div>
            </div>
        </div>
    );
};

export default CompareDemandFulfillment;