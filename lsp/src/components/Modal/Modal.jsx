import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';

const TableModal = (props) => {
    const styleModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 850,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,

    };

    const styleModalWithHeight = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: props.height,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,

    };


    const [style, setStyle] = useState(styleModal)

    useEffect(()=>{
        if(props.height){
            setStyle(styleModalWithHeight)
        }
    },[])

    return(
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {props.header}
                {props.content}
            </Box>
        </Modal>
    )
};

export default TableModal;