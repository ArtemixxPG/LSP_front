import React, {useEffect, useState, Component} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import "./infographics.scss"
import Widget from "../../../components/widget/Widget";
import Widget13 from "../../../components/widget/Widget13";
import Popup from "../../../components/Popup/Popup";

/*const widgetProps = {
    title:"Total Cost",
    value:"1",
    iteration:1
}


const Infographics = () => {
    const [dataExpression, setDataExpression] = useState([{id: "",
        iteration: 0,
        expression_name: "",
        value:0}]
    )

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
        return <Widget title={data.expression_name} value={data.value} iteration = {data.iteration}/>
    })


    return (
        <div className="inforaph">
            <SideBar/>
            <div className="container">
                <NavBar/>
                <div className="widgets">
                    <Widget type = "total_revenue"/> <Widget type = "total_production_cost"/>
                    <Widget type = "total_closing_cost"/>
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
                </div>


                <div className="widgets">
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
                    <Widget type = "carrying_costd"/> <Widget13 type = "inbound_processing_cost13"/>
                    <Widget13 type = "transportation_cost13"/>
                </div>
                <div className="widgets">
                    <Widget13 type = "tariffs13"/> <Widget13 type = "revenue13"/>
                    <Widget13 type = "supply_cost13"/>
                </div>
                <div className="widgets">
                    <Widget13 type = "outbound_processing_cost13"/> <Widget13 type = "initial_cost13"/>
                    <Widget13 type = "closing_cost13"/>
                </div>
                <div className="widgets">
                    <Widget13 type = "penalties13"/> <Widget13 type = "production_cost13"/>
                    <Widget13 type = "other_cost13"/>
                </div>
                <div className="widgets">
                    <Widget13 type = "carrying_cost13"/> <Widget13 type = "objective"/>
                </div>
            </div>
        </div>
    );
};*/

function Infographics() {

     const [buttonPopupNE, setButtonPopupNE] = useState(false);
     const [buttonPopupOM, setButtonPopupOM] = useState(false);
     const [buttonPopupOS, setButtonPopupOS] = useState(false);



     return (
         <div className="inforaph">
             <SideBar/>
             <div className="container">
                 <NavBar/>

                 <div className="named_exp_btn">
                     <button onClick={() => setButtonPopupNE(true)}>Named Expressions</button>
                 </div>
                 <div className="obj_mmb_btn">
                     <button onClick={() => setButtonPopupOM(true)}>Objective Members</button>
                 </div>
                 <div className="over_stats_btn">
                     <button onClick={() => setButtonPopupOS(true)}>Overall Stats</button>
                 </div>



                 <Popup trigger={buttonPopupNE} setTrigger = {setButtonPopupNE}>
                     <h3>
                         <div className="widgets">
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
                         </div>
                     </h3>
                 </Popup>

                 <Popup trigger={buttonPopupOM} setTrigger = {setButtonPopupOM}>
                     <h3>
                         <div className="widgets">
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
                         </div>
                     </h3>
                 </Popup>

                 <Popup trigger={buttonPopupOS} setTrigger = {setButtonPopupOS}>
                     <h3>
                         <div className="widgets">
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
                         </div>
                     </h3>
                 </Popup>
             </div>
         </div>
     );
}

 export default Infographics;


