import logo from "./logo2.svg";
import React, { useState } from "react";
import { XLSXInput } from "./XlsxLogic";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function Form({ units, provizors, anotherData, setUnits }) {
    
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Продажи</p>
      <XLSXInput units={units} setUnits={setUnits} />
      <form>
        <table>
          <tbody>
            <tr>
              <td>ФИО</td>
              <td>СОП</td>
              <td>иСОП</td>
              <td>ПТ</td>
              <td>ФЗ</td>
              <td>Бот</td>
            </tr>
            <tr>
              <td>
                <select
                  name="name"
                  id="name"
                  onChange={(event) =>
                    (provizors[0].name = event.target.value)
                  }>
                  <option>Провизор</option>
                  <option>Жидкова О. Ю.</option>
                  <option>Осипова В. Ю.</option>
                  <option>Князь Л. Т.</option>
                  <option>Гетманова Л. С.</option>
                  <option>Мякота В. А.</option>
                </select>
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"sopCount"}
                  onChange={(event) =>
                    (provizors[0].sopCount = event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"isopCount"}
                  onChange={(event) =>
                    (provizors[0].isopCount = event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"ptCount"}
                  onChange={(event) =>
                    (provizors[0].ptCount = event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"fzCount"}
                  onChange={(event) =>
                    (provizors[0].fzCount = event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"botCount"}
                  onChange={(event) =>
                    (provizors[0].botCount = event.target.value)
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <select
                  name="name"
                  id="name"
                  onChange={(event) =>
                    (provizors[1].name = event.target.value)
                  }>
                  <option>Провизор</option>
                  <option>Жидкова О. Ю.</option>
                  <option>Осипова В. Ю.</option>
                  <option>Князь Л. Т.</option>
                  <option>Гетманова Л. С.</option>
                  <option>Мякота В. А.</option>
                </select>
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"sopCount"}
                  onChange={(event) =>
                    (provizors[1].sopCount = event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"isopCount"}
                  onChange={(event) =>
                    (provizors[1].isopCount = event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"ptCount"}
                  onChange={(event) =>
                    (provizors[1].ptCount = event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"fzCount"}
                  onChange={(event) =>
                    (provizors[1].fzCount = event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"botCount"}
                  onChange={(event) =>
                    (provizors[1].botCount = event.target.value)
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <select
                  name="name"
                  id="name"
                  onChange={(event) =>
                    (provizors[2].name = event.target.value)
                  }>
                  <option>Провизор</option>
                  <option>Жидкова О. Ю.</option>
                  <option>Осипова В. Ю.</option>
                  <option>Князь Л. Т.</option>
                  <option>Гетманова Л. С.</option>
                  <option>Мякота В. А.</option>
                </select>
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"sopCount"}
                  onChange={(event) =>
                    (provizors[2].sopCount = event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"isopCount"}
                  onChange={(event) =>
                    (provizors[2].isopCount = event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"ptCount"}
                  onChange={(event) =>
                    (provizors[2].ptCount = event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"fzCount"}
                  onChange={(event) =>
                    (provizors[2].fzCount = event.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className={"salesInput"}
                  type={"number"}
                  name={"botCount"}
                  onChange={(event) =>
                    (provizors[2].botCount = event.target.value)
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td>Sunlife</td>
              <td>
                <input
                  type="number"
                  onChange={(event) =>
                    (anotherData.sunlife = event.target.value)
                  }></input>
              </td>
              <td>грн</td>
            </tr>
            <tr>
              <td>NatHealth</td>
              <td>
                <input
                  type="number"
                  onChange={(event) =>
                    (anotherData.nathealth = event.target.value)
                  }></input>
              </td>
              <td>грн</td>
            </tr>
            <tr>
              <td>Byphasse</td>
              <td>
                <input
                  type="number"
                  onChange={(event) =>
                    (anotherData.byphasse = event.target.value)
                  }></input>
              </td>
              <td>грн</td>
            </tr>
            <tr>
              <td>ПАМП</td>
              <td>
                <input
                  type="number"
                  onChange={(event) =>
                    (anotherData.pamp = event.target.value)
                  }></input>
              </td>
              <td>грн</td>
            </tr>
            <tr>
              <td>Geling</td>
              <td>
                <input
                  type="number"
                  onChange={(event) =>
                    (anotherData.geling = event.target.value)
                  }></input>
              </td>
              <td>грн</td>
            </tr>
            <tr>
              <td>Mobiderm</td>
              <td>
                <input
                  type="number"
                  onChange={(event) =>
                    (anotherData.mobiderm = event.target.value)
                  }></input>
              </td>
              <td>грн</td>
            </tr>
            <tr></tr>
            <tr>
              <td>Выручка</td>
              <td>
                <input
                  type="number"
                  onChange={(event) =>
                    (anotherData.to = event.target.value)
                  }></input>
              </td>
              <td>грн</td>
            </tr>
            <tr>
              <td>Чеки</td>
              <td>
                <input
                  type="number"
                  onChange={(event) =>
                    (anotherData.check = event.target.value)
                  }></input>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>ПР 8</td>
              <td>
                <input
                  type="number"
                  onChange={(event) =>
                    (anotherData.pr8 = event.target.value)
                  }></input>
              </td>
              <td>%</td>
            </tr>
            <tr>
              <td>ПР 11</td>
              <td>
                <input
                  type="number"
                  onChange={(event) =>
                    (anotherData.pr11 = event.target.value)
                  }></input>
              </td>
              <td>%</td>
            </tr>
          </tbody>
        </table>
        <button>
          <Link to={"/zvit"}>СОЗДАТЬ ОТЧЁТ</Link>
        </button>
      </form>
    </div>
  );
}
