import React, {useEffect, useState} from 'react';

import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import "./infographics.scss";
import Widget from "../../../components/widget/Widget";
import Widget13 from "../../../components/widget/Widget13";
import Popup from "../../../components/popup/Popup";
import NEChart from "../../../components/chart/nechart/NEChart";
import OMChart from "../../../components/chart/omchart/OMChart";
import OSChart from "../../../components/chart/oschart/OSChart";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Datable from "../../../components/datable/Datable";
import MenuIcon from "@mui/icons-material/Menu";
import {
    columnsDemandFulfillmentWithColor,
    columnsNamedExpressions, columnsNamedExpressionsWithColor,
    columnsObjectiveMembers,
    columnsOverallStats, columnsVehicleFlowsWithColor
} from "../../../HeadersTable";
import CompareDatatable from "../../../components/datable/CompareDatatable";
import {createFinalStatDFDataSet, createFinalStatVFDataset} from "../../../CreateDataset";
import WidgetStatistic from "../../../components/widget/WidgetStatistic";



const namedExpressionRus = [
    'Разгрузка',
    'Загрузка',
    'Производство',
    'Транспорт',
    'Закупки у поставщиков',
    'Общие затраты',
    'Выручка',
    'Прибыль'

]

const headerStyle = {
    margin:'10, 10, 1',
    fontSize:16,
    color: '#218bff'
}

const contentStyle = {
    height : "200px",
    display:'flex',
    justifyContent:'space-between',
    flex: 1,
    padding: '10px'
}

const mainContentStyle = {
    display:'flex',
    flex: 3,
    width:'100%'
}

const widgetsContent ={
    display: 'flex',
    padding: '100px',
    gap: '20px',
    width: '100%'
}

const leftStyle = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    padding: '10px 10 px'
}

const centerStyle = {
    display:'flex',
    justifyContent:'space-between',
    flex: 1,
    padding: '10px',
    width:'100%'
}

const rightStyle = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    padding: '10px 10 px'
}

const tableWidgetStyle = {
    padding: '10px',
    width:'100%'
}



