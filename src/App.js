import './App.css';
import React, { useState } from "react";
import Form from './Form';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Table from "./Table";

export default function App() {
    const [units, setUnits] = useState([]);
    const [provizors, setProvizors] = useState([
        {
            name: "",
            sopCount: 0,
            isopCount: 0,
            ptCount: 0,
            fzCount: 0,
            botCount: 0,
            packageCount:0
        },
        {
            name: "",
            sopCount: 0,
            isopCount: 0,
            ptCount: 0,
            fzCount: 0,
            botCount: 0,
            packageCount:0
        },
        {
            name: "",
            sopCount: 0,
            isopCount: 0,
            ptCount: 0,
            fzCount: 0,
            botCount: 0,
            packageCount:0
        },
    ]);
    const [anotherData, setAnotherData] = useState({
        sunlife: 0,
        nathealth: 0,
        byphasse: 0,
        pamp: 0,
        geling: 0,
        mobiderm: 0,
        to: 0,
        check: 0,
        pr8: 0,
        pr11: 0,
    });
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Form unitsArray={units}  setUnitsArray={setUnits} />} />
                <Route path={"/zvit"} element={<Table units={units} provizors={provizors} setProvizors ={setProvizors} anotherData={anotherData} />} />
            </Routes>
        </BrowserRouter>
    );
}
