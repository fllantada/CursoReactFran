import React, { useState, useEffect } from "react";

import Container from "./components/Container/Container";
import Title from "./components/Title/Title";
import Puntuacion from "./components/Puntuacion/Puntuacion";
import Tablero from "./components/Tablero/Tablero";

const MemoryGame = () => {
  //recursos externos que voy a necesitar

  return (
    <Container>
      {" "}
      <img src="images/samsung20.jpg" />
      <Title text="Bienvenido a mi juego" />
      <Puntuacion />
      <Tablero cartas={8} />
    </Container>
  );
};

export default MemoryGame;
