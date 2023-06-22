import React from 'react';


const stylesHeader = {

}

const stylesContent = {

}

const bodyWidget = {
    '-webkit-box-shadow': '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
'box-shadow': '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
    width:'100%',
    padding: '15px 15px 15px'
}

const WidgetStatistic = (props) => {
    return (
        <div style={bodyWidget}>
            <div style={stylesHeader}>
                {props.header}
            </div>
            <div style={stylesContent}>
                {props.content}
            </div>
        </div>
    );
};

export default WidgetStatistic;