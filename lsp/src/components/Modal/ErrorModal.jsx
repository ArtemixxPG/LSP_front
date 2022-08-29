import React from 'react';
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";

const ErrorModal = (props) => {

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
        color:'#ff0000'
    };

        return(
            <Modal
                hideBackdrop
                open={props.error}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
               >
                <Box sx={styleErrorModal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        ОШИБКА!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <ErrorIcon/> Проверьте соединение с сервером!
                    </Typography>
                </Box>
            </Modal>
        )

};

export default ErrorModal;