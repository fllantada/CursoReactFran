import Tapa from "./components/tapa/Tapa";
import styles from "./app.module.css";
import Pagina from "./components/pagina/Pagina";
import { useState, useEffect, useRef } from "react";
import getContenido from "./services/getContenido";
import checkTitle from "./services/checkUser";

function Libro() {
  const [estado, setEstado] = useState("abierto");
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const [contenido, setContenido] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tituloLibro, setTituloLibro] = useState("Mi libro");

  useEffect(() => {
    const contenido = getContenido();

    //data es una Promesa que esta en pending
    contenido
      .then((contenidoLibro) => {
        setContenido(contenidoLibro);
        console.log(contenidoLibro);
        setLoading(false);
      })
      .catch((errores) => {
        console.log(errores);
      });

    //console.log("Se esta ejecutando useEffect");
  }, [tituloLibro]);

  console.log("ME estoy renderizando nuevamente");

  //  useEffect(() => {}, [estado]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  const handleAbrir = (e) => {
    if (estado === "cerrado") {
      setEstado("abierto");
    }
    if (estado === "abierto") {
      setEstado("cerrado");
    }
  };
  const handleClick = (e) => {
    console.log(inputRef.current.value);
    setTituloLibro(inputRef.current.value);
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
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Cambiar titulo</button>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
      <div className={styles.bookContainer}>
        {estado === "cerrado" && <Tapa titulo={tituloLibro} />}
        {estado === "abierto" && <Pagina contenido={contenido[0]} />}
      </div>
    </>
  );
}

export default Libro;
