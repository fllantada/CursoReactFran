import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6UPhwMkPDrhYzX3C4puwPbFDUqpW30Bk",
  authDomain: "tasklist-6f12b.firebaseapp.com",
  projectId: "tasklist-6f12b",
  storageBucket: "tasklist-6f12b.appspot.com",
  messagingSenderId: "278575617927",
  appId: "1:278575617927:web:023b863ad2f30139d26522",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
