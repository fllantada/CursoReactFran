import React, { useState, useEffect } from "react";
import getMemoryCards from "./services/getMemoryCards";

const MemoryGame = () => {
  const [cards, setCards] = useState([]);

  //recursos externos que voy a necesitar

  useEffect(() => {}, []);

  console.log(cards);

  return <div> Bienvenido a mi juego</div>;
};

export default MemoryGame;
