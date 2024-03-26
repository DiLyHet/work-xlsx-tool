import React from "react";

export default function DarnitsaTable({ units }) {
  let darnitsaUnits = [];
  units.forEach((element) => {
    if (element.name.includes("Дарниця")) {
      darnitsaUnits.push(element);
    }
  });
  console.log(darnitsaUnits);

  return (
    <table>
      <caption>Дарниця</caption>

      {darnitsaUnits.map((element) => {
        return (
          <tr>
            <td></td>
            <td className="darnitsa__art-code">{element.code}</td>
            <td className="darnitsa__name">{element.name}</td>
            <td className="darnitsa__today-number">{element.count}</td>
            <td className="darnitsa__provizor">{element.sellerName}</td>
            <td></td>{" "}
          </tr>
        );
      })}
    </table>
  );
}
