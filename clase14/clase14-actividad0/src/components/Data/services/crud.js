import db from "../../../config/firebase";
import { createTaskAdaptedFromFirestore } from "../../../adapters/taskAdapter";

import {
  collection,
  getDocs,
  getDoc,
  query,
  orderBy,
  doc,
} from "firebase/firestore";

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

function getAllData() {}

function postData() {}

function getData() {}

function updateData() {}

function deleteData() {}
