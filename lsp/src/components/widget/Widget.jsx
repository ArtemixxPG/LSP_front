import React from 'react';

import "./widget.scss"
import VisibilityIcon from '@mui/icons-material/Visibility';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Widget = (props) => {
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{props.title}</span>
                <span className="value">{props.value}</span>
                <TaskAltIcon className="icon"/>
            </div>
            <div className="right">
                <VisibilityIcon className="icon"/>
                {props.iteration}
            </div>
        </div>
    );
};

export default Widget;