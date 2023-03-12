function MiPrimerComponente() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
      }}
    >
      <h1>Titulo de componente padre</h1>
      <button>Boton</button>
      <MiSegundoComponente />
      <MiTercerComponente />
    </div>
  );
}

function MiSegundoComponente() {
  return (
    <h1 style={{ border: "1px solid red" }}>Este es mi segundo componente</h1>
  );
}

function MiTercerComponente() {
  return (
    <h1 style={{ border: "1px solid blue" }}>Este es mi tercer componente</h1>
  );
}
