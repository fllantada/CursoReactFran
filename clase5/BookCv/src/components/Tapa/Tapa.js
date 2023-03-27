import styles from "./home.module.css";

function Tapa({ name = "Francisco Llantada" }) {
  //logica javascript

  //JSX
  return (
    <p className={styles.parrafo}>Hola, soy {name} y esta es mi historia...</p>
  );
}

export default Tapa;
