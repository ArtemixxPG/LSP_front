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
    Line,
    ResponsiveContainer,
} from "recharts";


const NEChart = (props) => {

    return (
        <div className="ne_chart">
             <div className="title">{props.title}</div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={300} data={props.data}
                           margin={{ top: 12, right: 60, left: 60, bottom: 22 }}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey={props.dataName} interval = {0} hide={true}/>
                    <YAxis yAxisId="left" orientation="left" dataKey="mun" hide={false} stroke={props.strokeFirst}/>
                    <YAxis yAxisId="right" orientation="right" dataKey="mun" stroke={props.strokeSecond}/>
                    <Tooltip />
                    <Legend verticalAlign="bottom" />
                    <Bar name = "Result March NO KP" yAxisId="left" dataKey={props.dataKeyFirst} stroke={props.strokeFirst} fill={props.fillFirst} />
                    <Bar name = "Result March with DC f,s-dc KP" yAxisId="right" dataKey={props.dataKeySecond} stroke={props.strokeSecond}  fill={props.fillSecond}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default NEChart;