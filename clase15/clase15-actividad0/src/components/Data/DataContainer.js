import { useState } from "react";
import AddArtistForm from "./AddArtistForm/AddArtistForm";
import { getAll, cambiarPop, cambiarTipo } from "./services/crud";

function DataContainer() {
  const [data, setData] = useState([]);

  const handleGetAll = (e) => {
    getAll().then((data) => {
      setData(data);
    });
  };

  const handleCambiarPop = (id) => {
    // cambiar el tipo de artista a pop
    cambiarTipo(id, "REGGasdasdase").then((response) => {
      handleGetAll();
    });
  };

  return (
    <div>
      <h1>Artistas de Musica</h1>
      <h2>Ingresar Artista</h2>

      <AddArtistForm />

      <button onClick={handleGetAll}>Dame Toda la data</button>

      {data?.length > 0 &&
        data.map((artista) => (
          <div style={{ border: "2px solid black" }} key={artista.artistaId}>
            <h3>{artista.artistaInfo.artista} </h3>
            <h3>{artista.artistaInfo.tipo}</h3>
            <button onClick={(e) => handleCambiarPop(artista.artistaId)}>
              cambiar a Pop
            </button>
          </div>
        ))}
    </div>
  );
}

export default DataContainer;
