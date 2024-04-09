import React, { useEffect, useState } from "react";
import "./KuratorTable.css";
import './index.css';

export default function KuratorTable({ units, uniqueSellers }) {
  const [sellers, setSellers] = useState([]);

//   useEffect(() => {
//     if (units && units.length > 0) {
//       const tempSet = new Set();
//       units.forEach((arrayElement) => {
//         arrayElement.forEach((element) => {
//           tempSet.add(element.sellerName.trim()); // Use trim to remove leading/trailing whitespace
//         });
//       });
//       const uniqueSellers = Array.from(tempSet);
//       setSellers(uniqueSellers);
//     }
//   }, [units]); // Trigger effect when units change



useEffect(() => {
    console.log(units);
}, [])

  function calculatePackageCount(sellerName) {
    if (!Array.isArray(units) || sellers.length === 0) return 0;
    console.log(units);
    const filteredUnits = units.flat().filter(
      (element) => element.sellerName.trim() === sellerName.trim()
    );
    return filteredUnits.reduce((accum, current) => accum + current.packageCount, 0);
  }

//   return (
//     <table>
//       <tbody>
//         <tr>
//           <td>ФИО</td>
//           {/* Render header cells dynamically based on number of sellers */}
//           {sellers.map((seller, index) => (
//             <td key={index}>{seller}</td>
//           ))}
//         </tr>
//         {/* Render rows for each seller */}
//         {sellers.map((seller, index) => (
//           <tr key={index}>
//             <td>{seller}</td>
//             {/* Calculate and render package count for each seller */}
//             {sellers.map((_, idx) => (
//               <td key={idx}>{calculatePackageCount(seller)}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );

return (
    <div className="table__container">
    <table className="table">
        <tbody>
          <tr>
            <th className="text header-text">ФИО</th>
            <th className="text header-text">Целевые</th>
            <th className="text header-text">Приоритет 8</th>
            <th className="text header-text">Приоритет 11</th>
          </tr>
          {uniqueSellers.map((seller, index) => (
            <tr key={index}>
              <td className="text">{seller}</td>
              <td className="text">{(units[0].filter(element => element.sellerName.trim() === seller.trim()).reduce((accum, current) => (accum += current.packageCount), 0)).toFixed(1)}</td>
              <td className="text">{(units[1].filter(element => element.sellerName.trim() === seller.trim()).reduce((accum, current) => (accum += current.packageCount), 0)).toFixed(1)}</td>
              <td className="text">{(units[2].filter(element => element.sellerName.trim() === seller.trim()).reduce((accum, current) => (accum += current.packageCount), 0)).toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
);
}
