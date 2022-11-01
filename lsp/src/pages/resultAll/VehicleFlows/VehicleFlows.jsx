import React, {useEffect, useState} from 'react';
import './vehicleflows.scss'
import SideBar from "../../../components/sidebar/SideBar";
import NavBar from "../../../components/navbar/NavBar";
import Datatable from "../../../components/datable/NewDatatable/Datatable";
import {columnsVehicleFlows} from "../../../HeadersTable";
import MenuIcon from "@mui/icons-material/Menu";
import ErrorModal from "../../../components/Modal/ErrorModal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TableModal from "../../../components/Modal/Modal";
import ErrorIcon from "@mui/icons-material/Error";

const VehicleFlows = (props) => {

    const [data, setData] = useState({dataTable:[], dataSet:[]})
    const [icon, setIcon] = useState(false)
    const [openErrorModal, setErrorModal] = useState(false)


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


    // const url = 'http://infotrans-logistic.ru:8585/LSP_back-1.0-SNAPSHOT/results/vf/limit?limit=100'

    const url = 'http://localhost:8080/results/vf/limit?limit=50'

    const handleClose = () => props.setError(false)

    const errorModalContent = () => {
        return (
            <Box sx={styleErrorModal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    ОШИБКА!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ErrorIcon/> Проверьте соединение с сервером!
                </Typography>
            </Box>
        )

    }



    return (
        <div className="vehicleflows">
            <div className="openMenu">
                <MenuIcon className="menuButton" onClick={() => setIcon(!icon)}/>
            </div>
            <SideBar
                menu = {props.menu}
                setMenu = {props.setMenu}
                open = {icon}
                close = {()=>setIcon(!icon)}
                experiments={props.experiments}
                setExperiment={props.setExperiment}
            />
                <div className="datatable">
                    <Datatable url = {url} columns = {columnsVehicleFlows} table={"pageVehicleFlows"}
                               setError = {props.setError} />
                </div>

            <TableModal open = {props.error} handleClose={handleClose} header={<div><h2>Ошибка!</h2></div>} content={ <div><Box sx={styleErrorModal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    ОШИБКА!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ErrorIcon/> Проверьте соединение с сервером!
                </Typography>
            </Box>
            </div>}/>
        </div>
    );
};

export default VehicleFlows;