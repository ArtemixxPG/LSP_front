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

/*const data = [
    {
        name: "Total Revenue",
        it1: 4000,
        it2: 2400,
        amt: 2400
    },
    {
        name: "Total Production Cost",
        it1: 3000,
        it2: 1398,
        amt: 2210
    },
    {
        name: "Total Closing Cost",
        it1: 2000,
        it2: 9800,
        amt: 2290
    },
    {
        name: "Total CO2 Emission",
        it1: 2780,
        it2: 3908,
        amt: 2000
    },
    {
        name: "Total Initial Cost",
        it1: 1890,
        it2: 4800,
        amt: 2181
    },
    {
        name: "Total Other Cost",
        it1: 2390,
        it2: 3800,
        amt: 2500
    },
    {
        name: "Total Supply Cost",
        it1: 3490,
        it2: 4300,
        amt: 2100
    },
    {
        name: "Total Carrying Cost",
        it1: 3000,
        it2: 2700,
        amt: 2700
    },
    {
        name: "Total Tariffs",
        it1: 5000,
        it2: 3400,
        amt: 2900
    },
    {
        name: "Total Customer Tariffs",
        it1: 3800,
        it2: 2800,
        amt: 2100
    },
    {
        name: "Total Inbound Cost",
        it1: 3200,
        it2: 2200,
        amt: 2000
    },
    {
        name: "Total Outbound Cost",
        it1: 3600,
        it2: 3000,
        amt: 2000
    },
    {
        name: "Total Transportation Cost",
        it1: 4200,
        it2: 3500,
        amt: 2700
    },
    {
        name: "Total Penalties",
        it1: 3300,
        it2: 2200,
        amt: 2600
    }
];*/


const NEChart = (props) => {

    return (
        <div className="ne_chart">
             <div className="title">Гистограмма общей стоимости:</div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={300} data={props.data}
                           margin={{ top: 12, right: 30, left: 20, bottom: 22 }}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey={props.dataName}/>
                    <YAxis yAxisId="left" orientation="left" dataKey="it#1" stroke="#218bff"/>
                    <YAxis yAxisId="right" orientation="right" dataKey="it#2" stroke="#483D8B"/>
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey={props.dataKeyFirst} stroke="#218bff" fill="#218bff" />
                    <Bar yAxisId="right" dataKey={props.dataKeySecond} stroke="#483D8B"  fill="#483D8B"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default NEChart;