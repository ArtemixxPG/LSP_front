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
    sonks:[],
    center:[50, 50]
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

const randomZoom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 const YMap = (props) => {

     const [dataObjectsMap, setDataObjectsMap] = useState(dataMapObjs)
     const [prevMapObjects, setPrevMapObjects] = useState({})
     const [onChange, setOnChange] = useState(false)
     const [zoom, setZoom] = useState(3)
     const [center, setCenter] = useState([50, 50])
     const [url, setUrl] = useState(new URL("http:/62.213.30.22:8585/LSP_back-1.0-SNAPSHOT/map/exp"
         ))
     const [firstUpload, setFirstUpload] = useState(true)
     const [dataTable, setDataTable] = useState([])

//      useEffect(()=>{
//
//          let cleanupFunction = false;
//          const fetchData = async () => {
//              try {
//                  url.searchParams.append('experiment', props.experiment)
//                  console.log(url)
//                  const response = await fetch(url, {
//                      mode: 'no-cors'
//                  });
//                  const result = await response.json();
//                  // непосредственное обновление состояния при условии, что компонент не размонтирован
//                  if(!cleanupFunction){
//                      setPrevMapObjects(result)
//                      setDataObjectsMap(createAllMapObjects(result, props.road))
//
//                  }
//              } catch (e) {
//                  console.error(e.message)
//              }
//          };
//
//
//          fetchData().then();
// // функция очистки useEffect
//          return () => cleanupFunction = true;
//
//      }, [props.experiment])

     // useEffect( ()=> {
     //     props.didOnMapTableChange(setOnChange)
     //     if(onChange) {
     //         let mapObjects = createAllMapObjects(prevMapObjects, props.road, props.product)
     //         setDataObjectsMap(mapObjects)
     //         props.setDataTable(dataObjectsMap.sonks)
     //     }
     //     if(props.dataTable.length === 0) {
     //         props.setDataTable(dataObjectsMap.sonks)
     //     }
     //         setOnChange(false)
     // }, [props.onMapTableChange]
     // )

     useEffect( ()=> {

         if(props.products.length !== 0 && props.road === 'Общая' && props.roadEnabled) {
             props.didOnMapTableChange(setOnChange)
             let mapObjects = createAllMapObjects(prevMapObjects, props.road, props.products)
             setDataObjectsMap(mapObjects)
             console.log(mapObjects.sonks)
             props.setDataTable(mapObjects.sonks)
             console.log(props.dataTable)
             setCenter(dataObjectsMap.center)
             setZoom(5)

         }

         }, [JSON.stringify(props.products)]
     )


     const Footer = () => {return <>
     </>}


     useEffect(()=>{

         if(props.road !== 'Общая') {
             props.didOnMapTableChange(setOnChange)
             let mapObjects = createAllMapObjects(prevMapObjects, props.road, props.products)
             setDataObjectsMap(mapObjects)
             console.log(mapObjects.sonks)
             props.setDataTable(mapObjects.sonks)
             console.log(props.dataTable)
             setCenter(dataObjectsMap.center)
             setZoom(5)

         }
     }, [props.road])

     useEffect(
         ()=>{
             setFirstUpload(false)
             let cleanupFunction = false;
             const fetchData = async () => {
                 try {
                     url.searchParams.append('experiment', props.experiment)
                     console.log(url)
                     const response = await fetch(url);
                     const result = await response.json();
                     // непосредственное обновление состояния при условии, что компонент не размонтирован
                     if(!cleanupFunction){
                         if(props.originalMap) {
                             setPrevMapObjects(result)
                             let mapObjects = createAllMapObjects(result, props.road, props.products)
                             setDataObjectsMap(mapObjects)
                             props.setDataTable(mapObjects.sonks)
                             console.log(props.dataTable)
                         }
                     }
                 } catch (e) {
                     console.error(e.message)
                 }
             };


             fetchData().then();
// функция очистки useEffect
             setUrl(new URL("http://62.213.30.22:8585/LSP_back-1.0-SNAPSHOT/map/exp"))
             return () => cleanupFunction = true;
         }, [props.experiment, props.originalMap]
     )

     // useImperativeHandle(ref, () => ({
     //  changeRoad  (road) {
     //
     // },}))

     return(

     <div className="container">

     <YMaps>

         <Map style={{width:document.documentElement.clientWidth, height:document.documentElement.clientHeight-1}}
              state={{ center: center,
                  zoom: zoom,
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