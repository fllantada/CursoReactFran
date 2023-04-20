import React from "react";
import Styles from "./Cursos.module.css";
import { useContext } from "react";
import { CursosContext } from "../../context/CursosContextProvider";

function Cursos() {
  const { cursosData } = useContext(CursosContext);

  const specialStyles = {
    backgroundColor: cursosData[0] == "Mi Curso Rojo" ? "red" : "blue",
  };

  const variable = "hola";

  const palabra = `palabra1 ${
    cursosData.length > 3 ? Styles.exedido : Styles.normal
  } palabra2`;

  return (
    <div>
      <h2>{palabra}</h2>

      {cursosData.length === 1 && <HayUnCursos />}
      {cursosData.length === 4 && <HayMuchosCursos />}
      {/* <ImprimirCursos cursos={cursosData} /> */}

      {cursosData.length === 0 ? (
        <NoHayCursos />
      ) : (
        <div className={palabra}>
          <ImprimirCursos cursos={true ? cursosData : ["cursosMock"]} />
        </div>
      )}
    </div>
  );
}

function ImprimirCursos({ cursos }) {
  return cursos.map((curso, index) => <p key={index}>{curso}</p>);
}

function NoHayCursos() {
  return <p>No hay cursos</p>;
}
function HayUnCursos() {
  return <p>Hay un curso</p>;
}
function HayMuchosCursos() {
  return <p>SACADO TENES DEMASIADOS CURSOS</p>;
}

export default Cursos;
