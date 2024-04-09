import React, { useEffect, useState } from "react";
import "./KuratorTable.css";
export default function KuratorTable({ units, provizors, anotherData }) {
  const [solenCount, setSolenCount] = useState(0);
  const [prioritet8, setPrioritet8] = useState(21, 3);
  const [prioritet11, setPrioritet11] = useState(24, 9);
  const [sellers, setSellers] = useState([]);
   useEffect(() => {
   let tempMap = new Set();
    units.forEach((arrayElement) => {
      arrayElement.forEach((element) => {
        tempMap.add(element.sellerName);
      });
    });
    if(tempMap.size>0){
        let test = Array.from(tempMap);
        setSellers({ ...test });
    console.log(sellers);}
   }, []);
  function UnitRow(index) {
    console.log(units);
    if (!Array.isArray(units)&& sellers === undefined) {
        console.error("'units' is not an array or is undefined.");
        return; // Exit function early
      }
    let numberOfPackage = units.map((array) =>
      array
        .filter(
          (element) =>
            element.sellerName.replace(/\s+/g, "") ==
            sellers[index].replace(/\s+/g, "")
        )
        .reduce((accum, current) => (accum += current.numberOfPackage), 0)
    );
    return (
      <tr>
        <td>sellers[index]</td>
        {numberOfPackage.map((element, idx) => (
          <td key={idx}>{element}</td>
        ))}
      </tr>
    );
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>ФИО</td>
          <td>Целевые</td>
          <td>ПР8</td>
          <td>ПР11</td>
        </tr>
        {sellers.map((element,index)=>(
            <UnitRow index ={index}/>
        ))}
      </tbody>
    </table>
  );
  //   return (
  //     <>
  //       <table>
  //         <tbody>
  //           <tr>
  //             <td className={"td"}>{`Дата: ${new Date().getDate()}.${
  //               new Date().getMonth() + 1
  //             }.${new Date().getFullYear()}`}</td>
  //             <td className={"td"}></td>
  //             <td className={"td"}>Аптека: БОГОМОЛЬЦА</td>
  //           </tr>
  //           <tr>
  //             <td className={"td1"}>Співробітник</td>
  //             <td className={"td"}></td>
  //             <td className={"td"}>ТОП 3</td>
  //             <td className={"td"}></td>
  //             <td className={"td"}>Фокусні препарати</td>
  //             <td className={"td"}>ФЗ</td>
  //             <td className={"td"}>БОТ</td>
  //           </tr>
  //           <tr>
  //             <td className={"td1"}></td>
  //             <td className={"td"}>ФО</td>
  //             <td className={"td"}>ІФО</td>
  //             <td className={"td"}>КТ</td>
  //             <td className={"td"}>Цільові, уп</td>
  //             <td className={"td"}></td>
  //             <td className={"td"}></td>
  //           </tr>
  //           <tr>
  //             <td className={"td1"}>{sellers[0]}</td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor:
  //                   provizors[0].sopCount >= 6
  //                     ? "green"
  //                     : Number(provizors[0].sopCount) <= 4
  //                     ? "red"
  //                     : "yellow",
  //               }}>
  //               {provizors[0].sopCount}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor: provizors[0].isopCount >= 1 ? "green" : "red",
  //               }}>
  //               {provizors[0].isopCount}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor:
  //                   provizors[0].ptCount >= 4
  //                     ? "green"
  //                     : Number(provizors[0].ptCount) <= 1
  //                     ? "red"
  //                     : "yellow",
  //               }}>
  //               {provizors[0].ptCount}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor:
  //                   units
  //                     .filter(
  //                       (element) =>
  //                         element.sellerName.replace(/\s+/g, "") ==
  //                         provizors[0].name.replace(/\s+/g, "")
  //                     )
  //                     .reduce((total, current) => total + current.packageCount, 0)
  //                     .toFixed(1) >= 7
  //                     ? "green"
  //                     : Number(
  //                         units
  //                           .filter(
  //                             (element) =>
  //                               element.sellerName.replace(/\s+/g, "") ==
  //                               provizors[0].name.replace(/\s+/g, "")
  //                           )
  //                           .reduce(
  //                             (total, current) => total + current.packageCount,
  //                             0
  //                           )
  //                           .toFixed(1)
  //                       ) <= 4
  //                     ? "red"
  //                     : "yellow",
  //               }}>
  //               {units
  //                 .filter(
  //                   (element) =>
  //                     element.sellerName.replace(/\s+/g, "") ==
  //                     provizors[0].name.replace(/\s+/g, "")
  //                 )
  //                 .reduce((total, current) => total + current.packageCount, 0)
  //                 .toFixed(1)}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor:
  //                   provizors[0].fzCount >= 5
  //                     ? "green"
  //                     : Number(provizors[0].fzCount) <= 3
  //                     ? "red"
  //                     : "yellow",
  //               }}>
  //               {provizors[0].fzCount}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor: provizors[0].botCount >= 1 ? "green" : "red",
  //               }}>
  //               {provizors[0].botCount}
  //             </td>
  //           </tr>
  //           <tr>
  //             <td className={"td1"}>{sellers[1].name}</td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor:
  //                   provizors[1].sopCount >= 6
  //                     ? "green"
  //                     : Number(provizors[1].sopCount) <= 4
  //                     ? "red"
  //                     : "yellow",
  //               }}>
  //               {provizors[1].sopCount}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor: provizors[1].isopCount >= 1 ? "green" : "red",
  //               }}>
  //               {provizors[1].isopCount}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor:
  //                   provizors[1].ptCount >= 4
  //                     ? "green"
  //                     : Number(provizors[1].ptCount) <= 1
  //                     ? "red"
  //                     : "yellow",
  //               }}>
  //               {provizors[1].ptCount}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor:
  //                   units
  //                     .filter(
  //                       (element) =>
  //                         element.sellerName.replace(/\s+/g, "") ==
  //                         provizors[1].name.replace(/\s+/g, "")
  //                     )
  //                     .reduce((total, current) => total + current.packageCount, 0)
  //                     .toFixed(1) >= 7
  //                     ? "green"
  //                     : Number(
  //                         units
  //                           .filter(
  //                             (element) =>
  //                               element.sellerName.replace(/\s+/g, "") ==
  //                               provizors[1].name.replace(/\s+/g, "")
  //                           )
  //                           .reduce(
  //                             (total, current) => total + current.packageCount,
  //                             0
  //                           )
  //                           .toFixed(1)
  //                       ) <= 4
  //                     ? "red"
  //                     : "yellow",
  //               }}>
  //               {units
  //                 .filter(
  //                   (element) =>
  //                     element.sellerName.replace(/\s+/g, "") ==
  //                     provizors[1].name.replace(/\s+/g, "")
  //                 )
  //                 .reduce((total, current) => total + current.packageCount, 0)
  //                 .toFixed(1)}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor:
  //                   provizors[1].fzCount >= 5
  //                     ? "green"
  //                     : Number(provizors[1].fzCount) <= 3
  //                     ? "red"
  //                     : "yellow",
  //               }}>
  //               {provizors[1].fzCount}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor: provizors[1].botCount >= 1 ? "green" : "red",
  //               }}>
  //               {provizors[1].botCount}
  //             </td>
  //           </tr>
  //           <tr>
  //             <td className={"td1"}>{sellers[2].name}</td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor:
  //                   provizors[2].sopCount >= 6
  //                     ? "green"
  //                     : Number(provizors[2].sopCount) <= 4
  //                     ? "red"
  //                     : "yellow",
  //               }}>
  //               {provizors[2].sopCount}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor: provizors[2].isopCount >= 1 ? "green" : "red",
  //               }}>
  //               {provizors[2].isopCount}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor:
  //                   provizors[2].ptCount >= 4
  //                     ? "green"
  //                     : Number(provizors[2].ptCount) <= 1
  //                     ? "red"
  //                     : "yellow",
  //               }}>
  //               {provizors[2].ptCount}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor:
  //                   units
  //                     .filter(
  //                       (element) =>
  //                         element.sellerName.replace(/\s+/g, "") ==
  //                         provizors[2].name.replace(/\s+/g, "")
  //                     )
  //                     .reduce((total, current) => total + current.packageCount, 0)
  //                     .toFixed(1) >= 7
  //                     ? "green"
  //                     : Number(
  //                         units
  //                           .filter(
  //                             (element) =>
  //                               element.sellerName.replace(/\s+/g, "") ==
  //                               provizors[2].name.replace(/\s+/g, "")
  //                           )
  //                           .reduce(
  //                             (total, current) => total + current.packageCount,
  //                             0
  //                           )
  //                           .toFixed(1)
  //                       ) <= 4
  //                     ? "red"
  //                     : "yellow",
  //               }}>
  //               {units
  //                 .filter(
  //                   (element) =>
  //                     element.sellerName.replace(/\s+/g, "") ==
  //                     provizors[2].name.replace(/\s+/g, "")
  //                 )
  //                 .reduce((total, current) => total + current.packageCount, 0)
  //                 .toFixed(1)}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor:
  //                   provizors[2].fzCount >= 5
  //                     ? "green"
  //                     : Number(provizors[2].fzCount) <= 3
  //                     ? "red"
  //                     : "yellow",
  //               }}>
  //               {provizors[2].fzCount}
  //             </td>
  //             <td
  //               className={"td"}
  //               style={{
  //                 backgroundColor: provizors[2].botCount >= 1 ? "green" : "red",
  //               }}>
  //               {provizors[2].botCount}
  //             </td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </>
  //   );
}
