import './oschart.scss'
import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from "recharts";


const OSChart = (props) => {

    return (
        <div className="os_chart">
            <div className="title">{props.title}</div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={300} data={props.data}
                          margin={{ top: 12, right: 0, left: 70, bottom: 22 }}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey={props.dataName} interval={0} hide={true}/>
                    <YAxis stroke = {props.dataStroke}/>
                    <Tooltip/>
                    <Legend/>
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar name = "показатель" dataKey={props.dataKey} fill={props.dataFill} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default OSChart;