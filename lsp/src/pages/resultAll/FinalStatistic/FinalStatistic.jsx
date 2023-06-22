import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import {
    columnsDemandFulfillmentWithColor,
    columnsOverallStatsWithColor,
    columnsVehicleFlowsWithColor,
} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu";

import "./finalstatistic.scss"
import CompareDatatable from "../../../components/datable/CompareDatatable";

const FinalStatistic = (props) => {



    // const urlDF = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/demandfulfillment?limit=' + 5 + '&offset=' + page * 5
    // }
    //
    // const urlOS = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/operating_sites?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlOC = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/other_costs?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlPF = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/products_flows?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlPC = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/production_cost?limit=' + 5 + '&offset=' + page * 5
    // }
    //
    //
    // const urlPnF = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/production_flows?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlSFC = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/shared_flow_constraints?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    //
    // const urlSS= (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/site_state?limit=' + 5 + '&offset=' + page * 5
    // }
    //
    // const urlSBP = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/storages_by_product?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlVF = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/vehicle_flows?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlSSC = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/shared_storages_constraints?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlNE = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/named_expressions?limit=' + (page + 1) * 5 + '&offset=' + page * 1
    // }

    // const createUrlDF = (page) => {
    //     return urlDF + 8 + '&offset=' + page * 8
    // }
    //
    // const createUrlNE = (page) => {
    //     return urlOvS + 8 + '&offset=' + page * 8
    // }
    //
    // const createUrlVF = (page) => {
    //     return urlVF + 8 + '&offset=' + page * 8
    // }

    // const typeTable = (item) => {
    //     if(item === 'Общая статистика'){
    //         return 'http://infotrans-logistic.ru:3577/results/datasets/named_expressions?limit='
    //     }
    //     if(item === 'Приход товара'){
    //         return 'http://infotrans-logistic.ru:3577/results/datasets/demandfulfillment?limit='
    //     }
    //     if(item === 'Движение товара'){
    //         return 'http://infotrans-logistic.ru:3577/results/datasets/operating_sites?limit='
    //     }
    //     if(item === 'Прочие расходы'){
    //         return 'http://infotrans-logistic.ru:3577/results/datasets/other_costs?limit='
    //     }
    //     if(item === 'Операционая стоимость'){
    //         return 'http://infotrans-logistic.ru:3577/results/datasets/production_flows?limit='
    //     }
    //     if(item === 'Хранилища товаров'){
    //         return 'http://infotrans-logistic.ru:3577/results/datasets/storages_by_product?limit='
    //     }
    //     if(item === 'Себестоимость продукции'){
    //         return 'http://infotrans-logistic.ru:3577/results/datasets/production_cost?limit='
    //     }
    //     if(item === 'Производственный поток'){
    //         return 'http://infotrans-logistic.ru:3577/results/datasets/products_flows?limit='
    //     }
    //     if(item === 'Общие ограничения производства'){
    //         return 'http://infotrans-logistic.ru:3577/results/datasets/shared_flow_constraints?limit='
    //     }
    //     if(item === 'Общие ограничения хранения'){
    //         return 'http://infotrans-logistic.ru:3577/results/datasets/shared_storages_constraints?limit='
    //     }
    //     if(item === 'Реализация спроса'){
    //         return 'http://infotrans-logistic.ru:3577/results/datasets/demandfulfillment?limit='
    //     }
    //     if(item === 'Траспортный поток'){
    //         return 'http://infotrans-logistic.ru:3577/results/datasets/vehicle_flows?limit='
    //     }
    // }

    const [data, setData] = useState([]);
    const [rowId, setRowId] = useState();
    const [urlDF, setUrlDF] = useState('http://localhost:8080/results/datasets/demandfulfillment?limit=');
    const [urlNE, setUrlNE] = useState('http://localhost:8080/results/datasets/named_expressions?limit=');
    const [urlVF, setUrlVF] = useState('http://localhost:8080/results/datasets/vehicle_flows?limit=');
    const [fileDir, setFileDir] = useState("");
    const [typeExp, setTypeExp] = useState("");
    const [chooseTable1, setChoseTable1] = useState("");
    const [chooseTable2, setChoseTable2] = useState("");
    const [icon, setIcon] = useState(false);
    //
    // const urlDF =
    //     'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/dfilm'
    //
    // const urlOvS =
    //     'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/ovs'
    //
    // const urlVF =
    //     'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/vf'
    //
    //
    // // useEffect(() => {
    // //     let cleanupFunction = false;
    // //     const fetchData = async () => {
    // //         try {
    // //             const response = await fetch('http://localhost:8080/dfilm');
    // //             const result = await response.json();
    // //
    // //             // непосредственное обновление состояния при условии, что компонент не размонтирован
    // //             if(!cleanupFunction) {
    // //                 setData(result);
    // //             }
    // //
    // //         } catch (e) {
    // //             console.error(e.message)
    // //         }
    // //     };
    // //
    // //
    // //     fetchData().then();
    // //     // функция очистки useEffect
    // //     return () => cleanupFunction = true;
    // // }, [])
    //
    //
    //
    // const handleSubmit=(e) =>{
    //     e.preventDefault();
    // }
    //
    // /*const handleChange=(e) => {
    //     setUrl(typeTable(e.target.value));
    //  }*/
    //
    // const handleSubmitTable1=(e) =>{
    //     e.preventDefault();
    // }
    //
    // const handleChangeTable1=(e) => {
    //     setChoseTable1(e.target.value);
    // }
    //
    // const handleSubmitTable2=(e) =>{
    //     e.preventDefault();
    // }
    //
    // const handleChangeTable2=(e) => {
    //     setChoseTable2(e.target.value);
    // }
    //
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
                experiments={props.experiments}
            />
    {/*//         <div className="content"> hvyhgyg`*/}
    //             {/*<div className="datatableDF">УДОВЛЕТВОРЕНИЕ СПРОСА*/}
    //             {/*    /!*<form onSubmit={handleSubmitTable1}>*!/*/}
    //             {/*    /!*    <label className="search">*!/*/}
    //             {/*    /!*        Выберите номер эксперимента:*!/*/}
    //             {/*    /!*        <select value={chooseTable1} onChange={handleChangeTable1}>*!/*/}
    //             {/*    /!*            <option value="#1">Result March NO KP</option>*!/*/}
    //             {/*    /!*            <option value="#2">Result March with DC f,s-dc KP</option>*!/*/}
    //             {/*    /!*        </select>*!/*/}
    //             {/*    /!*    </label>*!/*/}
    //             {/*    /!*</form>*!/*/}
    //             {/*    <CompareDatatable url = {urlDF} columns = {columnsDemandFulfillmentWithColor} /*table={"pageDemandFulfillment"} setError = {props.setError}*//>*/}
    //             {/*    /!*<ErrorModal error = {props.error} handleClose={props.handleClose} />*!/*/}
    //             {/*</div>*/}
    //
    //             {/*<div className="datatableDF">*/}
    //             {/*    <form onSubmit={handleSubmitTable2}>*/}
    //             {/*        <label className="search">*/}
    //             {/*            Выберите номер эксперимента:*/}
    //             {/*            <select value={chooseTable2} onChange={handleChangeTable2}>*/}
    //             {/*                <option value="#1">Result March NO KP</option>*/}
    //             {/*                <option value="#2">Result March with DC f,s-dc KP</option>*/}
    //             {/*            </select>*/}
    //             {/*        </label>*/}
    //             {/*    </form>*/}
    //             {/*    <CompareDatatable url = {urlDF} columns = {columnsDemandFulfillmentWithColor} /*table={"pageDemandFulfillment"} setError = {props.setError}*//>*/}
    //             {/*    /!*<ErrorModal error = {props.error} handleClose={props.handleClose} />*!/*/}
    //             {/*</div>*/}
    //
    //
    //             {/*<div className="datatableOvS">ОБЩАЯ СТАТИСТИКА*/}
    //             {/*    /!*<form onSubmit={handleSubmitTable1}>*!/*/}
    //             {/*    /!*    <label className="search">*!/*/}
    //             {/*    /!*        Выберите номер эксперимента:*!/*/}
    //             {/*    /!*        <select value={chooseTable1} onChange={handleChangeTable1}>*!/*/}
    //             {/*    /!*            <option value="#1">Result March NO KP</option>*!/*/}
    //             {/*    /!*            <option value="#2">Result March with DC f,s-dc KP</option>*!/*/}
    //             {/*    /!*        </select>*!/*/}
    //             {/*    /!*    </label>*!/*/}
    //             {/*    /!*</form>*!/*/}
    //             {/*    <CompareDatatable url = {urlOvS} columns = {columnsOverallStatsWithColor} /*table={"pageOverallStats"} setError = {props.setError}*//>*/}
    //             {/*    /!*<ErrorModal error = {props.error} handleClose={props.handleClose} />*!/*/}
    //             {/*</div>*/}
    //
    //             {/*<div className="datatableOvS">*/}
    //             {/*    <form onSubmit={handleSubmitTable2}>*/}
    //             {/*        <label className="search">*/}
    //             {/*            Выберите номер эксперимента:*/}
    //             {/*            <select value={chooseTable2} onChange={handleChangeTable2}>*/}
    //             {/*                <option value="#1">Result March NO KP</option>*/}
    //             {/*                <option value="#2">Result March with DC f,s-dc KP</option>*/}
    //             {/*            </select>*/}
    //             {/*        </label>*/}
    //             {/*    </form>*/}
    //             {/*    <CompareDatatable url = {urlOvS} columns = {columnsOverallStatsWithColor} /*table={"pageOverallStats"} setError = {props.setError}*//>*/}
    //             {/*    /!*<ErrorModal error = {props.error} handleClose={props.handleClose} />*!/*/}
    //             {/*</div>*/}
    //
    //             {/*<div className="datatableVF">ТРАНСПОРТНЫЙ ПОТОК*/}
    //             {/*    /!*<form onSubmit={handleSubmitTable1}>*!/*/}
    //             {/*    /!*    <label className="search">*!/*/}
    //             {/*    /!*        Выберите номер эксперимента:*!/*/}
    //             {/*    /!*        <select value={chooseTable1} onChange={handleChangeTable1}>*!/*/}
    //             {/*    /!*            <option value="#1">Result March NO KP</option>*!/*/}
    //             {/*    /!*            <option value="#2">Result March with DC f,s-dc KP</option>*!/*/}
    //             {/*    /!*        </select>*!/*/}
    //             {/*    /!*    </label>*!/*/}
    //             {/*    /!*</form>*!/*/}
    //             {/*    <CompareDatatable url = {urlVF} columns = {columnsVehicleFlowsWithColor} /*table={"pageVehicleFlows"} setError = {props.setError}*//>*/}
    //             {/*    /!*<ErrorModal error = {props.error} handleClose={props.handleClose} />*!/*/}
    //             {/*</div>*/}
    //
    //             {/*<div className="datatableVF">*/}
    //             {/*    <form onSubmit={handleSubmitTable2}>*/}
    //             {/*        <label className="search">*/}
    //             {/*            Выберите номер эксперимента:*/}
    //             {/*            <select value={chooseTable2} onChange={handleChangeTable2}>*/}
    //             {/*                <option value="#1">Result March NO KP</option>*/}
    //             {/*                <option value="#2">Result March with DC f,s-dc KP</option>*/}
    //             {/*            </select>*/}
    //             {/*        </label>*/}
    //             {/*    </form>*/}
    //             {/*    <CompareDatatable url = {urlVF} columns = {columnsVehicleFlowsWithColor} /*table={"pageVehicleFlows"} setError = {props.setError}*//>*/}
    //             {/*    /!*<ErrorModal error = {props.error} handleClose={props.handleClose} />*!/*/}
    //             {/*</div>*/}
            {/*</div>*/}
        </div>
     );
};

export default FinalStatistic;