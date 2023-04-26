// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHiXJydml4G8exrWNBD_ryR7fbzwCSa2k",
  authDomain: "mi-e-comerce.firebaseapp.com",
  projectId: "mi-e-comerce",
  storageBucket: "mi-e-comerce.appspot.com",
  messagingSenderId: "184610762872",
  appId: "1:184610762872:web:c453fec25aefcaf62c3d8d",
};

// Initialize Firebase
console.log("0) Estoy configurando mi firebase con el objeto:", firebaseConfig);

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
