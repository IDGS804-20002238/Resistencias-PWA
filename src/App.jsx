import { useState } from "react";
import "./App.css";
import BandSelector from "./selecBandas";
import ValueDisplay from "./displayValores";
import resistorImage from "./assets/resistencia.jpg"; 

const App = () => {
  const [band1, setBand1] = useState("");
  const [band2, setBand2] = useState("");
  const [band3, setBand3] = useState("");
  const [band4, setBand4] = useState("");

  const calculateResistance = () => {
    if (band1 === "" || band2 === "" || band3 === "" || band4 === "") {
      return "Selecciona todos los colores";
    }

    const value1 = parseInt(band1);
    const value2 = parseInt(band2);
    const multiplier = Math.pow(10, parseInt(band3));
    const tolerance = band4;

    const baseValue = (value1 * 10 + value2) * multiplier;
    return `${baseValue} Ω ± ${tolerance}`;
  };

  return (
    <div className="app">
      <h1>Resistencias PWA</h1>
      <img src={resistorImage} alt="Resistor" className="resistor-image" />
      <div className="band-selectors">
        <BandSelector label="Banda 1" value={band1} onChange={setBand1} />
        <BandSelector label="Banda 2" value={band2} onChange={setBand2} />
        <BandSelector label="Banda 3 (Multiplicador)" value={band3} onChange={setBand3} />
        <BandSelector label="Banda 4 (Tolerancia)" value={band4} onChange={setBand4} />
      </div>
      <ValueDisplay value={calculateResistance()} />
    </div>
  );
};

export default App;