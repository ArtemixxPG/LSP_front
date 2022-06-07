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
import "./style/dark.scss"
import {useContext, useState} from "react";
import {DarkModeContext} from "./context/darkModeContext";
import CompareDemandFulfillment from "./pages/compare/compare";

function App() {

    const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark":"dark"}>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="dfilm" element={<DemandFulfillment/>}/>
                    <Route path="opsites" element={<OperatingSites/>}/>
                    <Route path="othcost" element={<OtherCosts/>}/>
                    <Route path="prdflow" element={<ProductFlow/>}/>
                    <Route path="pdncost" element={<ProductionCost/>}/>
                    <Route path="pdnflows" element={<ProductionFlows/>}/>
                    <Route path="sfc" element={<SharedFlowConstraints/>}/>
                    <Route path="ssc" element={<SharedStoragesConstraints/>}/>
                    <Route path="sitestate" element={<SiteState/>}/>
                    <Route path="sbp" element={<StorageByProduct/>}/>
                    <Route path="vf" element={<VehicleFlows/>}/>
                    <Route path="infograph" element={<Infographics/>}/>
                    <Route path="pfsim" element={<ProductFlows/>}/>
                    <Route path="shsh" element={<ShipmentShedule/>}/>
                    <Route path="tc" element={<TotalCost/>}/>
                    <Route path="upload" element={<Upload/>}/>
                    <Route path="compare" element={<CompareDemandFulfillment/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
