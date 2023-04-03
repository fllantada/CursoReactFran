import React from "react";
import Container from "./components/container/Container";
import getData from "./services/getData";

function App() {
  getData();
  return (
    <>
      <Container>
        <h1>Solicitud de servicios</h1>
        <input type="text" placeholder="Escribí algo acá..." />
      </Container>
    </>
  );
}

export default App;
