import React, {useEffect, useState} from "react";
import "./KuratorTable.css";
export default function KuratorTable ({ units, provizors, anotherData }) {
    const[solenCount,setSolenCount] = useState(0);
    const [prioritet8, setPrioritet8] = useState(6.7);
    const [prioritet11, setPrioritet11] = useState(8.1);

    useEffect(()=>{
        let filteredUnits =units.filter(f=>f.code===540709);
        if(filteredUnits.length>0){
            setSolenCount(filteredUnits.reduce((total,current)=>total+Number(current.count),0));
        }
    });
    return(
       <table>
        <tbody>
            <tr>
                <td className={'td1'}>Співробітник</td>
                <td className={'td'}></td>
                <td className={'td'}>ТОП 3</td>
                <td className={'td'}></td>
                <td className={'td'}>Фокусні препарати</td>
                <td className={'td'}>ФЗ</td>
                <td className={'td'}>БОТ</td>
            </tr>
            <tr>
                <td className={'td1'}></td>
                <td className={'td'}>ФО</td>
                <td className={'td'}>ІФО</td>
                <td className={'td'}>КТ</td>
                <td className={'td'}>Цільові, уп</td>
                <td className={'td'}></td>
                <td className={'td'}></td>
            </tr>
            <tr>
                <td className={'td1'}>{provizors[0].name}</td>
                <td className={"td"} style={
                {  backgroundColor: provizors[0].sopCount >= 6 ? 'green' : Number(provizors[0].sopCount) <= 4 ? 'red' : 'yellow' }}>{provizors[0].sopCount}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[0].isopCount >= 1 ? 'green' : 'red'}}>{provizors[0].isopCount}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[0].ptCount >= 4 ? 'green' : Number(provizors[0].ptCount) <= 1 ? 'red' : 'yellow' }}>{provizors[0].ptCount}</td>
                <td className={'td'} style={
                {  backgroundColor: units.filter((element)=> element.sellerName == provizors[0].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1) >= 7 ? 'green' : Number(units.filter((element)=> element.sellerName == provizors[0].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1)) <= 4 ? 'red' : 'yellow' }}>{units.filter((element)=> element.sellerName == provizors[0].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1)}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[0].fzCount >= 5 ? 'green' : Number(provizors[0].fzCount) <= 3 ? 'red' : 'yellow' }}>{provizors[0].fzCount}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[0].botCount >= 1 ? 'green' : 'red' }}>{provizors[0].botCount}</td>
            </tr>
            <tr>
                <td className={'td1'}>{provizors[1].name}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[1].sopCount >= 6 ? 'green' : Number(provizors[1].sopCount) <= 4 ? 'red' : 'yellow' }}>{provizors[1].sopCount}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[1].isopCount >= 1 ? 'green' : 'red'}}>{provizors[1].isopCount}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[1].ptCount >= 4 ? 'green' : Number(provizors[1].ptCount) <= 1 ? 'red' : 'yellow' }}>{provizors[1].ptCount}</td>
                <td className={'td'} style={
                {  backgroundColor: units.filter((element)=> element.sellerName == provizors[1].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1) >= 7 ? 'green' : Number(units.filter((element)=> element.sellerName == provizors[1].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1)) <= 4 ? 'red' : 'yellow' }}>{units.filter((element)=> element.sellerName == provizors[1].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1)}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[1].fzCount >= 5 ? 'green' : Number(provizors[1].fzCount) <= 3 ? 'red' : 'yellow' }}>{provizors[1].fzCount}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[1].botCount >= 1 ? 'green' : 'red' }}>{provizors[1].botCount}</td>
            </tr>
            <tr>
                <td className={'td1'}>{provizors[2].name}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[2].sopCount >= 6 ? 'green' : Number(provizors[2].sopCount) <= 4 ? 'red' : 'yellow' }}>{provizors[2].sopCount}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[2].isopCount >= 1 ? 'green' : 'red'}}>{provizors[2].isopCount}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[2].ptCount >= 4 ? 'green' : Number(provizors[2].ptCount) <= 1 ? 'red' : 'yellow' }}>{provizors[2].ptCount}</td>
                <td className={'td'} style={
                {  backgroundColor: units.filter((element)=> element.sellerName == provizors[2].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1) >= 7 ? 'green' : Number(units.filter((element)=> element.sellerName == provizors[2].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1)) <= 4 ? 'red' : 'yellow' }}>{units.filter((element)=> element.sellerName == provizors[2].name).reduce((total,current)=>total+current.packageCount,0).toFixed(1)}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[2].fzCount >= 5 ? 'green' : Number(provizors[2].fzCount) <= 3 ? 'red' : 'yellow' }}>{provizors[2].fzCount}</td>
                <td className={'td'} style={
                {  backgroundColor: provizors[2].botCount >= 1 ? 'green' : 'red' }}>{provizors[2].botCount}</td>
            </tr>
            <tr>
                <td className={'td1'}>Загальні показники:</td>
                <td className={'td'}>Загальний %</td>
                <td className={'td'}>% за день</td>
            </tr>
            <tr>
                <td className={'td1'}>% ПР 8:</td>
                <td className={'td'} style={
                {  backgroundColor: anotherData.pr8 >= 100 / 30 * Number(new Date().getDate()) ? 'green' : 'yellow'}}>{anotherData.pr8}</td>
                <td className={'td'} style={
                {  backgroundColor: (Number(anotherData.pr8) - Number(prioritet8)).toFixed(2) >= 3.66 ? 'green' : 'yellow'}}>{(Number(anotherData.pr8) - Number(prioritet8)).toFixed(2)}</td>
            </tr>
            <tr>
                <td className={'td1'}>% ПР 11:</td>
                <td className={'td'} style={
                {  backgroundColor: anotherData.pr11 >= 100 / 30 * Number(new Date().getDate()) ? 'green' : 'yellow'}}>{anotherData.pr11}</td>
                <td className={'td'} style={
                {  backgroundColor: (Number(anotherData.pr11) - Number(prioritet11)).toFixed(2) >= 3.66 ? 'green' : 'yellow'}}>{(Number(anotherData.pr11) - Number(prioritet11)).toFixed(2)}</td>
            </tr>
            <tr>
                <td className={'td1'}>% ТО:</td>
                <td className={'td'}>{`${anotherData.to} грн`}</td>
                <td className={'td'}></td>
            </tr>
            <tr>
                <td className={'td1'}>Кількість чеків:</td>
                <td className={'td'}>{anotherData.check}</td>
            </tr>
            <tr>
                <td className={'td1'}>Санлайф, грн</td>
                <td className={'td'} style={
                {  backgroundColor: anotherData.sunlife >= 750 ? 'green' : Number(anotherData.sunlife) < 500 ? 'red' : 'yellow' }}>{anotherData.sunlife}</td>
            </tr>
            <tr>
                <td className={'td1'}>Натхелс та Памп, грн</td>
                <td className={'td'} style={
                {  backgroundColor: Number(anotherData.nathealth)+Number(anotherData.pamp) >= 600 ? 'green' : Number(anotherData.nathealth)+Number(anotherData.pamp) < 400 ? 'red' : 'yellow' }}>{Number(anotherData.nathealth)+Number(anotherData.pamp)}</td>
            </tr>
            <tr>
                <td className={'td1'}>BYPHASSE / IVATERM, грн</td>
                <td className={'td'} style={
                {  backgroundColor: anotherData.byphasse >= 1 ? 'green' : 'red' }}>{anotherData.byphasse}</td>
            </tr>
            <tr>
                <td className={'td1'}>Солен, уп</td>
                <td className={'td'} style={
                {  backgroundColor: solenCount >= 1 ? 'green' : 'red' }}>{solenCount}</td>
            </tr>
        </tbody>
       </table> 
    );
}