import React from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";




const ExperimentList = (props) => {

    const handleChangeExperiment=(event: React.MouseEvent<HTMLDivElement, MouseEvent>, experimentName:string) => {
        event.preventDefault();
        props.setExperiment(experimentName);
    }

    return (
        <div className="expList">
            {props.experiments.map((item, index)=>{
                return (
                    <div key={index}>
                        <ListItemButton onClick={(event)=>handleChangeExperiment(event, item)}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                        <Divider/>
                    </div>
                )
            })}
        </div>
    );
};

export default ExperimentList;