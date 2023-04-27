import { useEffect, useRef, useState } from "react";
import {
  guardameEstaData,
  dameTodaLaData,
  dameTodaLaDataRock,
  modificameEstaData,
} from "./services/crud";

function DataContainer() {
  const [data, setData] = useState([]);
  const inputArtista = useRef(null);
  const inputTipo = useRef(null);
  const inputBusqueda = useRef(null);

  useEffect(() => {}, []);

  const handleModificarArtista = (artista) => {
    modificameEstaData(artista, "artistasVarios").then((data) => {
      console.log("termino promesa modificar", data);
    });
  };
  const handleAgregarArtista = (e) => {
    const data = {
      artista: inputArtista.current.value,
      tipo: inputTipo.current.value,
    };
    console.log(data);

    guardameEstaData(data, "artistasVarios");
    inputArtista.current.value = "";
  };
  const handleDameTodaLaData = (e) => {
    const data = dameTodaLaDataRock("artistasVarios").then((data) => {
      setData(data);
    });
  };
  const handleCheckArtista = (e) => {
    let artista = inputArtista.current.value;
    let tipo = inputTipo.current.value;

    if (artista.length < 3) {
      console.log("El artista debe tener al menos 3 caracteres");
      return;
    }
  };

  return (
    <div>
      <h1>Este es el DataContainer</h1>
      <br />
      <input
        onBlur={handleCheckArtista}
        ref={inputArtista}
        type="test"
        placeholder="ingrese artista"
      />

      <br />
      <input ref={inputTipo} type="test" placeholder="ingrese tipo" />
      <br />
      <button onClick={handleAgregarArtista}>agregar</button>
      <br />

      <br />

      <button onClick={handleDameTodaLaData}>Dame Toda la data</button>
      <br />
      <br />

      {data?.length &&
        data.map((artista) => (
          <div
            onClick={(e) => handleModificarArtista(artista)}
            key={artista.artistaId}
          >
            <h3>{artista.artistaInfo.artista}</h3>
            <h3>{artista.artistaInfo.tipo}</h3>
          </div>
        ))}
      <br />
      <input ref={inputBusqueda} type="test" placeholder="ingrese artista" />
      <button>Buscar</button>
      <br />
      <br />
      <br />
      <input type="test" placeholder="ingrese artista" />
      <button>enrvia</button>
    </div>
  );
}

export default DataContainer;
