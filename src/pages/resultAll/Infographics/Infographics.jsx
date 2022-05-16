import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import "./infographics.scss"
import Widget from "../../../components/widget/Widget";

const widgetProps = {
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
                    if(!cleanupFunction){ setDataExpression(result);

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
                    {listWidgets}
                </div>
            </div>
        </div>
    );
};

export default Infographics;