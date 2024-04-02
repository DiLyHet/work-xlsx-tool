import React, { useEffect, useState } from "react";

export default function FinalTable({ units, provizors, anotherData,setProvizors, setProvizorHetmanova }) {
  
  function zapolneniye(array) {
    const artCodes = document.querySelectorAll(".col__art-code");
    const todayNumbers = document.querySelectorAll(".col__today-number");
  
    array.forEach((unit) => {
      const { code, count } = unit;

      const index = Array.from(artCodes).findIndex(
        (element) => element.textContent ===code.toString()
      );

      /*if (index !== -1) {
        const coeficientElement = document.querySelector(`.col__coeficient[data-code="${code}"]`);

        console.log(coeficientElement);
        if (coeficientElement) {
          const coeficient = parseInt(coeficientElement.textContent);
          const soldCount = Number(count) / coeficient;
          todayNumbers[index].textContent = soldCount.toString();
          
          // Розподіл кількості проданих одиниць між провізорами
          setProvizorHetmanova(soldCount);
          // Отримання даних з інших провізорів та їхнє оновлення аналогічно
        }
      }*/
    });
  }
  
  useEffect(() => {

  
    zapolneniye(units);
  });
  return (
    <>
      <table cols="12">
        <caption>{`ТТ Богомольця   ДАТА ${new Date().getDate()}/${(
          new Date().getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}/${new Date().getFullYear()}    ТО ${
          anotherData.to
        } грн    К-ть чеків ${anotherData.check}`}</caption>
        <tbody>
          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">276335</td>
            <td className="col__name_1">Дексобел табл. п/о 25мг №10(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">319910</td>
            <td className="col__name_2">ДипХелп гель ибуп с бадягой 50мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">304124</td>
            <td className="col__name_3">Риназал спрей 1мг/мл фл. 10мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">658339</td>
            <td className="col__name_1">Амбит табл. п/о 10мг №10</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">454835</td>
            <td className="col__name_2">Ибумент гель 50г Червона зірка</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority">ПР8</td>
            <td className="col__art-code">469798</td>
            <td className="col__name_3">Риназал Экстра спрей 0,5мг 10мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">315966</td>
            <td className="col__name_1">Мелоксикам-Берк 15мг амп. №1(5)</td>
            <td className="col__coeficient">5</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">680138</td>
            <td className="col__name_2">Еврофаст Плюс гель 50г Червона</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">514219</td>
            <td className="col__name_3">Долоксен табл. п/о №10(10)</td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">692205</td>
            <td className="col__name_1">Нимесулид табл. 100мг №10 Solution </td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">672773</td>
            <td className="col__name_2">
              Долоксен Стронг гель 50мг/г туба 40г
            </td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">692027</td>
            <td className="col__name_1">Ремисар 100мг/2г саше 2г №1(30) </td>
            <td className="col__coeficient">30</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">672774</td>
            <td className="col__name_2">Долоксен Стронг гель 50мг/г 100г</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">682871</td>
            <td className="col__name_3">Безболезненность гель д/суст 50мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">461346</td>
            <td className="col__name_1">Ремесулид Рапид саше 2г №1(10) </td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">320929</td>
            <td className="col__name_2">Диклохелп гель диклофенака 50мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">119777</td>
            <td className="col__name_3">Депиофен табл. п/о 25мг №10</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">694971</td>
            <td className="col__name_1">Еврофаст Софткапс 400мг №10(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">712337</td>
            <td className="col__name_2">Диклохелп Айс гель охлажд. 50Мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">694983</td>
            <td className="col__name_3">Еврофаст Софткапс 200мг №10(2) </td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">677258</td>
            <td className="col__name_1">Парафаст капс. мягкие 500мг №10</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">446093</td>
            <td className="col__name_2">Рапира 600 саше 3г №1(10)</td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">535177</td>
            <td className="col__name_3">Праговеда мёд/имбирь №16</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">44051</td>
            <td className="col__name_1">Спазго табл. №10(10) </td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">672507</td>
            <td className="col__name_2">Рапира Эфертаб 600 табл. Шип. №10 </td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">697912</td>
            <td className="col__name_3">Праговеда апельсин №16</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">192237</td>
            <td className="col__name_1">Реналган табл. №10(2) Лекхім-Харків</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">599214</td>
            <td className="col__name_2">Муколитик Форте табл. №30</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">697913</td>
            <td className="col__name_3">Праговеда смородина №16</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">225049</td>
            <td className="col__name_1">Ниспазм форте табл. 80мг №10(2) </td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">614894</td>
            <td className="col__name_2">Инозин Прано табл. 500мг №10(4)</td>
            <td className="col__coeficient">4</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">684283</td>
            <td className="col__name_3">Лизиобакт какао №20</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">203201</td>
            <td className="col__name_1">Бронхо Веда мед-лимон №12(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">648718</td>
            <td className="col__name_2">Инозин Пранобекс сироп фл. 100мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">684444</td>
            <td className="col__name_3">Лизиобакт апельсин №20</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">203202</td>
            <td className="col__name_1">Бронхо Веда лимон №12(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">279778</td>
            <td className="col__name_2">Гропивирин табл. 500мг №10(5)</td>
            <td className="col__coeficient">5</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">23252</td>
            <td className="col__name_3">Риназал кап. 1Мг/мл фл. 10мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">203203</td>
            <td className="col__name_1">Бронхо Веда апельсин №12(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">187468</td>
            <td className="col__name_2">Гропивирин табл. 500мг №10(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">304121</td>
            <td className="col__name_3">Риназал спрей 0,5мг/мл фл. 10мл </td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">222503</td>
            <td className="col__name_1">Бронхо Веда имбирь №12(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">454532</td>
            <td className="col__name_2">Гропивирин сироп фл. 100мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">567235</td>
            <td className="col__name_3">Морская с экстр. ромашки 125мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">261302</td>
            <td className="col__name_1">Бронхо Веда черн. Смор. №12(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">152077</td>
            <td className="col__name_2">Липстер крем 5% туба 5г</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">679018</td>
            <td className="col__name_3">Диклофенак амп. 3мл №1(10)</td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">176021</td>
            <td className="col__name_1">Амилар ІС табл. д/рассасыв. №8(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">670389</td>
            <td className="col__name_2">Липстер Минт крем 5% туба 5г</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">710693</td>
            <td className="col__name_3">Кеторолак-Луб 30мг амп. 1мл №1(10)</td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">176022</td>
            <td className="col__name_1">Амилар ІС апельсин №8(2) </td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">517457</td>
            <td className="col__name_2">Липстер табл. 400мг №10(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">292981</td>
            <td className="col__name_3">Респикс табл. п/о №10(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">176023</td>
            <td className="col__name_1">Амилар ІС вишня №8(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">536506</td>
            <td className="col__name_2">Силицеа гель от герпеса на губах 2г</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority">ПЛС</td>
            <td className="col__art-code">292982</td>
            <td className="col__name_3">Респикс Л табл. №10(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">697932</td>
            <td className="col__name_1">Ислор ислан. мох №15(2) </td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">474793</td>
            <td className="col__name_2">Пробиотикс 2в1 Нов фор №10(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">637697</td>
            <td className="col__name_3">Флу.Нет саше №1(10)</td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">190055</td>
            <td className="col__name_1"> Лорангин спрей фл. 50Мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">505618</td>
            <td className="col__name_2">Пробиотикс Иммуно капс. №10(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">664421</td>
            <td className="col__name_3">АЦ-Хелп табл. шип. 600мг №10</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">577559</td>
            <td className="col__name_1">Лорасейв табл. д/расс. №10(3) </td>
            <td className="col__coeficient">3</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">718188</td>
            <td className="col__name_2">Пробиотикс 2в1 капс. №10(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">572104</td>
            <td className="col__name_3">ГербиПлюс сироп Исл мох фл. 200мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority">ПР11</td>
            <td className="col__art-code">499928</td>
            <td className="col__name_1">Лорангин р-р фл. 120мл </td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority">ПР11</td>
            <td className="col__art-code">696149</td>
            <td className="col__name_2">Лактулоза сироп 670мг/мл фл. 200Мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">572107</td>
            <td className="col__name_3">ГербиПлюс сироп Плющ фл. 200мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">18329</td>
            <td className="col__name_1">Риназолин кап. 0,25мг/мл фл. 10мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">678675</td>
            <td className="col__name_2">Актилакс Ягода сироп фл. 200Мл </td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">572105</td>
            <td className="col__name_3">ГербиПлюс Первоцвет фл. 200мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">18330</td>
            <td className="col__name_1">Риназолин кап. 0,5мг/мл фл. 10мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">677673</td>
            <td className="col__name_2">Ренилюкс табл. Апельс №10(3)</td>
            <td className="col__coeficient">3</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">572106</td>
            <td className="col__name_3">ГербиПлюс Подорожник фл. 200мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">651074</td>
            <td className="col__name_1">Риназолин спрей 0,5мг/мл фл. 10мл </td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">652379</td>
            <td className="col__name_2">Ренилюкс сусп. саше 10мл №1(20)</td>
            <td className="col__coeficient">20</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">571275</td>
            <td className="col__name_3">Исландский мох сироп фл. 200мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">456669</td>
            <td className="col__name_1">Синумакс спрей 0,05% фл. 10г</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">636379</td>
            <td className="col__name_2">Ренилюкс сусп. фл. 200мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">703784</td>
            <td className="col__name_3">Таблетки от изжоги лесн ягод №10(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">643040</td>
            <td className="col__name_1">Синумакс Силвер спрей фл. 15мл </td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">571110</td>
            <td className="col__name_2">Фосфагель гель саше 16г №1(20)</td>
            <td className="col__coeficient">20</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">703783</td>
            <td className="col__name_3">Таблетки от изжоги малина №10(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">674398</td>
            <td className="col__name_1">Синумакс Фито спрей фл. 25мл </td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">284315</td>
            <td className="col__name_2"> Панкреазим 10000 табл. №10(5)</td>
            <td className="col__coeficient">5</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">703782</td>
            <td className="col__name_3">Таблетки от изжоги мяты №10(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">662699</td>
            <td className="col__name_1">Ксилонекс спрей 1мг/мл фл. 10мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">498872</td>
            <td className="col__name_2">Панкреазим 10000 табл. №20</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">485852</td>
            <td className="col__name_3">Ренилюкс табл. Мята №10(3) </td>
            <td className="col__coeficient">3</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">72449</td>
            <td className="col__name_1">Комбигрипп саше 5г лимон №1(10)</td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">36119</td>
            <td className="col__name_2">Пульцет табл. п/о 40мг №14(2) </td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">224852</td>
            <td className="col__name_3"> Уголь акт настоящ. табл. 250мг №10</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">445040</td>
            <td className="col__name_1">Тет 36.6 Макси лимон саше №1(10)</td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">513929</td>
            <td className="col__name_2">Силицеа Гель саше 15мл №1(30) </td>
            <td className="col__coeficient">30</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">710323</td>
            <td className="col__name_3">Расторопша капс. №10(3) Solution</td>
            <td className="col__coeficient">3</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">445042</td>
            <td className="col__name_1"> Тет 36.6 акация саше 13,1г №1(10)</td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">508968</td>
            <td className="col__name_2">Анти Токсин+ гель вишня №1(20) </td>
            <td className="col__coeficient">20</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">689725</td>
            <td className="col__name_3">Артишок капс. №10(3) Solution</td>
            <td className="col__coeficient">3</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">463405</td>
            <td className="col__name_1">Тет 36.6 Рапид лимон саше №1(10)</td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">224432</td>
            <td className="col__name_2">Анти Токсин+ пор. 2г пакет-саше №1</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">540709</td>
            <td className="col__name_3">Солен р-р д/инф. 0,9% конт. 100мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">700742</td>
            <td className="col__name_1">Цитрик саше 13,60г №1(10) </td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">224854</td>
            <td className="col__name_2">Анти Токсин+ табл. 500Мг №10</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">22020</td>
            <td className="col__name_1">Грипаут табл. №10</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">693990</td>
            <td className="col__name_2">СмекАктив саше 3,26г №1(30) </td>
            <td className="col__coeficient">30</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="another-info__priority"></td>
            <td className="another-info__name_3">SUNLIFE</td>
            <td className="another-info__today-number">{`${anotherData.sunlife} грн`}</td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">307485</td>
            <td className="col__name_1">Грипфлю табл. №4(50)</td>
            <td className="col__coeficient">50</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">499081</td>
            <td className="col__name_2">Апсорбин пор. саше 3,76г №1(10)</td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="another-info__priority"></td>
            <td className="another-info__name_3">GELING</td>
            <td className="another-info__today-number">{`${anotherData.geling} грн`}</td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">470344</td>
            <td className="col__name_1">Грипфлю табл. №10</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">644407</td>
            <td className="col__name_2">Сорбент+ (Карб) белый капс. №10(2) </td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="another-info__priority"></td>
            <td className="another-info__name_3">MOBIDERM</td>
            <td className="another-info__today-number">{`${anotherData.mobiderm} грн`}</td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">470943</td>
            <td className="col__name_1">Пектолван А 15мг/5мл фл. 100мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">217883</td>
            <td className="col__name_2">Сорбент+ (Карбоактив) капс. №10(2)</td>
            <td className="col__coeficient">2</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="another-info__priority">ПЛС</td>
            <td className="another-info__name_3">NATHEALTH</td>
            <td className="another-info__today-number">{`${anotherData.nathealth} грн`}</td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">479721</td>
            <td className="col__name_1">Бронхосироп сироп фл. 100мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">325504</td>
            <td className="col__name_2">Холикс (аллохол) табл. п/о №10(5) </td>
            <td className="col__coeficient">5</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="another-info__priority"></td>
            <td className="another-info__name_3">ПАМП</td>
            <td className="another-info__today-number">{`${anotherData.pamp} грн`}</td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">523096</td>
            <td className="col__name_1">Подорожника сироп фл. 200мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">474791</td>
            <td className="col__name_2">ЭссеЛайф форте Комп капс. №10(3) </td>
            <td className="col__coeficient">3</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="another-info__priority"></td>
            <td className="another-info__name_3">BYPHASSE</td>
            <td className="another-info__today-number">{`${anotherData.byphasse} грн`}</td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">523132</td>
            <td className="col__name_1">Плюща сироп фл. 200мл </td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">577494</td>
            <td className="col__name_2">Витаргин. прим. фл. 10мл №1(10)</td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="another-info__priority"></td>
            <td className="another-info__name_3">IVATHERM</td>
            <td className="another-info__today-number">{"0 грн"}</td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">22021</td>
            <td className="col__name_1">Грипаут табл. №4 </td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">131883</td>
            <td className="col__name_2">Гепаргин р-р фл. 10мл №1(10)</td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">222454</td>
            <td className="col__name_1">Грипаут Горячий пак. 6г №1(10) </td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">673603</td>
            <td className="col__name_2">Аргетаин фл. 10мл №1(10)</td>
            <td className="col__coeficient">10</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="another-info__priority"></td>
            <td className="another-info__name_3">БОТ</td>
            <td className="another-info__today-number">
              {Number(provizors[0].botCount) +
                Number(provizors[1].botCount) +
                Number(provizors[2].botCount)}
            </td>
            <td className="another-info__what-is-it_3"></td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">705247</td>
            <td className="col__name_1">Аква Ди Маре изот. 0,9% фл. 125мл </td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">722073</td>
            <td className="col__name_2">Артишок табл. 250мг №10(8) Solution</td>
            <td className="col__coeficient">8</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="another-info__priority">!!!</td>
            <td className="another-info__name_3">ПР8</td>
            <td className="another-info__today-number">{`${anotherData.pr8} %`}</td>
          </tr>

          <tr>
            <td className="col__priority"></td>
            <td className="col__art-code">705266</td>
            <td className="col__name_1">Аква Ди Маре гип. 2,3% фл. 125мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="col__priority"></td>
            <td className="col__art-code">652681</td>
            <td className="col__name_2">Вода д/спец. мед ц. Аквасорб 950мл</td>
            <td className="col__coeficient">1</td>
            <td className="col__today-number">{}</td>
            <td className="col__what-is-it"></td>
            <td></td>

            <td className="another-info__priority"></td>
            <td className="another-info__name_3">ПР11</td>
            <td className="another-info__today-number">{`${anotherData.pr11} %`}</td>
          </tr>

          <tr>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td className="zvit__provizor-name">ПІБ</td>
            <td className="zvit__provizor-name_value">{provizors[0].name}</td>
            <td></td>

            <td className="zvit__provizor-name">ПІБ</td>
            <td className="zvit__provizor-name_value">{provizors[1].name}</td>
            <td></td>

            <td className="zvit__provizor-name">ПІБ</td>
            <td className="zvit__provizor-name_value">{provizors[2].name}</td>
          </tr>

          <tr>
            <td></td>
            <td className="zvit__provizor-fo">ФО</td>
            <td className="zvit__provizor-fo_value">{provizors[0].sopCount}</td>
            <td></td>

            <td className="zvit__provizor-fo">ФО</td>
            <td className="zvit__provizor-fo_value">{provizors[1].sopCount}</td>
            <td></td>

            <td className="zvit__provizor-fo">ФО</td>
            <td className="zvit__provizor-fo_value">{provizors[2].sopCount}</td>
          </tr>

          <tr>
            <td></td>
            <td className="zvit__provizor-ifo">і-ФО</td>
            <td className="zvit__provizor-ifo_value">
              {provizors[0].isopCount}
            </td>
            <td></td>

            <td className="zvit__provizor-ifo">і-ФО</td>
            <td className="zvit__provizor-ifo_value">
              {provizors[1].isopCount}
            </td>
            <td></td>

            <td className="zvit__provizor-ifo">і-ФО</td>
            <td className="zvit__provizor-ifo_value">
              {provizors[2].isopCount}
            </td>
          </tr>

          <tr>
            <td></td>
            <td className="zvit__provizor-kt">КТ</td>
            <td className="zvit__provizor-kt_value">{provizors[0].ptCount}</td>
            <td></td>

            <td className="zvit__provizor-kt">КТ</td>
            <td className="zvit__provizor-kt_value">{provizors[1].ptCount}</td>
            <td></td>

            <td className="zvit__provizor-kt">КТ</td>
            <td className="zvit__provizor-kt_value">{provizors[2].ptCount}</td>
          </tr>

          <tr>
            <td></td>
            <td className="zvit__provizor-fz">ФЗ</td>
            <td className="zvit__provizor-fz_value">{provizors[0].fzCount}</td>
            <td></td>

            <td className="zvit__provizor-fz">ФЗ</td>
            <td className="zvit__provizor-fz_value">{provizors[1].fzCount}</td>
            <td></td>

            <td className="zvit__provizor-fz">ФЗ</td>
            <td className="zvit__provizor-fz_value">{provizors[2].fzCount}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
