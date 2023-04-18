import React, { useContext, useState } from "react";
import CursosContext from "../Context/Cursos/CursosContext";

function Form() {
  const [newCurso, setNewCurso] = useState("");
  const { agregarCurso } = useContext(CursosContext);

  const handlerChange = (evento) => {
    evento.preventDefault();
    setNewCurso(evento.target.value);
  };

  const handleClick = (evento) => {
    //evento.preventDefault();
    console.log(newCurso);
    agregarCurso(newCurso);
  };

  return (
    <form>
      <label htmlFor="Usuario"> Usuario </label>
      <input name="NuevoCurso" onChange={handlerChange} />
      <button onClick={handleClick}>Agregar Curso</button>
    </form>
  );
}

export default Form;
