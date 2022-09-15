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

    var numeral = require('numeral');
    const [buttonPopupNE, setButtonPopupNE] = React.useState(false);
    const [buttonPopupOM, setButtonPopupOM] = React.useState(false);
    const [buttonPopupOS, setButtonPopupOS] = React.useState(false);
    const [data, setData] = useState({
        dataTable: [],
        dataTable1: [],
        dataTable2: [],
        dataSetNE: [],
        dataSetOM: [],
        dataSetOvS: []
    });
    const [icon, setIcon] = useState(false)

    const urlNE = (page) => {
        return 'http://localhost:8080/results/datasets/named_expressions?limit=' + (page + 1) * 5 + '&offset=' + page * 1
    }



    useEffect(() => {

            let cleanupFunction = false;
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:8080/results/ne/data');
                    const result = await response.json();


                    // непосредственное обновление состояния при условии, что компонент не размонтирован
                    if (!cleanupFunction) {
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
              />
                <div className="content">
                    {/*<div className="stack">
                     <Stack  direction="row" spacing={2}>
                     <Button  className="buttonNE" onClick={() => setButtonPopupNE(!buttonPopupNE)}>Общая статистика</Button>
                 </Stack>*/}
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


                 {/*<Popup shown={buttonPopupNE} close={() => {setButtonPopupNE(false);}}>
                 <h3>
                     <div className="NEdatatable">
                         <Datable url={urlNE} columns={columnsNamedExpressions} table={"pageNamedExpression"} setError = {props.setError}/>
                     </div>
                 </h3>
             </Popup>

             <Popup shown={buttonPopupOM} close={() => {setButtonPopupOM(false);}}>
                 <h3>
                     <div className="OMdatatable">
                         <Datable url={urlOM} columns={columnsObjectiveMembers} table={"pageObjectiveMember"} setError = {props.setError}/>
                     </div>
                 </h3>
             </Popup>

             <Popup shown={buttonPopupOS} close={() => {setButtonPopupOS(false);}}>
                 <h3>
                     <div className="OSdatatable">
                         <Datable url={urlOvS} columns={columnsOverallStats} table={"pageOverallStats"} setError = {props.setError}/>
                     </div>
                 </h3>
             </Popup>
                </div>*/}
         </div>
         </div>

     );
}


export default Infographics;



