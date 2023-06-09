import React, {useEffect, useState} from 'react';
import SideBar from "../../components/sidebar/SideBar";
import {
    columnsDemandFulfillmentWithColor,
    columnsOverallStatsWithColor,
    columnsVehicleFlowsWithColor,
} from "../../HeadersTable";
import NavBar from "../../components/navbar/NavBar";
import MenuIcon from "@mui/icons-material/Menu";

import "./compare.scss"
import CompareDatatable from "../../components/datable/CompareDatatable";
import ErrorModal from "../../components/Modal/ErrorModal";
import NEChart from "../../components/chart/nechart/NEChart";
import OMChart from "../../components/chart/omchart/OMChart";
import OSChart from "../../components/chart/oschart/OSChart";

const CompareDemandFulfillment = (props) => {

    var numeral = require('numeral');

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

    //const [data, setData] = useState([]);
    //const [rowId, setRowId] = useState();
    //const [urlDF, setUrlDF] = useState('http://localhost:8080/results/datasets/demandfulfillment?limit=');
    //const [urlNE, setUrlNE] = useState('http://localhost:8080/results/datasets/named_expressions?limit=');
    //const [urlVF, setUrlVF] = useState('http://localhost:8080/results/datasets/vehicle_flows?limit=');
    //const [fileDir, setFileDir] = useState("");
    //const [typeExp, setTypeExp] = useState("");
    const [chooseTable1, setChoseTable1] = useState("");
    const [chooseTable2, setChoseTable2] = useState("");
    const [firstExperiment, setFirstExperiments] = useState('')
    const [secondExperiment, setSecondExperiments] = useState('')
    const [dataDFTable, setDataDFTable] = useState({
        dataDFFirstExperiment:[],
        dataDFSecondExperiment:[]
    })

    const [dataOvSTable, setDataOvsTable] = useState({
        dataOvSFirstExperiment:[],
        dataOvSSecondExperiment:[]
    })

    const [dataVFTable, setDataVFTable] = useState({
        dataVFFirstExperiment:[],
        dataVFSecondExperiment:[]
    })

    const [icon, setIcon] = useState(false);

    const [data, setData] = useState({
        dFsForFirstExperiment:[],
        dFsForSecondExperiment:[],
        ovSsForFirstExperiment:[],
        ovSsForSecondExperiment:[],
        nEForFirstExperiment:[],
        nEForSecondExperiment:[],
        vehicleFlowsForFirstExperiment:[],
        vehicleFlowsForSecondExperiment:[],
        membersForFirstExperiment:[],
        membersForSecondExperiment:[]
    });

     const urlDF =
         'http://localhost:8080/results/dfilm'

     const urlOvS =
        'http://localhost:8080/results/ovs'

    const urlVF =
        'http://localhost:8080/results/vf'


    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/compare/data?firstExperimentName=' + firstExperiment + '&secondExperimentName=' + secondExperiment );
                const result = await response.json();

                // непосредственное обновление состояния при условии, что компонент не размонтирован
                if(!cleanupFunction) {
                    setData(result);
                    setDataDFTable({
                        dFsForFirstExperiment:result['dFsForFirstExperiment'],
                        dFsForSecondExperiment:result['dFsForSecondExperiment'],
                    })
                }

            } catch (e) {
                console.error(e.message)
            }
        };


        fetchData().then();
        // функция очистки useEffect
        return () => cleanupFunction = true;
    }, [])


    const  firstExperimentList = props.experiments.map




   const handleSubmit=(e) =>{
        e.preventDefault();
    }

   /*const handleChange=(e) => {
       setUrl(typeTable(e.target.value));
    }*/

    const handleSubmitTable1=(e) =>{
        e.preventDefault();
    }

    const handleChangeTable1=(e) => {
        setChoseTable1(e.target.value);
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
                experiments={props.experiments}
            />
                <div className="content">
                    <div className="exp-pole">

                    </div>
                    <div className="datatableDF">УДОВЛЕТВОРЕНИЕ СПРОСА
                        <form onSubmit={handleSubmitTable1}>
                            <label className="search">
                                Выберите номер эксперимента:
                                <select value={chooseTable1} onChange={handleChangeTable1}>
                                    <option value="#1">Result March NO KP</option>
                                    <option value="#2">Result March with DC f,s-dc KP</option>
                                </select>
                            </label>
                        </form>
                        <CompareDatatable url = {urlDF} columns = {columnsDemandFulfillmentWithColor} /*table={"pageDemandFulfillment"} setError = {props.setError}*//>
                        {/*<ErrorModal error = {props.error} handleClose={props.handleClose} />*/}
                    </div>

                    <div className="datatableDF">
                        <form onSubmit={handleSubmitTable2}>
                            <label className="search">
                                Выберите номер эксперимента:
                                <select value={chooseTable2} onChange={handleChangeTable2}>
                                    <option value="#1">Result March NO KP</option>
                                    <option value="#2">Result March with DC f,s-dc KP</option>
                                </select>
                            </label>
                        </form>
                        <CompareDatatable url = {urlDF} columns = {columnsDemandFulfillmentWithColor} /*table={"pageDemandFulfillment"} setError = {props.setError}*//>
                        {/*<ErrorModal error = {props.error} handleClose={props.handleClose} />*/}
                    </div>


                    <div className="datatableOvS">ОБЩАЯ СТАТИСТИКА
                        <form onSubmit={handleSubmitTable1}>
                            <label className="search">
                                Выберите номер эксперимента:
                                <select value={chooseTable1} onChange={handleChangeTable1}>
                                    <option value="#1">Result March NO KP</option>
                                    <option value="#2">Result March with DC f,s-dc KP</option>
                                </select>
                            </label>
                        </form>
                        <CompareDatatable url = {urlOvS} columns = {columnsOverallStatsWithColor(null, null)} /*table={"pageOverallStats"} setError = {props.setError}*//>
                        {/*<ErrorModal error = {props.error} handleClose={props.handleClose} />*/}
                    </div>

                    <div className="datatableOvS">
                        <form onSubmit={handleSubmitTable2}>
                            <label className="search">
                                Выберите номер эксперимента:
                                <select value={chooseTable2} onChange={handleChangeTable2}>
                                    <option value="#1">Result March NO KP</option>
                                    <option value="#2">Result March with DC f,s-dc KP</option>
                                </select>
                            </label>
                        </form>
                        <CompareDatatable url = {urlOvS} columns = {columnsOverallStatsWithColor(null, null)} /*table={"pageOverallStats"} setError = {props.setError}*//>
                        {/*<ErrorModal error = {props.error} handleClose={props.handleClose} />*/}
                    </div>

                    <div className="datatableVF">ТРАНСПОРТНЫЙ ПОТОК
                        <form onSubmit={handleSubmitTable1}>
                            <label className="search">
                                Выберите номер эксперимента:
                                <select value={chooseTable1} onChange={handleChangeTable1}>
                                    <option value="#1">Result March NO KP</option>
                                    <option value="#2">Result March with DC f,s-dc KP</option>
                                </select>
                            </label>
                        </form>
                        <CompareDatatable url = {urlVF} columns = {columnsVehicleFlowsWithColor} /*table={"pageVehicleFlows"} setError = {props.setError}*//>
                        {/*<ErrorModal error = {props.error} handleClose={props.handleClose} />*/}
                    </div>

                    <div className="datatableVF">
                        <form onSubmit={handleSubmitTable2}>
                            <label className="search">
                                Выберите номер эксперимента:
                                <select value={chooseTable2} onChange={handleChangeTable2}>
                                    <option value="#1">Result March NO KP</option>
                                    <option value="#2">Result March with DC f,s-dc KP</option>
                                </select>
                            </label>
                        </form>
                        <CompareDatatable url = {urlVF} columns = {columnsVehicleFlowsWithColor} /*table={"pageVehicleFlows"} setError = {props.setError}*//>
                        {/*<ErrorModal error = {props.error} handleClose={props.handleClose} />*/}
                    </div>
                    <div className="NEcharts">
                        <NEChart data = {data.dataSetNE} title = "Гистограмма общей стоимости:"
                                 dataName = "nameru" dataKeyFirst="mun" dataKeySecond="mun" strokeFirst="#00008B" strokeSecond="#218bff"
                                 fillFirst="#00008B" fillSecond="#00BFFF"/>
                    </div>

                    <div className="OMcharts">
                        <OMChart data = {data.dataSetOM} title = "Гистограмма закупочной стоимости:"
                                 dataName = "nameru" dataKeyFirst="it1" strokeFirst="#9ACD32" fillFirst="#9ACD32"/>
                    </div>

                    <div className="OScharts">
                        <OSChart data = {data.dataSetOvS} title = "Гистограмма общей статистики:"
                                 dataName = "name" dataKey="value" dataFill="#FA8072" dataStroke = "#FA8072"/>
                    </div>
                </div>
            </div>
    );
};

export default CompareDemandFulfillment;