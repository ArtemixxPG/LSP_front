import './nechart.scss'
import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";


const NEChart = (props) => {

    return (
        <div className="ne_chart">
             <div className="title">{props.title}</div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={300} data={props.data}
                           margin={{ top: 12, right: 110, left: 110, bottom: 22 }}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey={props.dataName} interval = {0} hide={true}/>
                    <YAxis yAxisId="left" orientation="left" dataKey="it1" stroke={props.strokeFirst}/>
                    <YAxis yAxisId="right" orientation="right" dataKey="it2" stroke={props.strokeSecond}/>
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey={props.dataKeyFirst} stroke={props.strokeFirst} fill={props.fillFirst} />
                    <Bar yAxisId="right" dataKey={props.dataKeySecond} stroke={props.strokeSecond}  fill={props.fillSecond}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default NEChart;