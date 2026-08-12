"use client";
import titanic from "./data/titanic.json";
import Pasajero from "./components/pasajero";
import { useState } from "react";

export default function Home() {
  let nSurvived = 0;
  titanic.map((e) => {
    if (e.Survived == 1) nSurvived++;
  });

  const [onlySurvived, setOnlySurvived] = useState(false);
  const [nSel, setNSel] = useState(1);

  const handleClick = () => {
    setOnlySurvived(!onlySurvived);
  };
  const handleSeleccion = (sel) => {
    if (sel) setNSel(nSel + 1);
    else setNSel(nSel - 1);
  };

  return (
    <div>
      <h1>Pasajeros del Titanic</h1>
      <div>Sobrevivieron {nSurvived}</div>
      <div>
        <button onClick={handleClick}>ver sólo los sobrevivientes</button>
      </div>
      <div>Seleccionados: {nSel}</div>
      <div>
        {titanic.map(
          (e, i) =>
            (!onlySurvived || e.Survived == 1) && (
              <Pasajero
                key={i}
                indice={i}
                pData={e}
                handleSeleccion={handleSeleccion}
              />
            ),
        )}
      </div>
    </div>
  );
}