const Infographics = (props) => {

    var numeral = require('numeral');
    const [buttonPopupNE, setButtonPopupNE] = React.useState(false);
    const [buttonPopupOM, setButtonPopupOM] = React.useState(false);
    const [buttonPopupOS, setButtonPopupOS] = React.useState(false);
    const [chooseTable1, setChoseTable1] = useState("");
    const [chooseTable2, setChoseTable2] = useState("");
    const [data, setData] = useState({
        vehicleFlows:[],
        demandFulfillments:[]
    })
    const [demandFullfilmentStats, setDemandFullfilmentStats] = useState({
             demandForProduct : {
                min: 0,
                satisfied: 0,
                result: 0,
            },
             demandForOrder : {
                percentage: 0,
                result: 0,
            }

    })
    const [vehicleFlowParamets, setVehicleFlowParametrs] = useState({
        vehicleParametersCapacity : {
            auto20T: 0,
            auto5T: 0,
            auto10T: 0,
            poluvagon: 0,
            platforma: 0,
        },
        vehicleParameters : {
            auto20T: 0,
            auto5T: 0,
            auto10T: 0,
            poluvagon: 0,
            platforma: 0,
        }
    })


    // const [data, setData] = useState({
    //     dataSetNE: [],
    //     dataSetOM: [],
    //     dataSetOvS: []
    // });
    const [icon, setIcon] = useState(false)
    //
    // const urlNE = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/named_expressions?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlOM = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/objective_members?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }
    //
    // const urlOvS = (page) => {
    //     return 'http://infotrans-logistic.ru:3577/results/datasets/overall_stats?limit=' + (page + 1) * 5 + '&offset=' + page * 5
    // }

    const urlDF =
        'http://62.213.30.22:8585/LSP_back-1.0-SNAPSHOT/results/dfilm'

    const urlOvS =
        'http://62.213.30.22:8585/LSP_back-1.0-SNAPSHOT/results/ovs'

    const urlNE =
        'http://62.213.30.22:8585/LSP_back-1.0-SNAPSHOT/results/ne/up?experiment='+props.experiment


    const widgetNamedExpressionsNewHeader = () => {
        return(
            <div style={headerStyle}>
                <h2>Max кол-во ТС по типу</h2>
            </div>
        )
    }

    const widgetNamedExpressionsNewContent = (data) => {
        return(
            <div style={contentStyle}>
                <div style={tableWidgetStyle}>
                <CompareDatatable style={{width:'100%'}} url = {data} columns = {columnsNamedExpressions}/>
                </div>
            </div>
        )
    }

    const widgetvehicleParametersHeader = () => {
        return(
            <div style={headerStyle}>
                <h2>Используемая емкость ТС по типу</h2>
            </div>
        )
    }

    const widgetvehicleParametersContent = (data) => {
                return (
                    <div style={contentStyle}>
                        <div style={leftStyle}>
                            <span>авто 5 т </span>
                            <span>авто 10 т </span>
                            <span>авто 20 т </span>
                            <span>платформа ж/д </span>
                            <span>полувагон </span>
                        </div>
                        <div style={rightStyle}>
                            <span> {Math.ceil(data.auto5T)}</span>
                            <span> {Math.ceil(data.auto10T)}</span>
                            <span> {Math.ceil(data.auto20T)}</span>
                            <span> {Math.ceil(data.platforma)}</span>
                            <span>{Math.ceil(data.poluvagon)}</span>
                        </div>
                    </div>
                )
    }

    const widgetvehicleParametersCapacityHeader = () => {
        return(
            <div style={headerStyle}>
                <h2>Используемая емкость ТС по типу</h2>
            </div>
        )
    }

    const widgetvehicleParametersCapacityContent = (data) => {
                return(
        <div style={contentStyle}>
            <div style={leftStyle}>
                <span>авто 5 т </span>
                <span>авто 10 т </span>
                <span>авто 20 т </span>
                <span>платформа ж/д </span>
                <span>полувагон </span>
            </div>
            <div style={rightStyle}>
            <span> {Math.ceil(data.auto5T)}</span>
            <span> {Math.ceil(data.auto10T)}</span>
            <span> {Math.ceil(data.auto20T)}</span>
            <span> {Math.ceil(data.platforma)}</span>
            <span>{Math.ceil(data.poluvagon)}</span>
            </div>
        </div>
                )
    }

    const widgetDemandForProductHeader = () => {
        return(
            <div style={headerStyle}>
                <h2>Удовлетворение спроса по заказам</h2>
            </div>
        )
    }

    const widgetDemandForProductContent = (data) => {
                return (
        <div style={contentStyle}>
            <div style={leftStyle}>
                <span>Минимальная поставка, шт</span>
                <span>Заказано, шт</span>
                <span>Поставлено по факту, %:</span>
        </div>
            <div style={rightStyle}>
                <span>{Math.ceil(data.min)}</span>
                <span>{Math.ceil(data.satisfied)}</span>
                <span>{Math.ceil(data.result)}</span>
            </div>
        </div>
                )

    }

    const widgetDemandForOrderHeader = () => {
        return(
            <div style={headerStyle}>
                <h2>Удовлетворение спроса по продуктам</h2>
            </div>
        )
    }

    const widgetDemandForOrderContent = (data) => {
        return (
                <div style={contentStyle}>
                    <div style={leftStyle}>
                        <span>Процент поставки, %: </span>
                        <span>Поставлено итого, шт: </span>
                    </div>
                    <div style={rightStyle}>
                        <span>{Math.ceil(data.percentage)}</span>
                        <span>{Math.ceil(data.result)}</span>
                    </div>

            </div>
        )
    }




    useEffect(() => {

            let cleanupFunction = false;
            const fetchData = async () => {
                try {
                    const response = await fetch('http://62.213.30.22:8585/LSP_back-1.0-SNAPSHOT/fs?experiment='+props.experiment);
                    const result = await response.json();
                    // непосредственное обновление состояния при условии, что компонент не размонтирован
                    if (!cleanupFunction) {
                        clean(result);
                        setVehicleFlowParametrs(createFinalStatVFDataset(result['vehicleFlows']))
                        setDemandFullfilmentStats(createFinalStatDFDataSet(result['demandFulfillments']))
                    }

                } catch (e) {
                    console.error(e.message)
                }
            };


            fetchData().then();
            // функция очистки useEffect
            return () => cleanupFunction = true;
        }, []

    )


    function clean(obj) {
        for (var propName in obj) {
            for (var propInd in obj[propName]) {
                for (var propKey in obj[propName][propInd]) {
                    if (obj[propName][propInd][propKey] === null) {
                        delete obj[propName][propInd][propKey];

                    }
                }
            }
        }
        return obj;
    }



     return (
         <div className="inforaph">
             <div className="content">
             <div className="openMenu">
                 <MenuIcon className="menuButton" onClick={() => setIcon(!icon)}/>
             </div>
              <SideBar
                  menu = {props.menu}
                  setMenu = {props.setMenu}
                  open = {icon}
                  close = {()=>setIcon(!icon)}
                  experiments={props.experiments}
                  setExperiment={props.setExperiment}
              />
                <div style={mainContentStyle}>
                    <div style={widgetsContent}>
                    <div style={leftStyle}>
                        <WidgetStatistic header={widgetvehicleParametersCapacityHeader()}
                                         content={widgetvehicleParametersCapacityContent(vehicleFlowParamets
                                             .vehicleParametersCapacity)}/>
                        <WidgetStatistic header={widgetvehicleParametersHeader()}
                                         content={widgetvehicleParametersContent(vehicleFlowParamets.vehicleParameters)}/>
                    </div>
                    <div style={centerStyle}>
                        <WidgetStatistic style={{width:'100%'}} header={widgetNamedExpressionsNewHeader()}
                                         content={widgetNamedExpressionsNewContent(urlNE)}/>
                    </div>
                    <div style={rightStyle}>
                       <WidgetStatistic header={widgetDemandForOrderHeader()}
                                        content={widgetDemandForOrderContent(demandFullfilmentStats.demandForOrder)}/>
                       <WidgetStatistic header={widgetDemandForProductHeader()}
                                        content={widgetDemandForProductContent(demandFullfilmentStats.demandForProduct)}/>
                    </div>
                    {/*<div className="stack">
                     <Stack  direction="row" spacing={2}>
                     <Button  className="buttonNE" onClick={() => setButtonPopupNE(!buttonPopupNE)}>Общая статистика</Button>
                 </Stack>*/}
                    </div>
                 </div>



                 {/*<div className="NEcharts">*/}
                 {/*    <NEChart data = {data.dataSetNE} title = "Гистограмма общей стоимости:"*/}
                 {/*             dataName = "nameru" dataKeyFirst="mun" dataKeySecond="mun" strokeFirst="#00008B" strokeSecond="#218bff"*/}
                 {/*             fillFirst="#00008B" fillSecond="#00BFFF"/>*/}
                 {/*</div>*/}

                 {/*<div className="OMcharts">*/}
                 {/*    <OMChart data = {data.dataSetOM} title = "Гистограмма закупочной стоимости:"*/}
                 {/*             dataName = "nameru" dataKeyFirst="it1" strokeFirst="#9ACD32" fillFirst="#9ACD32"/>*/}
                 {/*</div>*/}

                 {/*<div className="OScharts">*/}
                 {/*    <OSChart data = {data.dataSetOvS} title = "Гистограмма общей статистики:"*/}
                 {/*             dataName = "name" dataKey="value" dataFill="#FA8072" dataStroke = "#FA8072"/>*/}
                 {/*</div>*/}


             {/*    <Popup shown={buttonPopupNE} close={() => {setButtonPopupNE(false);}}>*/}
             {/*    <h3>*/}
             {/*        <div className="NEdatatable">*/}
             {/*            <Datable url={urlNE} columns={columnsNamedExpressions} table={"pageNamedExpression"} setError = {props.setError}/>*/}
             {/*        </div>*/}
             {/*    </h3>*/}
             {/*</Popup>*/}

                     {/*<div className="OMdatatable">*/}
                     {/*    <CompareDatatable marker={'df'} dataSet = { createFinalStatDFDataSet} url = {urlDF} columns = {columnsDemandFulfillmentWithColor}/>*/}
                     {/*</div>*/}


             <Popup shown={buttonPopupOS} close={() => {setButtonPopupOS(false);}}>
                 <h3>
                     <div className="OSdatatable">
                         <Datable url={urlDF}  columns={columnsDemandFulfillmentWithColor} table={"pageDemandFulfillment"} setError = {props.setError}/>
                     </div>
                 </h3>
             </Popup>
                </div>
         </div>

     );
}


export default Infographics;



