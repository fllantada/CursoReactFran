import { useState } from "react";
import { useContext } from "react";
import Form from "./Form";
import CursosContext from "../Context/Cursos/CursosContext";

const Login = () => {
  const [usuario, setUsuario] = useState({
    Usuario: "",
    Contraseña: "",
  });
  const { cursosData } = useContext(CursosContext);

  // const handlerChange = (evento) => {
  //   const miInputQueEstaCambiando = evento.target.name;

  //   const newUser = {
  //     ...usuario,
  //     [miInputQueEstaCambiando]: evento.target.value,
  //   };

  //   setUsuario(newUser);
  // };
  return (
    <>
      {cursosData.map((curso, index) => (
        <div key={index}>{curso}</div>
      ))}
      <Form />
    </>
  );
};

export default Login;
