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
import {forwardRef, useImperativeHandle, useRef, useState} from "react";
import {useEffect} from "react";
import SideBar from "../sidebar/SideBar";
import NavBar from "../navbar/NavBar";

import React from "react";

const mapState = { center: [55.76, 37.64], zoom: 10 };

const dataMapObjs = {
    marks:[],
    lines:[],
    sonks:[]
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
     const [prevMapObjects, setPrevMapObjects] = useState({})
     const [onChange, setOnChange] = useState(false)



     useEffect( ()=> {
         props.didOnMapTableChange(setOnChange)
         if(onChange) {
             let mapObjects = createAllMapObjects(prevMapObjects, props.road)
             setDataObjectsMap(mapObjects)
             props.setDataTable(dataObjectsMap.sonks)
         }
         if(props.dataTable.length === 0) {
             props.setDataTable(dataObjectsMap.sonks)
         }
             setOnChange(false)
     }, [props.didOnMapTableChange]
     )

     useEffect(
         ()=>{
             let cleanupFunction = false;
             const fetchData = async () => {
                 try {
                     const response = await fetch('http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/map');
                     const result = await response.json();
                     // непосредственное обновление состояния при условии, что компонент не размонтирован
                     if(!cleanupFunction){
                         setPrevMapObjects(result)
                         setDataObjectsMap(createAllMapObjects(result, props.road))

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

     // useImperativeHandle(ref, () => ({
     //  changeRoad  (road) {
     //
     // },}))

     return(

     <div className="container">

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