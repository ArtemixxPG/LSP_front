import {
    YMaps,
    Map,
    TypeSelector,
    RulerControl,
    Placemark,
    Polyline,
    ObjectManager,
    ZoomControl
} from 'react-yandex-maps';
import {resizeHeight, resizeWidth} from "../../ResizeElement";

import "./map.scss"
import {createAllMapObjects, createMapObj, mapPolylines} from "./mapScript";
import {useRef, useState} from "react";
import {useEffect} from "react";
import SideBar from "../sidebar/SideBar";
import NavBar from "../navbar/NavBar";

import React from "react";

const mapState = { center: [55.76, 37.64], zoom: 10 };

const dataMapObjs = {
    marks:[],
    lines:[]
}

function getWindowDimensions() {
   let c_height = document.documentElement.clientHeight
    const {innerWidth: width, innerHeight: height, outerHeight: o_height} = window;
    return {
        width,
        height,
        o_height,
        c_height
    }
}
 function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

 const YMap = (props) => {

     const [dataObjectsMap, setDataObjectsMap] = useState(dataMapObjs)
     const dataObjectsMapRef = useRef(dataObjectsMap)


     useEffect(()=>{
         dataObjectsMapRef.current = dataMapObjs
     }, [dataMapObjs])

     useEffect(
         ()=>{
             let cleanupFunction = false;
             const fetchData = async () => {
                 try {
                     const response = await fetch('http://localhost:8080/map');
                     const result = await response.json();
                     // непосредственное обновление состояния при условии, что компонент не размонтирован
                     if(!cleanupFunction){
                         console.log(result)
                         setDataObjectsMap(createAllMapObjects(result))
                     }

                 } catch (e) {
                     console.error(e.message)
                 }
             };


             fetchData().then();
// функция очистки useEffect
             return () => cleanupFunction = true;
         }, []
     )


     return(

     <div className="container">

         {/*<SideBar/>*/}
     <YMaps>

             <Map style={{width:document.documentElement.clientWidth, height:document.documentElement.clientHeight-1}}
                  state={{ center: [50, 50],
                      zoom: 3,
                       }}
                  options={{
                      minZoom:3
                  }}>
                 <ZoomControl options={{
                     position:{
                         right:10,
                         top:108
                     }
                 }} />
                 <TypeSelector options={{
                     float: 'right'
                 }} />

                 <RulerControl options={{
                     float: 'right'
                 }} />

                 <ObjectManager options={{
                     gridSize: 32
                 }} objects={{
                     openBalloonOnClick: true,
                     preset: 'islands#greenDotIcon'
                 }}  features={dataObjectsMap.marks} modules={['objectManager.addon.objectsBalloon', 'objectManager.addon.objectsHint']} />

                 <ObjectManager  features={dataObjectsMap.lines}  />

             </Map>
     </YMaps>

     </div>
     )
 }

export default YMap;