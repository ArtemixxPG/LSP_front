import React, {useContext} from 'react';

import "./sidebar.scss"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TableViewIcon from '@mui/icons-material/TableView';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InventoryIcon from '@mui/icons-material/Inventory';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import MoneyIcon from '@mui/icons-material/Money';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BuildIcon from '@mui/icons-material/Build';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DirectionsRailwayFilledIcon from '@mui/icons-material/DirectionsRailwayFilled';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

import {Link} from "react-router-dom"
import {DarkModeContext} from "../../context/darkModeContext";


const SideBar = () => {
    const {dispatch} = useContext(DarkModeContext)
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">ИНФОТРАНС</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">RESULT ALL</p>

                    <li>
                        <InventoryIcon className="icon"/>
                        <span>Приход товара</span>
                    </li>

                    <li>
                        <AirlineStopsIcon className="icon"/>
                        <span>Движение объекта</span>
                    </li>

                    <li>
                        <MoneyIcon className="icon"/>
                        <span>Прочие расходы</span>
                    </li>

                    <li>
                        <MonetizationOnIcon className="icon"/>
                        <span>Операционая стоимость</span>
                    </li>
                    <li>
                        <WarehouseIcon className="icon"/>
                        <span>Хранилища товаров</span>
                    </li>
                    <li>
                        <AttachMoneyIcon className="icon"/>
                        <span>Себестоимость продукции</span>
                    </li>
                    <li>
                        <BuildIcon className="icon"/>
                        <span>Производственный поток</span>
                    </li>
                    <li>
                        <RunningWithErrorsIcon className="icon"/>
                        <span>Общие ограничения производства</span>
                    </li>
                    <li>
                        <AssignmentLateIcon className="icon"/>
                        <span>Общие ограничения хранения</span>
                    </li>
                    <li>
                        <Link to="/dfilm" style={{textDecoration:"none"}}>
                        <FactCheckIcon className="icon"/>
                        <span>Реализация спроса</span>
                        </Link>
                    </li>
                    <li>
                        <DirectionsRailwayFilledIcon className="icon"/>
                        <span>Траспортный поток</span>
                    </li>
                    <li>
                        <AutoGraphIcon className="icon"/>
                        <span>Инфографика</span>
                    </li>
                    <p className="title">SIM</p>
                    <li>
                        <Link to="/pfsim" style={{textDecoration:"none"}}>
                        <ProductionQuantityLimitsIcon className="icon"/>
                        <span>Товарный поток</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/shsh" style={{textDecoration:"none"}}>
                        <ListAltIcon className="icon"/>
                        <span>Расписание отгрузки</span>
                        </Link>
                    </li>

                    <li>
                        <CreditScoreIcon className="icon"/>
                        <span>Полная стоимость</span>
                    </li>

                    <p className="title">SERVICE</p>
                    <li>
                        <Link to="/upload" style={{textDecoration:"none"}}>
                        <UploadFileIcon className="icon"/>
                        <span>Загрузить CSV...</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
            </div>
        </div>
    );
};

export default SideBar;