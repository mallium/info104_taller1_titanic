const Pasajero = ({ pData, indice }) => {
  return (
    <div className={"pasajero " + (indice % 2 == 0 ? "fila-par" : "")}>
      <div className="pasajero-v">{pData.Survived == 0 ? "✝" : " "}</div>
      <div className="pasajero-n">{pData.Name}</div>
      <div className="pasajero-s">{pData.Sex}</div>
    </div>
  );
};

export default Pasajero;
