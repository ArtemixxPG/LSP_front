import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import "./infographics.scss"
import Widget from "../../../components/widget/Widget";
import Widget13 from "../../../components/widget/Widget13";
import Popup from "../../../components/popup/Popup";
import NEChart from "../../../components/chart/nechart/NEChart";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Datable from "../../../components/datable/Datable";
import {columnsNamedExpressions, columnsObjectiveMembers, columnsOverallStats} from "../../../HeadersTable";




function Infographics() {

     const [buttonPopupNE, setButtonPopupNE] = React.useState(false);
     const [buttonPopupOM, setButtonPopupOM] = React.useState(false);
     const [buttonPopupOS, setButtonPopupOS] = React.useState(false);

    /*const [dataNE, setDataNE] = useState([]);
    const [rowIdNE, setRowIdNE] = useState();

    const [dataOM, setDataOM] = useState([]);
    const [rowIdOM, setRowIdOM] = useState();

    const [dataOS, setDataOS] = useState([]);
    const [rowIdOS, setRowIdOS] = useState();*/

    const [dataExpression, setDataExpression] = useState([{id: "",
        iteration: 0,
        expression_name: "",
        value:0}])

    const [dataObjective, setDataObjective] = useState([{id: "",
        iteration: 0,
        objective_member: "",
        value:0}])

    const [dataOverall, setDataOverall] = useState([{id: "",
        iteration: 0,
        ipc_overall: 0,
        tc_overall: 0,
        tariffs_overall: 0,
        revenue_overall: 0,
        sc_overall: 0,
        opc_overall: 0,
        ic_overall: 0,
        cc_overall: 0,
        penalties_overall: 0,
        pc_overall: 0,
        oc_overall: 0,
        crc_overall: 0,
        objective_overall: 0}])


    useEffect( () => {
            let cleanupFunction = false;
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:8080/ne?iteration=1');
                    const result = await response.json();

                    // непосредственное обновление состояния при условии, что компонент не размонтирован
                    if(!cleanupFunction){
                        setDataExpression(result);
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

    const listWidgets = dataExpression.map(data =>{
        return <Widget iteration = {data.iteration} mid = "Наименование операции" title={data.expression_name} value={data.value}/>
    })

    const listWidgetsOM = dataObjective.map(data =>{
        return <Widget iteration = {data.iteration} title={data.objective_member} mid = "Объекты моделирования" value={data.value}/>
    })

    const listWidgetsOS = dataOverall.map(data =>{
        return <Widget iteration = {data.iteration} title={data.expression_name} mid = "Общая статистика" value={data.value}/>
    })


     return (
         <div className="inforaph">
              <SideBar/>
             <div className="container">
                 <NavBar/>
                 <div className="stack">
                 <Stack  direction="row" spacing={2}>
                     <Button onClick={() => setButtonPopupNE(!buttonPopupNE)}>Наименовании операции</Button>
                     <Button onClick={() => setButtonPopupOM(!buttonPopupOM)}>Объекты моделирования</Button>
                     <Button onClick={() => setButtonPopupOS(!buttonPopupOS)}>Общая статистика</Button>
                 </Stack>
                 </div>


                 <div className="NEcharts">
                     <NEChart data = {dataExpression.dataSet} title = "Гистограмма общей стоимости:"
                              dataName = "name" dataKeyFirst="it#1" dataKeySecond="it#2" strokeFirst="#218bff" strokeSecond="#483D8B"
                              fillFirst="#00008B" fillSecond="#00BFFF"/>
                 </div>

                 <div className="OMcharts">
                     <NEChart data = {dataExpression.dataSet} title = "Гистограмма закупочной стоимости:"
                              dataName = "name" dataKeyFirst="it#1" dataKeySecond="it#2" strokeFirst="#218bff" strokeSecond="#483D8B"
                              fillFirst="#8B0000" fillSecond="#F08080"/>
                 </div>

                 <div className="OScharts">
                     <NEChart data = {dataExpression.dataSet} title = "Гистограмма общей статистики:"
                              dataName = "name" dataKeyFirst="it#1" dataKeySecond="it#2" strokeFirst="#218bff" strokeSecond="#483D8B"
                              fillFirst="#800080" fillSecond="#9370DB"/>
                 </div>
             </div>


             <Popup shown={buttonPopupNE} close={() => {setButtonPopupNE(false);}}>
                 <h3>
                     <div className="widgets">
                         {listWidgets}
                     </div>
                     {/*<div className="widgets">
                         <Widget type = "total_co2_emission"/> <Widget type = "total_initial_cost"/>
                         <Widget type = "total_other_cost"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "total_co2_emission"/> <Widget type = "total_initial_cost"/>
                         <Widget type = "total_other_cost"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "total_supply_cost"/> <Widget type = "total_carrying_cost"/>
                         <Widget type = "total_tariffs"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "total_customer_tariffs"/> <Widget type = "total_inbound_cost"/>
                         <Widget type = "total_outbound_cost"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "total_transportation_cost"/> <Widget type = "total_penalties"/>
                         <Widget type = "total_revenued"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "total_production_costd"/> <Widget type = "total_closing_costd"/>
                         <Widget type = "total_co2_emissiond"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "total_initial_costd"/> <Widget type = "total_other_costd"/>
                         <Widget type = "total_supply_costd"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "total_carrying_costd"/> <Widget type = "total_tariffsd"/>
                         <Widget type = "total_customer_tariffsd"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "total_inbound_costd"/> <Widget type = "total_outbound_costd"/>
                         <Widget type = "total_transportation_costd"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "total_penaltiesd"/>
                     </div>*/}
                     {/*<div className="datatableNE">
                         <Datable rows = {dataNE}
                                  columns = {columnsNamedExpressions}
                                  new_id = {rowIdNE}
                                  pageSize={5}
                                  rowsPerPageOptions={5}
                                  />
                     </div>*/}

                 </h3>
             </Popup>

             <Popup shown={buttonPopupOM} close={() => {setButtonPopupOM(false);}}>
                 <h3>
                     {/*<div className="widgets">
                         <Widget type = "inbound_processing_cost"/> <Widget type = "transportation_cost"/>
                         <Widget type = "tariffs12"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "revenue12"/> <Widget type = "supply_cost"/>
                         <Widget type = "outbound_processing_cost"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "initial_cost"/> <Widget type = "closing_cost"/>
                         <Widget type = "co2_emission"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "penalties12"/> <Widget type = "production_cost"/>
                         <Widget type = "other_cost"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "customer_tariffs"/> <Widget type = "carrying_cost"/>
                         <Widget type = "inbound_processing_costd"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "transportation_costd"/> <Widget type = "tariffs12d"/>
                         <Widget type = "revenue12d"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "supply_costd"/> <Widget type = "outbound_processing_costd"/>
                         <Widget type = "initial_costd"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "closing_costd"/> <Widget type = "co2_emissiond"/>
                         <Widget type = "penalties12d"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "production_costd"/> <Widget type = "other_costd"/>
                         <Widget type = "customer_tariffsd"/>
                     </div>
                     <div className="widgets">
                         <Widget type = "carrying_costd"/>
                     </div>*/}
                     {/*<div className="datatableOM">
                         <Datable rows = {dataOM}
                                  columns = {columnsObjectiveMembers}
                                  new_id = {rowIdOM}
                                  pageSize={5}
                                  rowsPerPageOptions={5}
                         />
                     </div>*/}
                     <div className="widgets">
                         {listWidgetsOM}
                     </div>
                 </h3>
             </Popup>

             <Popup shown={buttonPopupOS} close={() => {setButtonPopupOS(false);}}>
                 <h3>
                     {/*<div className="widgets">
                         <Widget13 type = "inbound_processing_cost13"/> <Widget13 type = "transportation_cost13"/>
                         <Widget13 type = "tariffs13"/>
                     </div>
                     <div className="widgets">
                         <Widget13 type = "revenue13"/> <Widget13 type = "supply_cost13"/>
                         <Widget13 type = "outbound_processing_cost13"/>
                     </div>
                     <div className="widgets">
                         <Widget13 type = "initial_cost13"/> <Widget13 type = "closing_cost13"/>
                         <Widget13 type = "penalties13"/>
                     </div>
                     <div className="widgets">
                         <Widget13 type = "production_cost13"/> <Widget13 type = "other_cost13"/>
                         <Widget13 type = "carrying_cost13"/>
                     </div>
                     <div className="widgets">
                         <Widget13 type = "objective"/>
                     </div>*/}
                     {/*<div className="datatableOS">
                         <Datable rows = {dataOS}
                                  columns = {columnsOverallStats}
                                  new_id = {rowIdOS}
                                  pageSize={5}
                                  rowsPerPageOptions={5}
                         />
                     </div>*/}
                 </h3>
             </Popup>
         </div>

     );
}


export default Infographics;



