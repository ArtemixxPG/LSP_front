import React from 'react';

import "./widget13.scss"

const Widget13 = ({ type }) => {

    let data;

    switch (type) {
        case "inbound_processing_cost13":
            data = {
                col_right: "Inbound Processing Cost",
                first_val: 0,
                second_val: 0,
            };
            break;
        case "transportation_cost13":
            data = {
                col_right: "Transportation Cost",
                first_val: -5452039.91033025,
                second_val: -5489604.75334261,
            };
            break;
        case "tariffs13":
            data = {
                col_right: "Tariffs",
                first_val: 0,
                second_val: 0,
            };
            break;
        case "revenue13":
            data = {
                col_right: "Revenue",
                first_val: 2.44E+08,
                second_val: 2.44E+08,
            };
            break;
        case "supply_cost13":
            data = {
                col_right: "Supply Cost",
                first_val: -213293724.656666,
                second_val: -213293724.656666,
            };
            break;
        case "outbound_processing_cost13":
            data = {
                col_right: "Outbound Processing Cost",
                first_val: 0,
                second_val: 0,
            };
            break;
        case "initial_cost13":
            data = {
                col_right: "Initial Cost",
                first_val: 0,
                second_val: 0,
            };
            break;
        case "closing_cost13":
            data = {
                col_right: "Closing Cost",
                first_val: 0,
                second_val: 0,
            };
            break;
        case "penalties13":
            data = {
                col_right: "Penalties",
                first_val: 0,
                second_val: 0,
            };
            break;
        case "production_cost13":
            data = {
                col_right: "Production Cost",
                first_val: 0,
                second_val: 0,
            };
            break;
        case "other_cost13":
            data = {
                col_right: "Other Cost",
                first_val: -1825000,
                second_val: -1825000,
            };
            break;
        case "carrying_cost13":
            data = {
                col_right: "Carrying Cost",
                first_val: -8.49832E-09,
                second_val: -8.49832E-09,
            };
            break;
        case "objective":
            data = {
                col_right: "Objective",
                first_val: 0,
                second_val: 0,
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget13">
            <div className="left">
                <span className="col_left">Итерация</span>
                <span className="first_it">1</span>
                <span className="second_it">2</span>
            </div>
            <div className="right">
                <span className="col_right">{data.col_right}</span>
                <span className="first_val">{data.first_val}</span>
                <span className="second_val">{data.second_val}</span>
            </div>
        </div>

    )
};

export default Widget13;
