import logo from "./logo2.svg";
import React from "react";
import './index.css';
import { XLSXInput } from "./XlsxLogic";

import { Link } from "react-router-dom";

export default function Form({ unitsArray, setUnitsArray, findUniqueSellerNames }) {
  return (
    <div className="page">
      <div className="form">
        <p className="text">ЦЕЛЕВЫЕ</p>
        <XLSXInput units={unitsArray} setUnits={setUnitsArray} />
      </div>
      <div className="form">
        <p className="text">ПРИОРИТЕТ 8</p>
        <XLSXInput units={unitsArray} setUnits={setUnitsArray} />
      </div>
      <div className="form">
        <p className="text">ПРИОРИТЕТ 11</p>
        <XLSXInput units={unitsArray} setUnits={setUnitsArray} />
      </div>
      <button className="button" onClick={() => findUniqueSellerNames(unitsArray)}>
        <Link to={"/zvit"}><p className="button__text">СОЗДАТЬ ОТЧЁТ</p></Link>
      </button>
    </div>
  );
}
