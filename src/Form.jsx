import logo from "./logo2.svg";
import React, { useState } from "react";
import { XLSXInput } from "./XlsxLogic";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function Form({ unitsArray, setUnitsArray }) {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Продажи</p>
      <XLSXInput units={unitsArray} setUnits={setUnitsArray} />
      <XLSXInput units={unitsArray} setUnits={setUnitsArray} />
      <XLSXInput units={unitsArray} setUnits={setUnitsArray} />
      <button>
          <Link to={"/zvit"}>СОЗДАТЬ ОТЧЁТ</Link>
        </button>
    
    </div>
  );
}
