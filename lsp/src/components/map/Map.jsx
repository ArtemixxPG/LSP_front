import {YMaps, Map, TypeSelector, RulerControl, Placemark, Polyline} from 'react-yandex-maps';
import {resizeHeight, resizeWidth} from "../../ResizeElement";

import "./map.scss"

const mapState = { center: [55.76, 37.64], zoom: 10 };

 const YMap = (props) => (
     <div className="map">
     <YMaps query={{ load: 'control.ZoomControl' }}>
             <Map className="mapload"
                  state={{ center: [50, 50],
                      zoom: 3,
                      controls: ['zoomControl'] }} >
                 <TypeSelector options={{
                     float: 'right'
                 }} />
                 <RulerControl options={{
                     float: 'right'
                 }} />
                 <Placemark geometry={[55.684758, 37.738521]} options={{
                     iconLayout: 'default#image',
                     iconImageHref: 'http://cdn.onlinewebfonts.com/svg/img_95440.png',
                     iconImageSize: [40, 40],
                     iconImageOffset: [-20, -20],
                     iconShape: {
                         type: 'Circle',
                         coordinates: [0, 0],
                         radius: 20
                     }
                 }}/>
                 <Placemark geometry={[53.195878, 50.100202]}  options={{
                     iconLayout: 'default#image',
                     iconImageHref:  'http://cdn.onlinewebfonts.com/svg/img_95440.png',
                     iconImageSize: [40, 40],
                     iconImageOffset: [-20, -20],
                     iconShape: {
                         type: 'Circle',
                         coordinates: [0, 0],
                         radius: 20
                     }
                 }}/>
                 <Polyline geometry={[[55.684758, 37.738521], [53.195878, 50.100202],]} options={{
                     balloonCloseButton: false,
                     strokeColor: '#ff0000',
                     strokeWidth: 4,
                     strokeOpacity: 0.5}}/>
                 <Placemark geometry={[53.155669, 48.474611]} options={{
                     iconLayout: 'default#image',
                     iconImageHref: 'http://cdn.onlinewebfonts.com/svg/img_95440.png',
                     iconImageSize: [40, 40],
                     iconImageOffset: [-20, -20],
                     iconShape: {
                         type: 'Circle',
                         coordinates: [0, 0],
                         radius: 20
                     }
                 }}/>
                 <Polyline geometry={[[53.155669, 48.474611], [53.195878, 50.100202],]} options={{
                     balloonCloseButton: false,
                     strokeColor: '#00ff00',
                     strokeWidth: 4,
                     strokeOpacity: 0.5}}/>
             </Map>
     </YMaps>
     </div>
);

export default YMap;