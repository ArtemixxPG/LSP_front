import React, {useContext, useState} from 'react';

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

    const [typeExp, setTypeExp] = useState("");

    const handleSubmit=(e) =>{
        console.log('Ваш любимый вкус: ' + typeExp);
        e.preventDefault();
    }

    const handleChange=(e) => {
        setTypeExp( e.target.value);
    }

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">ЛСП ТРАНСРЕСУРС</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>

                    <form onSubmit={handleSubmit}>
                        <label className="search">
                            Выберите эксперимент:
                            <select value={typeExp} onChange={handleChange}>
                                <option value="#1">#1</option>
                                <option value="#2">#2</option>
                                <option value="#3">#3</option>
                                <option value="#4">#4</option>
                            </select>
                        </label>
                    </form>

                    <p className="title">RESULT ALL</p>

                    <li>
                        <Link to="/sitestate" style={{textDecoration:"none"}}>
                        <InventoryIcon className="icon"/>
                        <span>Приход товара</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/opsites" style={{textDecoration:"none"}}>
                        <AirlineStopsIcon className="icon"/>
                        <span>Движение объекта</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/othcost" style={{textDecoration:"none"}}>
                        <MoneyIcon className="icon"/>
                        <span>Прочие расходы</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/opsites" style={{textDecoration:"none"}}>
                        <MonetizationOnIcon className="icon"/>
                        <span>Операционая стоимость</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sbp" style={{textDecoration:"none"}}>
                        <WarehouseIcon className="icon"/>
                        <span>Хранилища товаров</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/pdncost" style={{textDecoration:"none"}}>
                        <AttachMoneyIcon className="icon"/>
                        <span>Себестоимость продукции</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/pdnflows" style={{textDecoration:"none"}}>
                        <BuildIcon className="icon"/>
                        <span>Производственный поток</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sfc" style={{textDecoration:"none"}}>
                        <RunningWithErrorsIcon className="icon"/>
                        <span>Общие ограничения производства</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ssc" style={{textDecoration:"none"}}>
                        <AssignmentLateIcon className="icon"/>
                        <span>Общие ограничения хранения</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dfilm" style={{textDecoration:"none"}}>
                        <FactCheckIcon className="icon"/>
                        <span>Реализация спроса</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/vf" style={{textDecoration:"none"}}>
                        <DirectionsRailwayFilledIcon className="icon"/>
                        <span>Траспортный поток</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/infograph" style={{textDecoration:"none"}}>
                        <AutoGraphIcon className="icon"/>
                        <span>Инфографика</span>
                        </Link>
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
                        <Link to="/tc" style={{textDecoration:"none"}}>
                        <CreditScoreIcon className="icon"/>
                        <span>Полная стоимость</span>
                        </Link>
                    </li>

                    <p className="title">SERVICE</p>
                    <li>
                        <Link to="/upload" style={{textDecoration:"none"}}>
                        <UploadFileIcon className="icon"/>
                        <span>Загрузить CSV...</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/compare" style={{textDecoration:"none"}}>
                            <InventoryIcon className="icon"/>
                            <span>Сравнение</span>
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