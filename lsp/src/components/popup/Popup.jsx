import React from "react";
import ReactDOM from "react-dom";
import "./popup.scss"
import Widget from "../widget/Widget";
import Widget13 from "../widget/Widget13";

/*const popup = () => {

    return (

    )
}*/

function Popup({shown, close, children}) {

    return shown ? (
        <div className="popup" onClick={() => { close(); }}>
            <div className="popup-inner" onClick={e => { e.stopPropagation(); }}>
                {children}
            </div>
        </div>
    ) : null;

}

export default Popup;

