import React from 'react';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import InventoryIcon from "@mui/icons-material/Inventory";
import MapIcon from "@mui/icons-material/Map";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const PanelInstruments = () => {




    function SimpleDialog(props) {
        const {onClose, selectedValue, open} = props;

        const handleClose = () => {
            onClose(selectedValue);
        };

        const handleListItemClick = (value) => {
            onClose(value);
        };
    }


    const toolsList = () => {
        return (
            <List>
                <ListItemButton>
                    <li>
                        <Link to="/upload" style={{textDecoration: "none"}}>
                            <UploadFileIcon className="icon"/>
                            <span>Загрузить CSV...</span>
                        </Link>
                    </li>

                </ListItemButton>

                <ListItemButton>
                    <li>
                        <Link to="/compare" style={{textDecoration: "none"}}>
                            <InventoryIcon className="icon"/>
                            <span>Сравнение</span>
                        </Link>
                    </li>

                </ListItemButton>

                <ListItemButton>
                    <li>
                        <Link to="/map" style={{textDecoration: "none"}}>
                            <MapIcon className="icon"/>
                            <span>Карта</span>
                        </Link>
                    </li>
                </ListItemButton>
            </List>
        )
    }






    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
        </Dialog>
    );
};

export default PanelInstruments;