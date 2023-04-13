import { useState, useRef, useEffect } from "react";

const Login = () => {
  const [usuario, setUsuario] = useState({
    Usuario: "",
    Contraseña: "",
  });

  useEffect(() => {
    //se ejecuta cuando se monta el componente
    window.addEventListener("keypress", funcionEjecutar);
    return () => {
      //se ejecuta cuando se desmonta el componente
      window.removeEventListener("keypress", funcionEjecutar);
    };
  }, []);

  const funcionEjecutar = (evento) => {
    if (evento.key === "1") {
      alert("hola");
    }
    if (evento.key === "2") {
      alert("chau");
    }
  };

  const handlerChange = (evento) => {
    const miInputQueEstaCambiando = evento.target.name;

    const newUser = {
      ...usuario,
      [miInputQueEstaCambiando]: evento.target.value,
    }; //usuario  contraseña

    setUsuario(newUser);
  };
  return (
    <main
      style={{ backgroundColor: "grey" }}
      onClick={() => {
        console.log("Hice Click en main");
      }}
    >
      <h1>Usuario</h1>
      <label htmlFor="input1">
        Usuario <input id={"input1"} name="Usuario" onBlur={handlerChange} />
      </label>
      <h1>Contraseña</h1>
      <Form handler={handlerChange} />
      <p> Usuario : {usuario.Usuario} </p>{" "}
      <p> Contraseña : {usuario.Contraseña}</p>
    </main>
  );
};

export default Login;

function Form(props) {
  const handleSubmmit = (evento) => {
    evento.preventDefault();
    evento.stopPropagation();
  };
  return (
    <form>
      <label htmlFor="Usuario"> Usuario </label>
      <input name="Contraseña" onChange={props.handler} />
      <button onClick={handleSubmmit} type="submit">
        {" "}
        ENVIAR FORMULARIO
      </button>
    </form>
  );
}
