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
                          margin={{ top: 12, right: 30, left: 20, bottom: 22 }}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis />
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar /*dataKey={props.dataKeySecond} stroke={props.strokeSecond}*/ />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default OSChart;