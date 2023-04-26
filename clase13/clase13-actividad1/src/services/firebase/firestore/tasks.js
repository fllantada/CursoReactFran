import {
  collection,
  getDocs,
  getDoc,
  query,
  orderBy,
  doc,
} from "firebase/firestore";
import { createTaskAdaptedFromFirestore } from "../../../adapters/taskAdapter";
import db from "./firebase";

//par ami servicio necesito la instancia de la base de datos

export const getTasks = async () => {
  //paso 0 en la contrucion de db

  const collectionRef = collection(db, "productos");

  console.log("1)Creo collectionRef", collectionRef);

  const queryRef = query(collectionRef); //de productos traeme todo

  console.log("2)Creo la query", queryRef); //de products quiero todo

  const queryResult = await getDocs(queryRef); // buscar en firestore

  console.log("3)Ejecuto la query", queryResult.docs.length);

  const tasksAdapted = queryResult.docs.map((doc) =>
    createTaskAdaptedFromFirestore(doc)
  );

  console.log("6)Tengo los resultados mapeados", tasksAdapted);

  return tasksAdapted;
};

export const getTaskById = async (taskId) => {
  // Paso 1: Obtener la referencia al documento en Firestore
  const docRef = doc(db, "tasks", taskId);

  console.log("1) Creo dockRef", docRef);

  // Paso 2: Obtener el documento de Firestore
  const taskSnapshot = await getDoc(docRef);

  console.log("2) Ejecuto getDoc", taskSnapshot);

  // Paso 3: Convertir el documento de Firestore en un objeto adaptado
  const taskAdapted = createTaskAdaptedFromFirestore(taskSnapshot);

  console.log("3) Convertir el documento a objeto adaptado", taskAdapted);

  return taskAdapted;
};
