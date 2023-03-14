function MiPrimerComponente() {
  return (
    <div className='mi padre'>
      <h1>Hey luke i am your father </h1>
      <MiSegundoComponente />
      <MiSegundoComponente />
      <MiSegundoComponente />
      <MiSegundoComponente />
      <MiSegundoComponente />
    </div>
  );
}

function MiSegundoComponente() {
  return (
    <p style={{ border: "1px solid red" }}>Este es mi segundo componente</p>
  );
}

function MiTercerComponente() {
  return (
    <h1 style={{ border: "1px solid blue" }}>Este es mi tercer componente</h1>
  );
}
