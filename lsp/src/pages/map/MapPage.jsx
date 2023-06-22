//imports React.js
import React, {useEffect, useRef, useState} from "react";

//imports Yandex Map API
import YMap from "../../components/map/Map";

//imports Material MUI
import MenuIcon from '@mui/icons-material/Menu';
import Alert from "@mui/material/Alert";
import TrainIcon from '@mui/icons-material/Train';
import IconButton from "@mui/material/IconButton";
import CheckIcon from '@mui/icons-material/Check';
import LensIcon from '@mui/icons-material/Lens';
import SettingsIcon from '@mui/icons-material/Settings';
import TableViewIcon from '@mui/icons-material/TableView';
import ListItemButton from '@mui/material/ListItemButton';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import PodcastsIcon from '@mui/icons-material/Podcasts';
import ScienceIcon from '@mui/icons-material/Science';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';



//imports Components
import SideBar from "../../components/sidebar/SideBar";
import Modal from "../../components/Modal/Modal";
import MapTable from "../../components/datable/NewDatatable/MapTable";
import SubMenuList from "../../components/List/RoadList/SubMenuList";

//imports Columns for headers
import {columnsMapSONK} from "../../HeadersTable";

//imports css
import "./mappage.scss"
import MenuMap from "../../components/MenuMap/MenuMap";
import {alpha, styled} from "@mui/material/styles";
import Tooltip, {tooltipClasses} from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import {FormLabel, ListItem} from "@mui/material";
import CustomCheckbox from "../../components/Checkbox/CustomCheckbox";




const stylesListChecbox = {
    maxHeight: "74px",
    marginBottom: "5px",
    marginLeft: "20px",
    marginTop: "0px",
    paddingLeft: "5px",
    color: "#1010ee",
}

const stylesSubCheckdoxContent = {
    display: "flex",
    flexDirection: "row"
}

const stylesSubHeaderchecbox = {
    margin:"5px 5px 5px",
    padding: "5px 5px 0px"
}

