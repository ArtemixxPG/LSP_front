import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./chart.scss"



const Chart = (props) => {

    return (
        <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart width={730} height={250} data={props.data}
                           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorFirst" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorSecond" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey={props.dataName} />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey={props.dataKeyFirst} stroke="#8884d8" fillOpacity={1} fill="url(#colorFirst)" />
                    <Area type="monotone" dataKey={props.dataKeySecond} stroke="#8884d8" fillOpacity={1} fill="url(#colorSecond)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;