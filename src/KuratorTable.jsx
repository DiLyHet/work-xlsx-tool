import React from "react";
import './KuratorTable.css';

export default function KuratorTable ({ units, provizors, anotherData }) {
    return(
       <table>
        <tbody>
            <tr>
                <td className="td">Співробітник</td>
                <td className="tdleft"></td>
                <td className="tdcenter">ТОП 3</td>
                <td className="tdright"></td>
                <td className="td">Фокусні препарати</td>
                <td className="td">ФЗ</td>
                <td className="td">БОТ</td>
            </tr>
            <tr>
                <td className="td"></td>
                <td className="td">ФО</td>
                <td className="td">ІФО</td>
                <td className="td">КТ</td>
                <td className="td">Цільові, уп</td>
                <td className="td"></td>
                <td className="td"></td>
            </tr>
            <tr>
                <td className="td">{provizors[0].name}</td>
                <td className="td">{provizors[0].sopCount}</td>
                <td className="td">{provizors[0].isopCount}</td>
                <td className="td">{provizors[0].ptCount}</td>
                <td className="td"></td>
                <td className="td">{provizors[0].fzCount}</td>
                <td className="td">{provizors[0].botCount}</td>
            </tr>
            <tr>
                <td className="td">{provizors[1].name}</td>
                <td className="td">{provizors[1].sopCount}</td>
                <td className="td">{provizors[1].isopCount}</td>
                <td className="td">{provizors[1].ptCount}</td>
                <td className="td"></td>
                <td className="td">{provizors[1].fzCount}</td>
                <td className="td">{provizors[1].botCount}</td>
            </tr>
            <tr>
                <td className="td">{provizors[2].name}</td>
                <td className="td">{provizors[2].sopCount}</td>
                <td className="td">{provizors[2].isopCount}</td>
                <td className="td">{provizors[2].ptCount}</td>
                <td className="td"></td>
                <td className="td">{provizors[2].fzCount}</td>
                <td className="td">{provizors[2].botCount}</td>
            </tr>
            <tr>
                <td className="td">Загальні показники:</td>
                <td className="td">Загальний %</td>
                <td className="td">% за день</td>
            </tr>
            <tr>
                <td className="td">% ПР 8:</td>
                <td className="td">{anotherData.pr8}</td>
                <td className="td"></td>
            </tr>
            <tr>
                <td className="td">% ПР 11:</td>
                <td className="td">{anotherData.pr11}</td>
                <td className="td"></td>
            </tr>
            <tr>
                <td className="td">% ТО:</td>
                <td className="td"></td>
                <td className="td"></td>
            </tr>
            <tr>
                <td className="td">Кількість чеків:</td>
                <td className="td">{anotherData.check}</td>
            </tr>
            <tr>
                <td className="td">Санлайф, грн</td>
                <td className="td">{anotherData.sunlife}</td>
            </tr>
            <tr>
                <td className="td">Натхелс та Памп, грн</td>
                <td className="td">{Number(anotherData.nathealth) + Number(anotherData.pamp)}</td>
            </tr>
            <tr>
                <td className="td">BYPHASSE / IVATERM, грн</td>
                <td className="td">{anotherData.byphasse}</td>
            </tr>
            <tr>
                <td className="td">Солен, уп</td>
                <td className="td"></td>
            </tr>
        </tbody>
       </table> 
    );
}