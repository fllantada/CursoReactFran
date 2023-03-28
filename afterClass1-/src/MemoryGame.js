import React, { useState, useEffect } from "react";

const images = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
  "image6.png",
  "image7.png",
  "image8.png",
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const shuffledImages = shuffle([...images, ...images]);
    setCards(shuffledImages.map((image) => ({ image, flipped: false })));
  }, []);

  useEffect(() => {
    const firstCard = cards[selected[0]];
    const secondCard = cards[selected[1]];
    if (selected.length === 2 && firstCard.image === secondCard.image) {
      setMatched([...matched, firstCard.image]);
      setSelected([]);
    } else if (selected.length === 2) {
      setTimeout(() => {
        const newCards = cards.map((card) => {
          if (card.flipped && !matched.includes(card.image)) {
            return { ...card, flipped: false };
          }
          return card;
        });
        setCards(newCards);
        setSelected([]);
      }, 1000);
    }
  }, [cards, matched, selected]);

  const handleCardClick = (index) => {
    const card = cards[index];
    if (selected.length === 2 || matched.includes(card.image)) return;
    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    setSelected([...selected, index]);
  };

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  return (
    <div className="memory-game">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${card.flipped ? "flipped" : ""}`}
          onClick={() => handleCardClick(index)}
        >
          <div className="front" />
          <div className="back">
            <img src={`/images/${card.image}`} alt="Memory card" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemoryGame;
