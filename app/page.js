import titanic from "./data/titanic.json";
import Pasajero from "./components/pasajero";
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
          <Pasajero key={i} indice={i} pData={e} />
        ))}
      </div>
    </div>
  );
}
