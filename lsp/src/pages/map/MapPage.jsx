import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import React, {useState} from "react";
import YMap from "../../components/map/Map";

import "./mappage.scss"
import {resizeHeight, resizeWidth} from "../../ResizeElement";

const Map = () => {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)



    return (


        <div className="mappage">

            <SideBar className="side"/>



            <div className="container">
                <NavBar/>
                <YMap/>


            </div>
        </div>
    );
};

export default Map