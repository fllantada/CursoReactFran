import Tapa from "./components/tapa/Tapa";
import styles from "./app.module.css";
import Pagina from "./components/pagina/Pagina";
import { useState, useEffect } from "react";
import getContenido from "./services/getContenido";

function Libro() {
  const [estado, setEstado] = useState("abierto");
  const [input, setInput] = useState("");
  const [tituloLibro, setTituloLibro] = useState("Mi libro");

  //uso de useEffect

  useEffect(() => {
    //este codigo corre una sola vez
    //obtener datos externos. (API, archivos, etc)
    console.log("Se monto por primera vez el componente");
    let data = getContenido();
    console.log(data);
  }, []);

  useEffect(() => {
    //este codigo se ejecuta solamente cunado cambia la bariable
    //estado que estoy pasando como segundo parametro
    console.log("la variable estado cambio");
  }, [estado]);

  //handlers (funciones que manejan eventos)
  const handleAbrir = (e) => {
    if (estado === "cerrado") {
      setEstado("abierto");
    }
    if (estado === "abierto") {
      setEstado("cerrado");
    }
  };

  const handleChange = (event) => {
    console.log(event);
    setInput(event.target.value);
    setTituloLibro(event.target.value);
  };

  return (
    <>
      <div className={styles.navContainer}>
        <button>Anterior</button>
        <button onClick={handleAbrir}>
          {estado === "cerrado" ? "Abrir Libro" : "Cerrar Libro"}
        </button>
        <button>Siguiente</button>
      </div>
      <div className={styles.inputContainer}>
        <input type="text" value={input} onChange={handleChange} />
      </div>
      <div className={styles.bookContainer}>
        {estado === "cerrado" && <Tapa titulo={tituloLibro} />}
        {estado === "abierto" && <Pagina />}
      </div>
    </>
  );
}

export default Libro;
