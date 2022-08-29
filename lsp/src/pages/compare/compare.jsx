import React, {useEffect, useState} from 'react';
import SideBar from "../../components/sidebar/SideBar";
import Datable from "../../components/datable/Datable";
import {columnsDemandFulfillment, columnsDemandFulfillmentWithColor} from "../../HeadersTable";
import NavBar from "../../components/navbar/NavBar";
import MenuIcon from "@mui/icons-material/Menu";

import "./compare.scss"
import CompareDatable from "../../components/datable/CompareDatatable";

const CompareDemandFulfillment = (props) => {


    let headersTable = {
        url: 'http://localhost:8080/results/datasets/demandfulfillment?limit=',
        headersTable: 'page'
    }

    // const urlDF = (page) => {
    //     return 'http://localhost:8080/results/datasets/demandfulfillment?limit=' + 5 + '&offset=' + page * 5
    // }
    //
    // const urlOS = (page) => {
    //     return 'http://localhost:8080/results/datasets/operating_sites?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlOC = (page) => {
    //     return 'http://localhost:8080/results/datasets/other_costs?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlPF = (page) => {
    //     return 'http://localhost:8080/results/datasets/products_flows?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlPC = (page) => {
    //     return 'http://localhost:8080/results/datasets/production_cost?limit=' + 5 + '&offset=' + page * 5
    // }
    //
    //
    // const urlPnF = (page) => {
    //     return 'http://localhost:8080/results/datasets/production_flows?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlSFC = (page) => {
    //     return 'http://localhost:8080/results/datasets/shared_flow_constraints?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    //
    // const urlSS= (page) => {
    //     return 'http://localhost:8080/results/datasets/site_state?limit=' + 5 + '&offset=' + page * 5
    // }
    //
    // const urlSBP = (page) => {
    //     return 'http://localhost:8080/results/datasets/storages_by_product?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlVF = (page) => {
    //     return 'http://localhost:8080/results/datasets/vehicle_flows?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlSSC = (page) => {
    //     return 'http://localhost:8080/results/datasets/shared_storages_constraints?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }

    const createUrl = (page) => {
        return url +  5 + '&offset=' + page * 5
    }
    const typeTable = (item) => {
        if(item === 'Приход товара'){
            return 'http://localhost:8080/results/datasets/demandfulfillment?limit='
        }
        if(item === 'Движение товара'){
            return 'http://localhost:8080/results/datasets/operating_sites?limit='
        }
        if(item === 'Прочие расходы'){
            return 'http://localhost:8080/results/datasets/other_costs?limit='
        }
        if(item === 'Операционая стоимость'){
            return 'http://localhost:8080/results/datasets/production_flows?limit='
        }
        if(item === 'Хранилища товаров'){
            return 'http://localhost:8080/results/datasets/storages_by_product?limit='
        }
        if(item === 'Себестоимость продукции'){
            return 'http://localhost:8080/results/datasets/production_cost?limit='
        }
        if(item === 'Производственный поток'){
            return 'http://localhost:8080/results/datasets/products_flows?limit='
        }
        if(item === 'Общие ограничения производства'){
            return 'http://localhost:8080/results/datasets/shared_flow_constraints?limit='
        }
        if(item === 'Общие ограничения хранения'){
            return 'http://localhost:8080/results/datasets/shared_storages_constraints?limit='
        }
        if(item === 'Реализация спроса'){
            return 'http://localhost:8080/results/datasets/demandfulfillment?limit='
        }
        if(item === 'Траспортный поток'){
            return 'http://localhost:8080/results/datasets/vehicle_flows?limit='
        }
    }

    const [data, setData] = useState([]);
    const [rowId, setRowId] = useState();
    const [url, setUrl] = useState('http://localhost:8080/results/datasets/demandfulfillment?limit=')
    const [fileDir, setFileDir] = useState("");
    const [typeExp, setTypeExp] = useState("");
    const [chooseTable1, setChoseTable1] = useState("")
    const [chooseTable2, setChoseTable2] = useState("")
    const [icon, setIcon] = useState(false)




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
        e.preventDefault();
    }

   const handleChange=(e) => {
       setUrl(typeTable(e.target.value));
    }

    const handleSubmitTable1=(e) =>{

        e.preventDefault();
    }

    const handleChangeTable1=(e) => {
        setChoseTable1( e.target.value);
    }

    const handleSubmitTable2=(e) =>{
        e.preventDefault();
    }

    const handleChangeTable2=(e) => {
        setChoseTable2(e.target.value);
    }

    return (
        <div className="main">
            <div className="openMenu">
                <MenuIcon className="menuButton" onClick={() => setIcon(!icon)}/>
            </div>
            <SideBar
                menu = {props.menu}
                setMenu = {props.setMenu}
                open = {icon}
                close = {()=>setIcon(!icon)}
            />
                <div className="content">
                    <div className="chooseExpirement">
                        <form onSubmit={handleSubmit}>
                            <label className="search">
                                Выберите таблицу:
                                <select value={typeExp} onChange={handleChange}>
                                    <option value="Приход товара">Приход товара</option>
                                    <option value="Движение товара">Движение товара</option>
                                    <option value="Прочие расходы">Прочие расходы</option>
                                    <option value="Операционая стоимость">Операционая стоимость</option>
                                    <option value="Хранилища товаров">Хранилища товаров</option>
                                    <option value="Себестоимость продукции">Себестоимость продукции</option>
                                    <option value="Производственный поток">Производственный поток</option>
                                    <option value="Общие ограничения производства">Общие ограничения производства</option>
                                    <option value="Общие ограничения хранения">Общие ограничения хранения</option>
                                    <option value="Реализация спроса">Реализация спроса</option>
                                    <option value="Траспортный поток">Траспортный поток</option>
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
                        <CompareDatable
                            url = {createUrl}
                            columns = {columnsDemandFulfillmentWithColor}
                            table = {'pageDemandFulfillment'} setError = {props.setError}
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
                        <CompareDatable
                            url = {createUrl}
                                 columns = {columnsDemandFulfillmentWithColor}
                                table = {'pageDemandFulfillment'} setError = {props.setError}
                        />
                    </div>
                </div>
            </div>
    );
};

export default CompareDemandFulfillment;