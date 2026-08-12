import titanic from "./data/titanic.json";

export default function Home() {
  let nSurvived = 0;
  titanic.map((e) => {
    if (e.Survived == 1) nSurvived++;
  });

  return (
    <div>
      <h1>Pasajeros del Titanic</h1>
      <div>Sobrevivieron {nSurvived}</div>
      <div>
        {titanic.map((e, i) => (
          <div className={"pasajero " + (i % 2 == 0 ? "fila-par" : "")} key={i}>
            <div className="pasajero-v">{e.Survived == 0 ? "✝" : " "}</div>
            <div className="pasajero-n">{e.Name}</div>
            <div className="pasajero-s">{e.Sex}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
