"use client";
import { useState, useEffect } from "react";
const Pasajero = ({ pData, indice, handleSeleccion }) => {
  const [sel, setSel] = useState(false);

  const handleClick = () => {
    setSel(!sel);
    //handleSeleccion(sel);
  };

  useEffect(() => {
    handleSeleccion(sel);
  }, [sel]);

  return (
    <div
      onClick={handleClick}
      className={
        "pasajero " +
        (indice % 2 == 0 ? "fila-par " : " ") +
        (sel ? "seleccionado " : " ")
      }
    >
      <div className="pasajero-v">{pData.Survived == 0 ? "✝" : " "}</div>
      <div className="pasajero-n">{pData.Name}</div>
      <div className="pasajero-s">{pData.Sex}</div>
    </div>
  );
};

export default Pasajero;
