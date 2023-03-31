import React, { useState, useEffect } from "react";
import getMemoryCards from "./services/getContenido";

const MemoryGame = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const imagesPromise = getMemoryCards(10);
    imagesPromise.then((images) => {
      setCards(images);
    });
  }, []);

  console.log(cards);

  return (
    <div>
      {cards.map((card, index) => {
        return <img src={card} alt="card" key={index} />;
      })}
    </div>
  );
};

export default MemoryGame;
