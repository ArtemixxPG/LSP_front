import React from 'react';

import "./widget.scss"
import VisibilityIcon from '@mui/icons-material/Visibility';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Widget = ( {type} ) => {

    let data;

    switch (type) {
        case "total_revenue":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total Revenue",
                value: 2.44E+08,
            };
            break;
        case "total_production_cost":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total Production Cost",
                value: 0,
            };
            break;
        case "total_closing_cost":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total Closing Cost",
                value: 0,
            };
            break;
        case "total_co2_emission":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total CO2 Emission",
                value: 0,
            };
            break;
        case "total_initial_cost":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total Initial Cost",
                value: 0,
            };
            break;
        case "total_other_cost":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total Other Cost",
                value: 1825000,
            };
            break;
        case "total_supply_cost":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total Supply Cost",
                value: 2.13E+08,
            };
            break;
        case "total_carrying_cost":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total Carrying Cost",
                value: 8.5E-09,
            };
            break;
        case "total_tariffs":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total Tariffs",
                value: 0,
            };
            break;
        case "total_customer_tariffs":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total Customer Tariffs",
                value: 0,
            };
            break;
        case "total_inbound_cost":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total Inbound Cost",
                value: 0,
            };
            break;
        case "total_outbound_cost":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total Outbound Cost",
                value: 0,
            };
            break;
        case "total_transportation_cost":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total Transportation Cost",
                value: 5452040,
            };
            break;
        case "total_penalties":
            data = {
                col_mid: "Наименования операций",
                iteration: 1,
                total: "Total Penalties",
                value: 0,
            };
            break;
        case "total_revenued":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total Revenue",
                value: 2.44E+08,
            };
            break;
        case "total_production_costd":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total Production Cost",
                value: 0,
            };
            break;
        case "total_closing_costd":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total Closing Cost",
                value: 0,
            };
            break;
        case "total_co2_emissiond":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total CO2 Emission",
                value: 0,
            };
            break;
        case "total_initial_costd":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total Initial Cost",
                value: 0,
            };
            break;
        case "total_other_costd":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total Other Cost",
                value: 1825000,
            };
            break;
        case "total_supply_costd":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total Supply Cost",
                value: 2.13E+08,
            };
            break;
        case "total_carrying_costd":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total carrying Cost",
                value: 8.5E-09,
            };
            break;
        case "total_tariffsd":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total Tariffs",
                value: 0,
            };
            break;
        case "total_customer_tariffsd":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total Customer Tariffs",
                value: 0,
            };
            break;
        case "total_inbound_costd":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total Inbound Cost",
                value: 0,
            };
            break;
        case "total_outbound_costd":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total Outbound Cost",
                value: 0,
            };
            break;
        case "total_transportation_costd":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total Transportation Cost",
                value: 5489605,
            };
            break;
        case "total_penaltiesd":
            data = {
                col_mid: "Наименования операций",
                iteration: 2,
                total: "Total Penalties",
                value: 0,
            };
            break;



        case "inbound_processing_cost":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "Inbound Processing Cost",
                value: 0,
            };
            break;
        case "transportation_cost":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "Transportation Cost",
                value: -5452040,
            };
            break;
        case "tariffs12":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "Tariffs",
                value: 0,
            };
            break;
        case "revenue12":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "Revenue",
                value: 2.44E+08,
            };
            break;
        case "supply_cost":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "Supply cost",
                value: -2.1E+08,
            };
            break;
        case "outbound_processing_cost":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "Outbound Processing Cost",
                value: 0,
            };
            break;
        case "initial_cost":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "Initial Cost",
                value: 0,
            };
            break;
        case "closing_cost":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "Closing Cost",
                value: 0,
            };
            break;
        case "co2_emission":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "CO2 Emission",
                value: 0,
            };
            break;
        case "penalties12":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "Penalties",
                value: 0,
            };
            break;
        case "production_cost":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "Production Cost",
                value: 0,
            };
            break;
        case "other_cost":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "Total Penalties",
                value: -1825000,
            };
            break;
        case "customer_tariffs":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "Customer Tariffs",
                value: 0,
            };
            break;
        case "carrying_cost":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 1,
                total: "Carrying Cost",
                value: -8.5E-09,
            };
            break;
        case "inbound_processing_costd":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "Inbound Processing Cost",
                value: 0,
            };
            break;
        case "transportation_costd":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "Transportation Cost",
                value: -5489605,
            };
            break;
        case "tariffs12d":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "Tariffs",
                value: 0,
            };
            break;
        case "revenue12d":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "Revenue",
                value: 2.44E+08,
            };
            break;
        case "supply_costd":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "Supply Cost",
                value: -2.1E+08,
            };
            break;
        case "outbound_processing_costd":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "Outbound processing Cost",
                value: 0,
            };
            break;
        case "initial_costd":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "Initial Cost",
                value: 0,
            };
            break;
        case "closing_costd":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "Closing Cost",
                value: 0,
            };
            break;
        case "co2_emissiond":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "CO2 emission",
                value: 0,
            };
            break;
        case "penalties12d":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "Penalties",
                value: 0,
            };
            break;
        case "production_costd":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "Production Cost",
                value: 0,
            };
            break;
        case "other_costd":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "Other Cost",
                value: -1825000,
            };
            break;
        case "customer_tariffsd":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "Customer Tariff",
                value: 0,
            };
            break;
        case "carrying_costd":
            data = {
                col_mid: "Характеристики объекта",
                iteration: 2,
                total: "Carrying Cost",
                value: -8.5E-09,
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="col_left">Итерация</span>
                <span className="iteration">{data.iteration}</span>
            </div>
            <div className="mid">
                <span className="col_mid">{data.col_mid}</span>
                <span className="total">{data.total}</span>
            </div>
            <div className="right">
                <span className="col_right">Показатели</span>
                <span className="value">{data.value}</span>
            </div>
        </div>
    );
};

export default Widget;