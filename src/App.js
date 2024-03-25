import logo from './logo2.svg';
import './App.css';
import AdditiveSettingsRender from "./AdditiveSettings";
import React, {useState} from "react";
import {additiveDataTemplate} from "./Templates";
import {XLSXInput, XLSXProcessing} from "./XlsxLogic";

let units = [];
let outhtml;
let additiveData;
const userDataTemplate = {
    userName: "Жидкова О.Ю.", sopCount: 0, isopCount: 0, ptCount: 0, fzCount: 0, botCount: 0
}


function App() {
    const [additiveData, setAdditiveData] = useState(Object.assign({}, additiveDataTemplate));
    const [units, setUnits] = useState([]);
    const [reportFile, setReportFile] = useState();
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Продажи</p>
                <XLSXInput units={units} setUnits={setUnits}/>
                <p>Цільові звіт</p>
                <input type={"file"} onChange={(files) => setReportFile(files.target.files[0])}></input>
                <AdditiveSettingsRender additiveData={additiveData} setAdditiveData={setAdditiveData}/>
                <button onClick={() => XLSXProcessing(additiveData, units, reportFile)}>Processing</button>
            </header>
        </div>
    );
}

export default App;