const Map = (props) => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    // function setChecked(check){
    //
    //
    //     return !check
    //
    // }

    const [icon, setIcon] = useState(false)
    const [message, setMessage] = useState("")
    const [typeMsg, setTypeMsg] = useState("")
    const [chooseTable2, setChoseTable2] = useState("")
    const [roads, setRoads] = useState([])
    const [road, setRoad] = useState('Общая')
    const [openModal, setOpenModal] = useState(false)
    const [dataTableTMC, setDataTableTMC] = useState([])
    //const [experiment, setExperiment] = useState(props.experiment)
    const [change, setChange] = useState(false)
    const [listOpen, setListOpen] = useState(false)
    const [expListOpen, setExpListOpen] = useState(false)
    const [productListOpen, setProductListOpen] = useState(false)
    const [specificationListOpen, setSpecificationListOpen] = useState(false)
    const [url, setUrl] = useState('')
    const [productsList, setProductsList] = useState([])
    const [openMapMenu, setOpenMenuMap] = useState(false)
    const [product, setProduct] = useState({
        name:'',
        specifications:[]
    })

    const [products, setProducts] = useState([])

    const [tmc, setTmc] = useState('')
    const [productSpecifications, setProductSpecifications] = useState([])
    const [productName, setProductName] = useState('Не выбрано')
    const [disabledSpecificationList, setDisabledSpecificationList] = useState(true)
    const [chekedIcon, setChekedIcon] = useState([])
    const [tmcName, setTmcName] = useState('')
    const [isCheckedProductList, setIsCheckedProductList] = React.useState(productsList.slice().fill(false));
    const [isCheckedSpecificationsList, setIsCheckedSpecificationsList] = React.useState(productSpecifications.slice()
        .fill(false));

    const [productNames, setProductNames] = useState([])
    const [orignalMap, setOriginalMap] = useState(true)
    const [sonkVKM, setSonkVkm] = useState(false)
    const [roadDisable, setRoaddisable] = useState(true)
    const [orignalMapCheckboxEnabled, setOriginalMapCheckboxEnabled] = useState(true)
    const [productsCheckboxDisabled, setProductsCheckboxDisabled] = useState(false)
    const [sonkCheckboxDisabled, setSonkCheckboxDisabled] = useState(false)


    let onMapTableChange = null

    const didOnMapTableChange = (mapChange) => {
        onMapTableChange = mapChange
    }

    const changeStateList = () => {
        setListOpen(!listOpen)
    }




    const CustomTooltip = styled(({className, ...props}) => (
        <Tooltip {...props} classes={{popper: className}}/>
    ))(({theme}) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.white
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: '#218bff',
            boxShadow: theme.shadows[1],
            fontSize: 11,
            opacity: 0
        },
    }));





    useEffect(()=>{
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'http://62.213.30.22:8585/LSP_back-1.0-SNAPSHOT/map/decorations');
                const result = await response.json();

                // непосредственное обновление состояния при условии, что компонент не размонтирован
                if(!cleanupFunction){
                    setRoads(result["roads"])
                    setProductsList(result["productsList"])
                    setIsCheckedProductList(result["productsList"].slice().fill(false))
                }

            } catch (e) {
                console.error(e.message)
            }
        };


        fetchData().then();
        // функция очистки useEffect

        return () => cleanupFunction = true;
    }, [])





    // useEffect(()=>{
    //     products.forEach((item)=> {
    //         const current_ps = item.specifications[0]
    //         const ps_ = productSpecifications.find(ps=> ps === current_ps)
    //         if (item.specifications.length !== 0) {
    //             if(!ps_) {
    //                 setProductSpecifications(productSpecifications.concat(item.specifications))
    //                 setIsCheckedSpecificationsList(productSpecifications.concat(item.specifications).slice().fill(true))
    //                 setProductNames(productSpecifications)
    //             }
    //         }
    //     })
    //
    // }, [isCheckedProductList, isCheckedSpecificationsList])


    const handleChangeExperiment=(event: React.MouseEvent<HTMLDivElement, MouseEvent>, experimentName:string) => {
        event.preventDefault();
        props.setExperiment(experimentName);
    }

    const handleChangeRoad=(event: React.MouseEvent<HTMLDivElement, MouseEvent>,
                            roadName:string) => {
        event.preventDefault()
        setListOpen(!listOpen)
        setRoad(prevRoad => roadName)
        didOnMapTableChange(true)
    }




    const  handleChangeProduct = (event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        product:{
            name:'',
            specifications:[]
        }, index:number) => {
        setProduct(prevProduct => product)
        setProductListOpen(!productListOpen)
        toggleCheckboxValueProductList(index)
        console.log(index)
            }

    const  handleChangeProductName = (event: React.MouseEvent<HTMLDivElement, MouseEvent>,
                                  productName:string) => {
        setProductName(prevProduct => productName)


        setSpecificationListOpen(!specificationListOpen)

    }




    //
    const toggleCheckboxValueProductList = (index, product) => {
        setSonkCheckboxDisabled(true)
        setOriginalMap(false)
        setOriginalMapCheckboxEnabled(false)
        setIsCheckedProductList(isCheckedProductList.map((v, i) => (i === index ? !v : v)));
        const isFind = products.find(item=> item.name === product.name)
        if(!isFind) {
            products.push(product)
            setProducts(products)
            if (product.specifications.length === 0) {
                productNames.push(product.name)
                setProductNames(productNames)
            } else {
                setProductSpecifications(product.specifications)
                setIsCheckedSpecificationsList(productSpecifications.concat(product.specifications).slice().fill(true))
                setProductNames(product.specifications)
            }

        } else {

            let newProductSpecifications
            if(product.specifications!==0){
              newProductSpecifications = productSpecifications.filter(ps => !product.specifications.includes(ps))
                setProductSpecifications(newProductSpecifications)
            }

            const index_p = products.findIndex(p => p.name === product.name)

            products.splice(index_p, 1)
            setProducts(products)

        }
    }

    const toggleCheckboxValueProductSpecifications = (index, product) => {
        const isFind = productNames.find(item=> item === product)
        setIsCheckedSpecificationsList(isCheckedSpecificationsList.map((v, i) => (i === index ? !v : v)));
        if(!isFind) {
            productNames.push(product)
            setProductNames(productNames)
        } else {

            const index_p = products.findIndex(p => p === product)

            productNames.splice(index_p, 1)
            setProductNames(productNames)
        }
    }




    const toggleCheckboxPrime = (checked) => {

        setIsCheckedProductList(productsList.slice().fill(false))
        setIsCheckedSpecificationsList([]);
        setProductSpecifications([])
        setOriginalMap(true)
        setOriginalMapCheckboxEnabled(true)
        setProductNames([])
        setSonkVkm(false)
        setRoad("Общая")
        setRoaddisable(true)
        setProductsCheckboxDisabled(false)
        setSonkCheckboxDisabled(false)
    }

    const toggleCheckboxSonkVKM = (checked) => {

        setSonkVkm(!sonkVKM)
        setIsCheckedProductList(productsList.slice().fill(false))
        setIsCheckedSpecificationsList([]);
        setProductSpecifications([])
        setOriginalMap(false)
        setOriginalMapCheckboxEnabled(false)
        setRoaddisable(!roadDisable)
        setProductNames([])
        productNames.push("Пара колесная СОНК")
        setProductNames(productNames)
        setProductsCheckboxDisabled(true)
        setSonkCheckboxDisabled(true)
    }
    //
    // return menuItems.map((item, index) => (
    //     <React.Fragment>
    //         <MenuItem value={item.value} selected={item.value === value} key={index}>
    //             <Checkbox key={index} checked={isChecked[index]}
    //                       onClick={() => toggleCheckboxValue(index)}>
    //                 <Label>{item.label}</Label>
    //             </Checkbox>
    //         </MenuItem>
    //         {index === 2 || index === 3 ? <hr /> : null}
    //     </React.Fragment>
    // ));


    const roadsList = roads.map((item)=>{
        return(
            <div key={item.name}>
            <ListItemButton onClick={(event)=>handleChangeRoad(event, item.name)}>
                <ListItemText primary={item.name} />
            </ListItemButton>
                <Divider/>
            </div>
        )
    })



    const productList = productsList.map((item, index)=>{
        return (
            <div key={item.name}>
                {/*<ListItem onClick={(event)=>handleChangeProduct(event, item, index)}>*/}
                {/*    <ListItemText primary={item.name} />*/}
                    <FormGroup>
                        <FormControlLabel
                            style={{ color: '#218bff',}}

                            control={<CustomCheckbox key={index} disabled ={productsCheckboxDisabled}  checked={isCheckedProductList[index]}
                                                             onClick={() => toggleCheckboxValueProductList(index, item)} />}
                                          label={item.name}/>

                    </FormGroup>
                {/*</ListItem>*/}
                <Divider/>
            </div>
        )
    })


    const experimentsList = props.experiments.map((item)=>{
        return(
            <div key={item.name}>

                <ListItemButton onClick={(event)=>handleChangeExperiment(event, item.name)}>
                    <ListItemText primary={item.name} />
                </ListItemButton>
                <Divider/>
            </div>
        )
    })

    const productSpecificationsList = productSpecifications.map((item, index)=>{
        return(
            <div key={item}>
                {/*<ListItemButton onClick={(event)=>handleChangeProductName(event, item)}>*/}
                {/*    <ListItemText primary={item} />*/}

                {/*</ListItemButton>*/}

                <FormGroup>
                    <FormControlLabel
                        style={{ color: '#218bff',}}

                        control={<CustomCheckbox key={index}  checked={isCheckedSpecificationsList[index]}
                                                         onClick={() => toggleCheckboxValueProductSpecifications(index, item)} />}
                                      label={item}/>

                </FormGroup>
                <Divider/>
            </div>
        )
    })



    const callBackMsg = (text, type) => {
        if (text!=="" && type!==""){
            setMessage(text)
            setTypeMsg(type)
        }
    }

    const openAlert = () => {
        if(message!=="" && typeMsg !=="") {
          return <div className="alert"> <Alert severity={typeMsg} >Выбран: {message}</Alert> </div>
        }
    }

    return (
        <div className="mappage">
            <div className="openMenu">
                <div className="stat">
                    <CustomTooltip title="Основное меню" arrow disableInteractive>
                        <MenuIcon  className="icon" onClick={() => setIcon(!icon)}/>
                    </CustomTooltip>
                    <CustomTooltip title="Таблица номенклатуры" arrow disableInteractive>
                        <TableViewIcon className="icon" onClick={()=>setOpenModal(!openModal)}/>
                    </CustomTooltip>
                        <CustomTooltip title="Меню карты" arrow disableInteractive>
                    <SettingsIcon className="icon" onClick={()=>setOpenMenuMap(!openMapMenu)}/>
                        </CustomTooltip>
                </div>
            </div>

            <SideBar
                menu = {props.menu}
                setMenu = {props.setMenu}
                open = {icon}
                close = {()=>setIcon(!icon)}
                experiment={props.experiment}
                experiments={props.experiments}
            />
            <Modal open={openModal} handleClose={()=> setOpenModal(!openModal)}
                   content ={ <MapTable columns = {columnsMapSONK} data={dataTableTMC}/>}
                   header= { <h2 style={{marginBottom:"10px"}}>{"Таблица поставок ТМЦ"}</h2>}/>
            <YMap road = {road}
                  dataTable={dataTableTMC}
                  setDataTable={setDataTableTMC}
                  didOnMapTableChange = {didOnMapTableChange}
                  experiment={props.experiment}
                  products={productNames}
                  isCheckedProduct={isCheckedProductList}
                  isCheckedSpecification={isCheckedSpecificationsList}
                  onMapTableChange={onMapTableChange}
                  originalMap = {orignalMap}
                  roadEnabled = {roadDisable}

            />
            <MenuMap  open = {openMapMenu}
                      close = {()=>setOpenMenuMap(!openMapMenu)}
                      content={
                          <div className="content-right-bar">
                          <div className="list">
                              <SubMenuList listItems={experimentsList} subheader='Поле выбора экспериментов'
                                           header={ "Эксперимент: " + props.experiment}
                                           icon = {<ScienceIcon style={{color:'#1010ee'}}/>}
                                           changeStateList={()=>setExpListOpen(!expListOpen)}
                                           open={expListOpen}
                                           disabled = {false}/>
                          </div>
                          <div className="list">
                          <SubMenuList listItems={roadsList} subheader='Поле выбора ВКМ' header={ "Дорога: " + road}
                          icon = {<PodcastsIcon style={{color:'#1010ee'}}/>}
                                       changeStateList={changeStateList}
                                       open ={listOpen}
                                       disabled = {roadDisable}/>

                          </div>
                              <div style={stylesSubCheckdoxContent}>
                              <FormGroup>
                                  <FormControlLabel
                                      style={{ color: '#218bff',}}
                                      control={<CustomCheckbox disabled ={orignalMapCheckboxEnabled}    checked={orignalMap}
                                                               onClick={() => toggleCheckboxPrime(!orignalMap)} />}
                                      label="Оригинальная карта"/>

                              </FormGroup>

                              <FormControlLabel
                                  style={{ color: '#218bff'}}

                                  control={<CustomCheckbox disabled ={sonkCheckboxDisabled}  checked={sonkVKM}
                                                             onClick={() => toggleCheckboxSonkVKM(sonkVKM)} />}
                                  label="Выборка СОНК по ВКМ"/>
                              </div>

                              <div style={stylesListChecbox}>
                                  <div style={stylesSubHeaderchecbox}>
                                      <h6>ТМЦ</h6>
                                  </div>
                                  {productList}
                                  <Divider/>
                                  <div style={stylesSubHeaderchecbox}>
                                      <h6>Спецификация</h6>
                                  </div>
                                  {productSpecificationsList}
                              </div>
                          </div>
                      }
            />
        </div>
    );
};

export default Map;