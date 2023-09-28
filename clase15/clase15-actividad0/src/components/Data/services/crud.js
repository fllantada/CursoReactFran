import db from "../../../config/firebase";

import {
  collection,
  getDocs,
  addDoc,
  where,
  query,
  updateDoc,
  doc,
} from "firebase/firestore";
import { fromDbToApp, fromAppToDb } from "../adapters/dataAdapter";

//create
export const guardameEstaData = async (que, donde) => {
  const collectionRef = collection(db, donde);

  const response = await addDoc(collectionRef, que);
};

//query general
export const dameTodaLaData = async (donde) => {
  const collectionRef = collection(db, donde);
  const queryRef = query(collectionRef);
  const result = await getDocs(queryRef);

  const dataAdapted = result.docs.map((doc) => fromDbToApp(doc));
  console.log(dataAdapted);
  return dataAdapted;
};

export const getAll = async () => {
  const collectionRef = collection(db, "Artistas");
  const queryRef = query(collectionRef);
  const result = await getDocs(queryRef);
  const dataAdapted = result.docs.map((doc) => fromDbToApp(doc));
  console.log(dataAdapted);
  return dataAdapted;
};

export const cambiarPop = async (id) => {
  const docRef = doc(db, "Artistas", id);

  const response = await updateDoc(docRef, {
    tipo: "Rock",
  });
  return response;
};
//cambiar Rock cambiar a Pop cambiar a Reggaeton....  DRY

export const cambiarTipo = async (id, tipo) => {
  const docRef = doc(db, "Artistas", id);

  const response = await updateDoc(docRef, {
    tipo: tipo,
  });
  return response;
};

export const modificameEstaData = async (que, donde) => {
  // 1) Modifico el objeto de App para que sea como el de base de datos
  const dataAdapted = fromAppToDb(que);

  const docRef = doc(db, donde, dataAdapted.id);

  const response = await updateDoc(docRef, {
    [dataAdapted.artista]: dataAdapted.artista.toUpperCase(),
  });

  return response;
};

export const eliminameEstaData = async (que, donde) => {};

//query con filtro
export const dameTodaLaDataRock = async (donde) => {
  const collectionRef = collection(db, donde);
  const queryRef = query(collectionRef, where("tipo", "==", "rock"));
  const result = await getDocs(queryRef);
  const dataAdapted = result.docs.map((doc) => fromDbToApp(doc));
  console.log(dataAdapted);
  return dataAdapted;
};
