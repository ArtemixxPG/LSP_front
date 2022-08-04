import React from 'react';

import "./widget.scss"
import VisibilityIcon from '@mui/icons-material/Visibility';
import TaskAltIcon from '@mui/icons-material/TaskAlt';


const Widget = (props) => {

    return (
        <div className="widget">
            <div className="left">
                <VisibilityIcon className="icon"/>
                {props.iteration}
            </div>
            <div className="mid">{props.mid}
                <span className="title">{props.title}</span>
            </div>
            <div className="right">
                <TaskAltIcon className="icon"/>
                <span className="value">{props.value}</span>
            </div>

        </div>
    );
};




    /*return (
        <div className="widget">
            <div className="left">
                <span className="col_left">Итерация</span>
                <span className="iteration">{data.iteration}</span>
            </div>
            <div className="mid">
                <span className="col_mid">{data.col_mid}</span>
                <span className="total">{data.total}</span>
            </div>
            <div className="right">
                <span className="col_right">Показатели</span>
                <span className="value">{data.value}</span>
            </div>
        </div>
    );
};*/

export default Widget;