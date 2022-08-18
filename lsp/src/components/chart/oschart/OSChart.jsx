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
                          margin={{ top: 12, right: 0, left: 110, bottom: 22 }}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey={props.dataName} interval={0} hide={true}/>
                    <YAxis stroke = {props.dataStroke}/>
                    <Tooltip/>
                    <Legend/>
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey={props.dataKey} fill={props.dataFill} />
                    {/*<Bar dataKey={props.dataKeySecond} fill={props.fillSecond}/>
                    <Bar dataKey={props.dataKeyThird} fill={props.fillThird}/>
                    <Bar dataKey={props.dataKeyFourth} fill={props.fillFourth}/>
                    <Bar dataKey={props.dataKeyFifth} fill={props.fillFifth}/>
                    <Bar dataKey={props.dataKeySixth} fill={props.fillSixth}/>
                    <Bar dataKey={props.dataKeySeventh} fill={props.fillSeventh}/>
                    <Bar dataKey={props.dataKeyEighth} fill={props.fillEighth}/>
                    <Bar dataKey={props.dataKeyNineth} fill={props.fillNineth}/>
                    <Bar dataKey={props.dataKeyTenth} fill={props.fillTenth}/>
                    <Bar dataKey={props.dataKeyEleventh} fill={props.fillEleventh}/>
                    <Bar dataKey={props.dataKeyTvelveth} fill={props.fillTvelveth}/>
                    <Bar dataKey={props.dataKeyThirteenth} fill={props.fillThirteenth}/>*/}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default OSChart;