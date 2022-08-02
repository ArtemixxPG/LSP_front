import React, {useEffect, useState} from 'react';
import SideBar from "../../../components/sidebar/SideBar";
import MenuIcon from "@mui/icons-material/Menu";
import "./productflow.scss"

const ProductFlow = (props) => {

    const [data, setData] = useState([]);
    const [rowId, setRowId] = useState();
    const [icon, setIcon] = useState(false)


    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/prdflow');
                const result = await response.json();

                // непосредственное обновление состояния при условии, что компонент не размонтирован
                if(!cleanupFunction) {
                    //setData(result);
                }

            } catch (e) {
                console.error(e.message)
            }
        };


        fetchData().then();
        // функция очистки useEffect
        return () => cleanupFunction = true;
    }, [])

    return (
        <div>
            <div className="openMenu">
                <MenuIcon className="menuButton" onClick={() => setIcon(!icon)}/>
            </div>
            <SideBar
                menu = {props.menu}
                setMenu = {props.setMenu}
                open = {icon}
                close = {()=>setIcon(!icon)}
            />
        </div>
    );
};

export default ProductFlow;