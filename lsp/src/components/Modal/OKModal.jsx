import React from 'react';
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import ErrorModal from "./ErrorModal";

const OKModal = (props) => {

    const styleErrorModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        color:'#00FF00'
    };

    return(
        <Modal
            hideBackdrop
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styleErrorModal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    УСПЕШНО!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ErrorIcon/> Операция выполнена!
                </Typography>
            </Box>
        </Modal>
    )

};

export default OKModal;