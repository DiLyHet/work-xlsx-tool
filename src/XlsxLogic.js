import React, {useState} from "react";
import AdditiveSettingsRender from "./AdditiveSettings";

import targetFile from "./dest.xlsx"
const XLSX = require('xlsx');
export const XLSXInput = (props) => {
    const handleFileChange = (e) => {
        if (e.target.files) {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = function (e) {
                let data = e.target.result;
                let workbook = XLSX.read(data, {
                    type: 'binary'
                });
                workbook.SheetNames.forEach(function (sheetName) {
                    let aoa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 1, defval: ""});
                    serializeJsonToUnit(aoa);
                })

            };
            reader.onerror = function (ex) {
                console.log(ex);
            };
            reader.readAsBinaryString(file);
        }
    }
   
    function serializeJsonToUnit(data) {
        let tempUnits = [];
        for (let i = 1; i < data.length; i++) {
            let tempData = data[i];
            let unit = {
                code: tempData[0],
                name: tempData[1],
                count: Number(tempData[2]),
                sellerName: tempData[3]
            }
            tempUnits.push(unit);

        }
        props.setUnits(tempUnits);
    }
    return(
        <input type="file" onChange={handleFileChange}/>);
}
export const XLSXProcessing = async (additiveData, units,reportFile) => {

   
    let reader = new FileReader();
    reader.readAsBinaryString(reportFile);
    reader.onload = function (e) {
        let data = e.target.result;
       
        let workbook = XLSX.read(data, {
            type: 'binary', cellFormula: true, cellHTML: true, cellNF: true, themeXLSX: true, cellStyles: true
        });
        let sheetName = workbook.SheetNames[0];
        let aoa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 1, defval: ""});
        
        for (let i = 1; i < aoa.length; i++) {
            for (let k = 1; k < 8; k += 2) {
                try {
                    let name = aoa[i][k];
                    units.forEach(function (unit) {
                        let currentNumber = Number(aoa[i][k + 1]);

                        if (name.includes(unit.code)) {


                            if (currentNumber === undefined) {

                                currentNumber = Number(unit.count);
                            } else {
                                currentNumber += Number(unit.count);
                            }
                            aoa[i][k + 1] = currentNumber;
                        }


                    });
                } catch (e) {
                }
            }
        }
        let out = XLSX.utils.aoa_to_sheet(aoa);
        workbook[sheetName] = out;
        var sheet_data = XLSX.utils.sheet_to_json(workbook[sheetName], {header: 1});
        if (sheet_data.length > 0) {
            var table_output = '<table class="listViewTable table-sortable" id="listViewTable" style="border:1px solid black;border-collapse:collapse;"';

            for (var row = 0; row < sheet_data.length; row++) {

                table_output += '<tr class="row" >';

                for (var cell = 0; cell < sheet_data[row].length; cell++) {

                    if (cell === 0 || cell === 3 || cell === 6) {
                        if (cell === 6 && row === 4 || cell === 6 && row === 35 || cell === 6 && row === 43) {
                            table_output += '<td class="row' + '-cell' + cell + '"style="border-right:1px solid black;border-top:1px solid black;min-width: 20px;">' + sheet_data[row][cell] + '</td>';
                        } else {
                            table_output += '<td class="row' + '-cell' + cell + '"style="border-right:1px solid black;min-width: 20px;">' + sheet_data[row][cell] + '</td>';
                        }
                    } else {
                        table_output += '<td class="row' + '-cell' + cell + '"style="border:1px solid black;min-width: 20px;">' + sheet_data[row][cell] + '</td>';
                    }


                }

                table_output += '</tr>';

            }

            let outhtml = table_output;//XLSX.utils.sheet_to_html( workbook[sheetName],{editable:true});
            var newWindow = window.open();
            newWindow.document.write(outhtml);
        }
    }


}

