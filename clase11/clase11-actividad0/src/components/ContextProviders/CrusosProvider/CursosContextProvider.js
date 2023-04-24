import React from "react";
import CursosContext from "../../Context/Cursos/CursosContext";
import { useEffect, useState } from "react";

//crea la variable pepino y le asigna o la linquea al export default

function CursosContextProvider({ children }) {
  const [cursosData, setCursosData] = useState([""]);

  const agregarCurso = (curso) => {
    console.log("desde el context provider", curso);

    //maxiTip : Corroborar si existe el curso
    const newCursos = [...cursosData, curso];
    setCursosData(newCursos);
  };

  const eliminarCurso = (curso) => {
    const newCursos = cursosData.filter((c) => c !== curso);
    setCursosData(newCursos);
  };

  return (
    <CursosContext.Provider value={{ cursosData, eliminarCurso, agregarCurso }}>
      {children}
    </CursosContext.Provider>
  );
}

export default CursosContextProvider;
