import Tapa from "./components/tapa/Tapa";
import styles from "./app.module.css";
import Pagina from "./components/pagina/Pagina";
import { useState, useEffect } from "react";
import getContenido from "./services/getContenido";

function Libro() {
  const estadp = "cerrado";
  return (
    <>
      <div className={styles.bookContainer}>
        <h1>Mi libro ejemplo</h1>
      </div>
    </>
  );
}

export default Libro;
