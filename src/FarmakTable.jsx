import React from "react";

export default function FarmakTable({ units }) {
    let farmakUnits=[];
  units.forEach(element => {
    if(element.name.includes("Фармак")&&!element.name.includes("Фармаком")){
        farmakUnits.push(element);
    }
  });
  console.log(farmakUnits);

  return (
    <table>
      <caption>Фармак</caption>

      {farmakUnits.map((element) => {
        return (
          <tr>
            <td></td>
            <td className="farmak__art-code">{element.code}</td>
            <td className="farmak__name">{element.name}</td>
            <td className="farmak__today-number">{element.count}</td>
            <td className="farmak__provizor">{element.sellerName}</td>
            <td></td>{" "}
          </tr>
        );
      })}
    </table>
  );
}
