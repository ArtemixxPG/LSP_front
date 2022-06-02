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
    ResponsiveContainer,
} from "recharts";

/*const data = [
    {
        name: "Inbound Processing Cost",
        it1: 4000,
        it2: 2400,
        amt: 2400
    },
    {
        name: "Transportation Cost",
        it1: 3000,
        it2: 1398,
        amt: 2210
    },
    {
        name: "Tariffs",
        it1: 2000,
        it2: 9800,
        amt: 2290
    },
    {
        name: "Revenue",
        it1: 2780,
        it2: 3908,
        amt: 2000
    },
    {
        name: "Supply Cost",
        it1: 1890,
        it2: 4800,
        amt: 2181
    },
    {
        name: "Outbound Processing Cost",
        it1: 2390,
        it2: 3800,
        amt: 2500
    },
    {
        name: "Initial Cost",
        it1: 3490,
        it2: 4300,
        amt: 2100
    },
    {
        name: "Closing Cost",
        it1: 3000,
        it2: 2700,
        amt: 2700
    },
    {
        name: "CO2 Emission",
        it1: 5000,
        it2: 3400,
        amt: 2900
    },
    {
        name: "Penalties",
        it1: 3800,
        it2: 2800,
        amt: 2100
    },
    {
        name: "Production Cost",
        it1: 3200,
        it2: 2200,
        amt: 2000
    },
    {
        name: "Other Cost",
        it1: 3600,
        it2: 3000,
        amt: 2000
    },
    {
        name: "Customer Tariffs",
        it1: 4200,
        it2: 3500,
        amt: 2700
    },
    {
        name: "Carrying Cost",
        it1: 3300,
        it2: 2200,
        amt: 2600
    }
];*/


const OMChart = (props) => {

    return (
        <div className="om_chart">
            <div className="title">Гистограмма закупочной стоимости:</div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={300} data={props.data}
                          margin={{ top: 12, right: 30, left: 20, bottom: 22 }}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey={props.dataName}/>
                    <YAxis yAxisId="left" orientation="left" dataKey="it#1" stroke="#8B0000"/>
                    <YAxis yAxisId="right" orientation="right" dataKey="it#2" stroke="#DB7093"/>
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey={props.dataKeyFirst} stroke="#8B0000" fill="#8B0000" />
                    <Bar yAxisId="right" dataKey={props.dataKeySecond} stroke="#DB7093"  fill="#DB7093"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default OMChart;