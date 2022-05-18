import React, {useEffect, useState} from 'react';
import * as XLSX from 'xlsx';
import axios from "axios";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";

import "./upload.scss"
import Chart from "../../components/chart/Chart";
import Datable from "../../components/datable/Datable";
import {createTheme} from "@mui/material";


const Upload = () => {
    const [csv, setCSV] = useState();
    const [header, setHeader] = useState([]);
    const [dataFile, setDataFile] = useState([]);
    const [list, setList] = useState([]);
    const [rowId, setRowId] = useState();
    const [uploadResource, setUploadResponse] = useState("")


    const upload = async (event)=> {

        event.preventDefault();

        console.log("hi")
        const uploadData = new FormData();
        uploadData.append("csv", csv);

      await axios
            .post("http://localhost:8080/upload", uploadData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }

            })
            .then((response) => {
                setUploadResponse(`File uploaded successfully
        
        FILE - uploadFile`);
            })
            .catch((error) => {
                setUploadResponse(`File uploaded successfully

        
        FILE - uploadFile`);
            });

    }




    const parse = (data) => {
        const dataStringLines = data.split(/\r\n|\n/);
        const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

        const list = [];
        for (let i = 1; i < dataStringLines.length; i++) {
            const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
            if (headers && row.length == headers.length) {
                const obj = {};
                for (let j = 0; j < headers.length; j++) {
                    let d = row[j];
                    if (d.length > 0) {
                        if (d[0] == '"')
                            d = d.substring(1, d.length - 1);
                        if (d[d.length - 1] == '"')
                            d = d.substring(d.length - 2, 1);
                    }
                    if (headers[j]) {
                        obj[headers[j]] = d;
                    }
                }

                // remove the blank rows
                if (Object.values(obj).filter(x => x).length > 0) {
                    list.push(obj);
                }
            }
        }

        // prepare columns list from headers
        setRowId(headers[0])
        const columns = headers.map((element, index)=> ({
            field: element, headerName: element, flex:1,  renderCell:(params)=>{return(
                <div className="cell" key={index}>{params.value}</div>
            )}
        }));
        console.log(columns, list)
        setHeader(columns);
        setList(list)
    }

    const handleFileUpload = e => {
        const file = e.target.files[0];

        setCSV(file)

        const reader = new FileReader();
        reader.onload = (evt) => {
            /* Parse data */
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            console.log(data)
            parse(data)
        };

        reader.readAsText(file, "windows-1251");

    }


    return (
        <div className="upload">
            <SideBar/>
            <div className="container">
                <NavBar/>
                <div className="top">
                    <h1>Загрузка CSV-файла</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <label htmlFor="file">
                        <UploadFileIcon className="icon"/>
                        </label>
                        <input
                            type="file"
                            onChange={handleFileUpload}
                            id="file"
                            style={{display:"none"}}/>

                    </div>
                    <div className="right">
                        <form onSubmit={upload}>
                            <Datable
                                new_id = {rowId}
                            rows = {list}
                            columns ={header}
                            />
                            <button>Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Upload;