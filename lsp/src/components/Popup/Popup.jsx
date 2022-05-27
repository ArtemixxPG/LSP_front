import React from "react";
import "./popup.scss"

/*const Popup = () => {

    return (

    )
}*/

function Popup(props) {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";

}

export default Popup;