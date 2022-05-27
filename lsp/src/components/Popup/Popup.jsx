import React from "react";
import "./popup.scss"
import Widget from "../widget/Widget";
import Widget13 from "../widget/Widget13";

/*const Popup = () => {

    return (

    )
}*/

function Popup(props) {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
            </div>
        </div>
    ) : "";

}

export default Popup;

