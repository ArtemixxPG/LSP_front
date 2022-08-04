import './omchart.scss'
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


const OMChart = (props) => {

    return (
        <div className="om_chart">
            <div className="title">{props.title}</div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={300} data={props.data}
                          margin={{ top: 12, right: 0, left: 110, bottom: 22 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={props.dataName} interval={0} tickSize={10} angle={45} hide={true}/>
                    <YAxis dataKey={props.dataKeyFirst} stroke={props.strokeFirst}/>
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey={props.dataKeyFirst} fill={props.fillFirst} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default OMChart;