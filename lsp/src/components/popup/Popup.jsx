import React from "react";
import "./popup.scss"


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

