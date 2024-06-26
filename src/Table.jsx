import React, { useState } from "react";
import FinalTable from "./FinalTable";
import DarnitsaTable from "./DarnitsaTable";
import FarmakTable from "./FarmakTable";
import KuratorTable from "./KuratorTable";

export default function Table({
  units,
  provizors,
  anotherData,
  setArtCodes,
  setTodayNumbers,
}) {
    const [provizorHetmanova, setProvizorHetmanova] = useState(0);
    const [provizorZhidkova, setProvizorZhidkova] = useState(0);
    const [provizorOsipova, setProvizorOsipova] = useState(0);
    const [provizorKnyaz, setProvizorKnyaz] = useState(0);
    const [provizorMyakota, setProvizorMyakota] = useState(0);
  return (
    <div>
      {/* <FinalTable
        units={units}
        provizors={provizors}
        anotherData={anotherData}
        setArtCodes={setArtCodes}
        setTodayNumbers={setTodayNumbers}
        setProvizorHetmanova={setProvizorHetmanova}
        setProvizorZhidkova={setProvizorZhidkova}
        setProvizorOsipova={setProvizorOsipova}
        setProvizorKnyaz={setProvizorKnyaz}
        setProvizorMyakota={setProvizorMyakota}
      />
      <DarnitsaTable units={units} />
      <FarmakTable units={units} /> */}
      <KuratorTable
        units={units}
        provizors={provizors}
        anotherData={anotherData}
        provizorHetmanova={provizorHetmanova}
        provizorZhidkova={provizorZhidkova}
        provizorOsipova={provizorOsipova}
        provizorKnyaz={provizorKnyaz}
        provizorMyakota={provizorMyakota}
      />
    </div>
  );
}
