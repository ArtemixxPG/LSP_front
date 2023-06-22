import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ListSubheader from "@mui/material/ListSubheader";


const SubMenuList = (props) => {


    return (
        <List dense={true} sx={{
            width:'100%',
            minWidth:'400px',
            bgcolor:'background.paper',
            color:'#1E90FF'
        }}
              onClose={props.close}
        component='nav'
              aria-labelledby="road-list"
              subheader={
                  <ListSubheader component="div" id="road-list" style={{height:"30px",fontSize:12,color:'#1E90FF'}}>
                      {props.subheader}
                  </ListSubheader>}>
            <ListItemButton disabled={props.disabled} onClick={props.changeStateList}>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.header} />
                {props.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={props.open} timeout="auto" unmountOnExit>
                    {props.listItems}
            </Collapse>
        </List>
    );
};

export default SubMenuList;