import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Home from "./pages/home/Home";
import Infographics from "./pages/resultAll/Infographics/Infographics";
import DemandFulfillment from "./pages/resultAll/DemandFulfillment/DemandFulfillment";
import SIM from "./pages/sim/SIM";
import OperatingSites from "./pages/resultAll/OperatingSites/OperatingSites";
import OtherCosts from "./pages/resultAll/OtherCosts/OtherCosts";
import ProductFlow from "./pages/resultAll/ProductFlow/ProductFlow";
import ProductionCost from "./pages/resultAll/ProductionCost/ProductionCost";
import ProductionFlows from "./pages/resultAll/ProductionFlows/ProductionFlows";
import SharedFlowConstraints from "./pages/resultAll/SharedFlowConstraints/SharedFlowConstraints";
import SharedStoragesConstraints from "./pages/resultAll/SharedStoragesConstraints/SharedStoragesConstraints";
import SiteState from "./pages/resultAll/SiteState/SiteState";
import StorageByProduct from "./pages/resultAll/StorageByProduct/StorageByProduct";
import VehicleFlows from "./pages/resultAll/VehicleFlows/VehicleFlows";
import ProductFlows from "./pages/sim/ProductFlows/ProductFlows";
import ShipmentShedule from "./pages/sim/ShipmentShedule/ShipmentShedule";
import TotalCost from "./pages/sim/TotalCost/TotalCost";
import Upload from "./pages/upload/Upload";
import "./style/dark.scss";
import React, {useContext, useState, useEffect} from "react";
import {DarkModeContext} from "./context/darkModeContext";
import CompareDemandFulfillment from "./pages/compare/compare";
import Map from "./pages/map/MapPage";
import OptimizationMenuList from "./components/sidebar/MenuList/OptimizationMenuList/OptimizationMenuList";


function App() {

    const [experiments, setExperiments] = useState([]);
    const [experiment, setExperiment] = useState('Не выбран')
    const [menu, setMenu] = useState(<OptimizationMenuList/>);
    const {darkMode} = useContext(DarkModeContext);
    const [error, setError] = useState(false);
    const [ok, setOk] = useState(false);
    const [loc, setLoc] = useState(false);
    const handleCloseOk = () => setOk(false);

    useEffect(() => {
        document.title = 'ЛСП ТРАНСРЕСУРС';
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/exp');
                const result = await response.json();

                // непосредственное обновление состояния при условии, что компонент не размонтирован
                if(!cleanupFunction) {
                    setExperiments(result);
                }

            } catch (e) {
                console.error(e.message);
            }
        };

        fetchData().then();
        // функция очистки useEffect
        return () => cleanupFunction = true;
    }, []
    )


  return (
      <div className={darkMode ? "app dark":"dark"}>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home menu = {menu} setMenu = {setMenu} experiments = {experiments}/>}/>
                    <Route path="dfilm" element={<DemandFulfillment menu = {menu} setMenu = {setMenu} error = {error}
                                                                    setError = {setError}
                                                                    experiments = {experiments}/>}/>
                    <Route path="opsites" element={<OperatingSites menu = {menu} setMenu = {setMenu} error = {error}
                                                                   setError = {setError}
                                                                   experiments = {experiments}/>}/>
                    <Route path="othcost" element={<OtherCosts menu = {menu} setMenu = {setMenu} error = {error}
                                                               setError = {setError}

                                                               experiments = {experiments}/>}/>
                    <Route path="prdflow" element={<ProductFlow menu = {menu} setMenu = {setMenu} error = {error}
                                                                setError = {setError}
                                                                experiments = {experiments}/>}/>
                    <Route path="pdncost" element={<ProductionCost menu = {menu} setMenu = {setMenu} error = {error}
                                                                   setError = {setError}
                                                                   experiments = {experiments}/>}/>
                    <Route path="pdnflows" element={<ProductionFlows menu = {menu} setMenu = {setMenu} error = {error} setError = {setError}
                                                                     experiments = {experiments}/>}/>
                    <Route path="sfc" element={<SharedFlowConstraints menu = {menu} setMenu = {setMenu} error = {error} setError = {setError}
                                                                      experiments = {experiments}/>}/>
                    <Route path="ssc" element={<SharedStoragesConstraints menu = {menu} setMenu = {setMenu} error = {error} setError = {setError}
                                                                          experiments = {experiments}/>}/>
                    <Route path="sitestate" element={<SiteState menu = {menu} setMenu = {setMenu} error = {error} setError = {setError}
                                                                experiments = {experiments}/>}/>
                    <Route path="sbp" element={<StorageByProduct menu = {menu} setMenu = {setMenu} error = {error} setError = {setError}
                                                                 experiments = {experiments}/>} />
                    <Route path="vf" element={<VehicleFlows menu = {menu} setMenu = {setMenu} error = {error} setError = {setError}
                                                            experiments = {experiments}
                    experiment={experiment}
                    setExperiment={setExperiment}/> }/>
                    <Route path="infograph" element={<Infographics menu = {menu} setMenu = {setMenu} error = {error} setError = {setError}
                                                                   experiments = {experiments}/>}/>
                    {/*<Route path="pfsim" element={<ProductFlows menu = {menu} setMenu = {setMenu} error = {error} setError = {setError}*/}
                    {/*                                           handleClose ={handleClose}*/}
                    {/*                                           experiments = {experiments}/>}/>*/}
                    {/*<Route path="shsh" element={<ShipmentShedule menu = {menu} setMenu = {setMenu} error = {error} setError = {setError}*/}
                    {/*                                             handleClose ={handleClose}*/}
                    {/*                                             experiments = {experiments}/>}/>*/}
                    {/*<Route path="tc" element={<TotalCost menu = {menu} setMenu = {setMenu} error = {error} setError = {setError}*/}
                    {/*                                     handleClose ={handleClose}/>}/>*/}
                    <Route path="upload" element={<Upload menu = {menu} setMenu = {setMenu} ok = {ok}
                                                          setOk = {setOk}
                                                          handleClose ={handleCloseOk} error = {error} setError = {setError}
                                                          experiments = {experiments}/>}/>
                    <Route path="compare" element={<CompareDemandFulfillment menu = {menu} setMenu = {setMenu} error = {error} setError = {setError}
                                                                             experiments = {experiments}/>}/>
                    <Route path="map" element={<Map menu = {menu} setMenu = {setMenu} experiments = {experiments}
                                                    experiment={experiment}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );


}

export default App;
