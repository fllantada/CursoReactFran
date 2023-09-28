import db from "../../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export const guardarArtista = async (artista) => {
  const collectionRef = collection(db, "Artistas");
  const response = await addDoc(collectionRef, artista);
  return response;
};
