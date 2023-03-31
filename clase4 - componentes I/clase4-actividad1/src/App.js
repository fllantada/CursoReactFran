import "./App.css";
import Button from "./components/Button/Button";
import { useState } from "react";

function App() {
  //App --->   Primer estado es que mi fondo es VERDE
  //App --->   Segundo estado es que mi fondo es AZUL
  console.log("Padre modificado");

  // const data = useState("green"); // useState me devuelve [valor, funcionDeActualizacion]
  // const nuevoColor = data[0]; // valor
  // const setNuevoColor = data[1]; // funcionDeActualizacion

  const [colorFondo, setNuevoColor] = useState("green");

  //const nuevoColor = "green";

  return (
    <div className="App" style={{ backgroundColor: `${colorFondo}` }}>
      <Button color="blue" label="mi boton1" callback={setNuevoColor} />
      <Button color="red" label="mi boton2" callback={setNuevoColor} />
    </div>
  );
}

export default App;
