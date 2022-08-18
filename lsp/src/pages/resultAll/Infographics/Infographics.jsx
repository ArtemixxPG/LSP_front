import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import "./infographics.scss"
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
import {columnsNamedExpressions, columnsObjectiveMembers, columnsOverallStats} from "../../../HeadersTable";






const Infographics = (props) => {

     const [buttonPopupNE, setButtonPopupNE] = React.useState(false);
     const [buttonPopupOM, setButtonPopupOM] = React.useState(false);
     const [buttonPopupOS, setButtonPopupOS] = React.useState(false);
     const [data, setData] = useState({ dataTable:[], dataTable1:[], dataTable2:[], dataSetNE:[], dataSetOM:[], dataSetOvS:[]});
     const [icon, setIcon] = useState(false)


    useEffect( () => {

            let cleanupFunction = false;
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:8080/results/ne/data');
                    const result = await response.json();

                    // непосредственное обновление состояния при условии, что компонент не размонтирован
                    if(!cleanupFunction){
                        clean(result);
                        setData(result);
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
        for(var propName in obj) {
            for(var propInd in obj[propName]) {
                for(var propKey in obj[propName][propInd]) {
                    if (obj[propName][propInd][propKey] == null) {
                        delete obj[propName][propInd][propKey];
                    }
                    /*if (obj[propName][propInd][propKey].name["carrying_cost"]) {
                        obj[propName][propInd][propKey].name["value"];
                    }*/
                }
            }
        }
        return obj;
    }


    /*const removeEmptyOrNull = (obj) => {
        Object.keys(obj).forEach(k =>
            (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
            (!obj[k] && obj[k] !== undefined) && delete obj[k]
        );
        return obj;
    };*/


    /*const listWidgets = dataExpression.map(data =>{
        return <Widget iteration = {data.iteration} mid = "Наименование операции" title={data.expression_name} value={data.value}/>
    })

    const listWidgetsOM = dataObjective.map(data =>{
        return <Widget iteration = {data.iteration} title={data.objective_member} mid = "Объекты моделирования" value={data.value}/>
    })

    const listWidgetsOS = dataOverall.map(data =>{
        return <Widget iteration = {data.iteration} title={data.expression_name} mid = "Общая статистика" value={data.value}/>
    })*/

     return (
         <div className="inforaph">
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
                 <div className="stack">
                 <Stack  direction="row" spacing={2}>
                     <Button onClick={() => setButtonPopupNE(!buttonPopupNE)}>Наименовании операции</Button>
                     <Button onClick={() => setButtonPopupOM(!buttonPopupOM)}>Объекты моделирования</Button>
                     <Button onClick={() => setButtonPopupOS(!buttonPopupOS)}>Общая статистика</Button>
                 </Stack>
                 </div>


                 <div className="NEcharts">
                     <NEChart data = {data.dataSetNE} title = "Гистограмма общей стоимости:"
                              dataName = "name" dataKeyFirst="it1" dataKeySecond="it2" strokeFirst="#00008B" strokeSecond="#218bff"
                              fillFirst="#00008B" fillSecond="#00BFFF"/>
                 </div>

                 <div className="OMcharts">
                     <OMChart data = {data.dataSetOM} title = "Гистограмма закупочной стоимости:"
                              dataName = "name" dataKeyFirst="it1" strokeFirst="#9ACD32" fillFirst="#9ACD32"/>
                 </div>

                 <div className="OScharts">
                     <OSChart data = {data.dataSetOvS} title = "Гистограмма общей статистики:"
                              dataName = "name" dataKey="value" dataFill="#FA8072" dataStroke = "#FA8072"/*dataKeySecond="closing_cost"
                              dataKeyThird="inbound_processing_cost" dataKeyFourth="outbound_processing_cost"
                              dataKeyFourth="outbound_processing_cost" dataKeyFifth="transportation_cost"
                              dataKeySixth="initial_cost" dataKeySeventh="other_cost" dataKeyEighth="objective"
                              dataKeyNineth="penalties" dataKeyTenth="production_cost" dataKeyEleventh="revenue"
                              dataKeyTvelveth="supply_cost" dataKeyThirteenth="tariffs"  strokeFirst="#00008B"
                               fillSecond="#FF7F50" fillThird="#FFD700" fillFourth="#F0E68C" fillFifth="#8A2BE2"
                              fillSixth="#4169E1" fillSeventh="#228B22" fillEighth="#8B4513" fillNineth="#F4A460" fillTenth="#00FA9A"
                              fillEleventh="#66CDAA" fillTvelveth="#9ACD32" fillThirteenth="#7B68EE"*//>
                 </div>


             <Popup shown={buttonPopupNE} close={() => {setButtonPopupNE(false);}}>
                 <h3>
                     <div className="NEdatatable">
                         <Datable rows={data.dataTable} columns={columnsNamedExpressions}/>
                     </div>
                 </h3>
             </Popup>

             <Popup shown={buttonPopupOM} close={() => {setButtonPopupOM(false);}}>
                 <h3>
                     <div className="OMdatatable">
                         <Datable rows={data.dataTable1} columns={columnsObjectiveMembers}/>
                     </div>
                 </h3>
             </Popup>

             <Popup shown={buttonPopupOS} close={() => {setButtonPopupOS(false);}}>
                 <h3>
                     <div className="OSdatatable">
                         <Datable rows={data.dataTable2} columns={columnsOverallStats}/>
                     </div>
                 </h3>
             </Popup>
                </div>
         </div>

     );
}


export default Infographics;



