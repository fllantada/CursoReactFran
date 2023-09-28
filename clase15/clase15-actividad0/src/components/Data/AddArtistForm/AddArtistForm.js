import { useRef } from "react";
import { guardarArtista } from "../services/guardarArtista";

function AddArtistForm() {
  const inputArtista = useRef(null);
  const inputTipo = useRef(null);

  const handleAgregarArtista = () => {
    const nuevoArtista = {
      artista: inputArtista.current.value,
      tipo: inputTipo.current.value,
    };
    guardarArtista(nuevoArtista);
    inputArtista.current.value = "";
    inputTipo.current.value = "";
  };

  return (
    <div>
      <input ref={inputArtista} placeholder="ingrese artista" />
      <input ref={inputTipo} placeholder="ingrese tipo" />
      <button onClick={handleAgregarArtista}>agregar</button>
    </div>
  );
}
export default AddArtistForm;
