const selecBandas = ({ label, value, onChange }) => {
  const colors = [
    { name: "Negro", value: "0", multiplier: "1", tolerance: null },
    { name: "Marrón", value: "1", multiplier: "10", tolerance: "1%" },
    { name: "Rojo", value: "2", multiplier: "100", tolerance: "2%" },
    { name: "Naranja", value: "3", multiplier: "1000", tolerance: null },
    { name: "Amarillo", value: "4", multiplier: "10000", tolerance: null },
    { name: "Verde", value: "5", multiplier: "100000", tolerance: "0.5%" },
    { name: "Azul", value: "6", multiplier: "1000000", tolerance: "0.25%" },
    { name: "Violeta", value: "7", multiplier: "10000000", tolerance: "0.1%" },
    { name: "Gris", value: "8", multiplier: null, tolerance: "0.05%" },
    { name: "Blanco", value: "9", multiplier: null, tolerance: null },
    { name: "Dorado", value: "-1", multiplier: "0.1", tolerance: "5%" },
    { name: "Plata", value: "-2", multiplier: "0.01", tolerance: "10%" },
  ];

  return (
    <div className="band-selector">
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Selecciona un color</option>
        {colors.map((color) => (
          <option key={color.name} value={color.value}>
            {color.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default selecBandas;
