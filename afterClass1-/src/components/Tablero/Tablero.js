import styles from "./Tablero.module.css";
import { useEffect, useState } from "react";
import getMemoryCards from "../../services/getMemoryCards";
import Cartas from "../Cartas/Cartas";

function Tablero(props) {
  const [cartas, setCartas] = useState([]);

  useEffect(() => {
    const cardPromise = getMemoryCards(props.cartas / 2);

    cardPromise.then((urls) => {
      const dataModel = [];
      console.log(urls);
      for (let i = 0; i < urls.length; i++) {
        dataModel.push({ url: urls[i], id: i, estado: "oculta" });
        dataModel.push({ url: urls[i], id: i + 10, estado: "oculta" });
      }
      const dataModelShuffled = dataModel.sort(() => Math.random() - 0.5);

      setCartas(dataModelShuffled);
    });
  }, []);

  const handleSelect = (id) => {
    const newCartas = cartas.map((carta) => {
      if (carta.id === id) {
        return { ...carta, estado: "visible" };
      }
      return carta;
    });

    setCartas(newCartas);

    console.log(id);
  };

  return (
    <div className={styles.contenedor}>
      {" "}
      {cartas &&
        cartas.map((carta) => (
          <Cartas carta={carta} handleSelect={handleSelect} />
        ))}
    </div>
  );
}

export default Tablero;
