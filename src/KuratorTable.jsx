import React from "react";

export default function KuratorTable ({ units, provizors, anotherData }) {
    return(
       <table>
        <tbody>
            <tr>
                <td>Співробітник</td>
                <td></td>
                <td>ТОП 3</td>
                <td></td>
                <td>Фокусні препарати</td>
                <td>ФЗ</td>
                <td>БОТ</td>
            </tr>
            <tr>
                <td></td>
                <td>ФО</td>
                <td>ІФО</td>
                <td>КТ</td>
                <td>Цільові, уп</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>{provizors[0].name}</td>
                <td>{provizors[0].sopCount}</td>
                <td>{provizors[0].isopCount}</td>
                <td>{provizors[0].ptCount}</td>
                <td></td>
                <td>{provizors[0].fzCount}</td>
                <td>{provizors[0].botCount}</td>
            </tr>
            <tr>
                <td>{provizors[1].name}</td>
                <td>{provizors[1].sopCount}</td>
                <td>{provizors[1].isopCount}</td>
                <td>{provizors[1].ptCount}</td>
                <td></td>
                <td>{provizors[1].fzCount}</td>
                <td>{provizors[1].botCount}</td>
            </tr>
            <tr>
                <td>{provizors[2].name}</td>
                <td>{provizors[2].sopCount}</td>
                <td>{provizors[2].isopCount}</td>
                <td>{provizors[2].ptCount}</td>
                <td></td>
                <td>{provizors[2].fzCount}</td>
                <td>{provizors[2].botCount}</td>
            </tr>
            <tr>
                <td>Загальні показники:</td>
                <td>Загальний %</td>
                <td>% за день</td>
            </tr>
            <tr>
                <td>% ПР 8:</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>% ПР 11:</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>% ТО:</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Кількість чеків:</td>
                <td></td>
            </tr>
            <tr>
                <td>Санлайф, грн</td>
                <td></td>
            </tr>
            <tr>
                <td>Натхелс та Памп, грн</td>
                <td></td>
            </tr>
            <tr>
                <td>BYPHASSE / IVATERM, грн</td>
                <td></td>
            </tr>
            <tr>
                <td>Солен, уп</td>
                <td></td>
            </tr>
        </tbody>
       </table> 
    );
}