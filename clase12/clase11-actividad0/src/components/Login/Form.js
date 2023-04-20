import React, { useContext, useState } from "react";
import { CursosContext } from "../../context/CursosContextProvider";

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
    setNewCurso("");
    //
  };

  return (
    <>
      <label htmlFor="Usuario"> Usuario </label>
      <input value={newCurso} name="NuevoCurso" onChange={handlerChange} />
      <button onClick={handleClick}>Agregar Curso</button>
    </>
  );
}

export default Form;
