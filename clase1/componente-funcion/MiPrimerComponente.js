function MiPrimerComponente() {
  return (
    <div className='mi padre'>
      <h1>Hey luke i am your father </h1>
      <MiSegundoComponente varaible1={() => "Esto es una prop"} />
    </div>
  );
}

function MiSegundoComponente(props) {
  return (
    <div>
      <p style={{ border: "1px solid red" }}>
        {props.varaible1()}
        <MiTercerComponente />
      </p>
    </div>
  );
}

function MiTercerComponente() {
  return (
    <h1 style={{ border: "1px solid blue" }}>Este es mi tercer componente</h1>
  );
}
