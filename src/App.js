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

    const uniqueSellers = [];

function findUniqueSellerNames(arrays) {
    const uniqueNames = {};

    arrays.forEach(innerArray => {
        innerArray.forEach(obj => {
            const sellerName = obj.sellerName;
            uniqueNames[sellerName] = true;
        });
    });
    for (const name in uniqueNames) {
        uniqueSellers.push(name);
    }

    console.log(uniqueSellers);
    return uniqueSellers;
}
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Form unitsArray={units} setUnitsArray={setUnits} findUniqueSellerNames={findUniqueSellerNames} />} />
                <Route path={"/zvit"} element={<Table units={units} uniqueSellers={uniqueSellers} />} />
            </Routes>
        </BrowserRouter>
    );
}
