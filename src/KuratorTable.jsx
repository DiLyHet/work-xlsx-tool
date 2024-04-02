import React, {useEffect} from "react";
import "./KuratorTable.css";
export default function KuratorTable ({ units, provizors, anotherData }) {
    console.log();

        let sopElement = document.querySelectorAll(".sop");
        console.log(sopElement);
        sopElement.forEach(element =>{
            if(sopElement.value>6){
                element.classList.add("backgroundGreen");
            }else if(sopElement.value === 0){
                element.classList.add("backgroundRed");
            }else{
                element.classList.add("backgroundYellow");
            }
        });


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
                <td className={"sop"} style={
                {  backgroundColor: provizors[0].sopCount >= 6 ? 'green' : Number(provizors[0].sopCount) === 0 ? 'red' : 'yellow' }}>{provizors[0].sopCount}</td>
                <td style={
                {  backgroundColor: provizors[0].isopCount >= 1 ? 'green' : 'red'}}>{provizors[0].isopCount}</td>
                <td style={
                {  backgroundColor: provizors[0].ptCount >= 4 ? 'green' : Number(provizors[0].ptCount) === 0 ? 'red' : 'yellow' }}>{provizors[0].ptCount}</td>
                <td style={
                {  backgroundColor: units.filter((element)=> element.sellerName == provizors[0].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1) >= 7 ? 'green' : Number(units.filter((element)=> element.sellerName == provizors[0].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1)) === 0 ? 'red' : 'yellow' }}>{units.filter((element)=> element.sellerName == provizors[0].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1)}</td>
                <td style={
                {  backgroundColor: provizors[0].fzCount >= 5 ? 'green' : Number(provizors[0].fzCount) === 0 ? 'red' : 'yellow' }}>{provizors[0].fzCount}</td>
                <td style={
                {  backgroundColor: provizors[0].botCount >= 3 ? 'green' : Number(provizors[0].botCount) === 0 ? 'red' : 'yellow' }}>{provizors[0].botCount}</td>
            </tr>
            <tr>
                <td>{provizors[1].name}</td>
                <td className="sop" style={
                {  backgroundColor: provizors[1].sopCount >= 6 ? 'green' : Number(provizors[1].sopCount) === 0 ? 'red' : 'yellow' }}>{provizors[1].sopCount}</td>
                <td style={
                {  backgroundColor: provizors[1].isopCount >= 1 ? 'green' : 'red'}}>{provizors[1].isopCount}</td>
                <td style={
                {  backgroundColor: provizors[1].ptCount >= 4 ? 'green' : Number(provizors[1].ptCount) === 0 ? 'red' : 'yellow' }}>{provizors[1].ptCount}</td>
                <td style={
                {  backgroundColor: units.filter((element)=> element.sellerName == provizors[1].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1) >= 7 ? 'green' : Number(units.filter((element)=> element.sellerName == provizors[1].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1)) === 0 ? 'red' : 'yellow' }}>{units.filter((element)=> element.sellerName == provizors[1].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1)}</td>
                <td style={
                {  backgroundColor: provizors[1].fzCount >= 5 ? 'green' : Number(provizors[1].fzCount) === 0 ? 'red' : 'yellow' }}>{provizors[1].fzCount}</td>
                <td style={
                {  backgroundColor: provizors[1].botCount >= 3 ? 'green' : Number(provizors[1].botCount) === 0 ? 'red' : 'yellow' }}>{provizors[1].botCount}</td>
            </tr>
            <tr>
                <td>{provizors[2].name}</td>
                <td className={"sop"} style={
                {  backgroundColor: provizors[2].sopCount >= 6 ? 'green' : Number(provizors[2].sopCount) === 0 ? 'red' : 'yellow' }}>{provizors[2].sopCount}</td>
                <td style={
                {  backgroundColor: provizors[2].isopCount >= 1 ? 'green' : 'red'}}>{provizors[2].isopCount}</td>
                <td style={
                {  backgroundColor: provizors[2].ptCount >= 4 ? 'green' : Number(provizors[2].ptCount) === 0 ? 'red' : 'yellow' }}>{provizors[2].ptCount}</td>
                <td style={
                {  backgroundColor: units.filter((element)=> element.sellerName == provizors[2].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1) >= 7 ? 'green' : Number(units.filter((element)=> element.sellerName == provizors[2].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1)) === 0 ? 'red' : 'yellow' }}>{units.filter((element)=> element.sellerName == provizors[2].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1)}</td>
                <td style={
                {  backgroundColor: provizors[2].fzCount >= 5 ? 'green' : Number(provizors[2].fzCount) === 0 ? 'red' : 'yellow' }}>{provizors[2].fzCount}</td>
                <td style={
                {  backgroundColor: provizors[2].botCount >= 3 ? 'green' : Number(provizors[2].botCount) === 0 ? 'red' : 'yellow' }}>{provizors[2].botCount}</td>
            </tr>
            <tr>
                <td>Загальні показники:</td>
                <td>Загальний %</td>
                <td>% за день</td>
            </tr>
            <tr>
                <td>% ПР 8:</td>
                <td>{anotherData.pr8}</td>
                <td style={
                {  backgroundColor: anotherData.pr8 >= 3.66 ? 'green' : 'yellow'}}></td>
            </tr>
            <tr>
                <td>% ПР 11:</td>
                <td>{anotherData.pr11}</td>
                <td style={
                {  backgroundColor: anotherData.pr11 >= 3.66 ? 'green' : 'yellow'}}></td>
            </tr>
            <tr>
                <td>% ТО:</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Кількість чеків:</td>
                <td>{anotherData.check}</td>
            </tr>
            <tr>
                <td>Санлайф, грн</td>
                <td style={
                {  backgroundColor: anotherData.sunlife >= 750 ? 'green' : Number(anotherData.sunlife) === 0 ? 'red' : 'yellow' }}>{anotherData.sunlife}</td>
            </tr>
            <tr>
                <td>Натхелс та Памп, грн</td>
                <td style={
                {  backgroundColor: Number(anotherData.nathealth)+Number(anotherData.pamp) >= 600 ? 'green' : Number(anotherData.nathealth)+Number(anotherData.pamp) === 0 ? 'red' : 'yellow' }}>{Number(anotherData.nathealth)+Number(anotherData.pamp)}</td>
            </tr>
            <tr>
                <td>BYPHASSE / IVATERM, грн</td>
                <td style={
                {  backgroundColor: anotherData.byphasse >= 1 ? 'green' : 'red' }}>{anotherData.byphasse}</td>
            </tr>
            <tr>
                <td>Солен, уп</td>

                <td style={
                {  backgroundColor: units.filter(f=>f.code===658339)[0].count >= 1 ? 'green' : 'red' }}>{units.filter(f=>f.code===658339)[0].count}</td>
            </tr>
        </tbody>
       </table> 
    );
}