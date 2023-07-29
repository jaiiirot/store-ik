// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc } from "firebase/firestore";

import {
  getDocs,
  collection,
  deleteDoc,
  updateDoc,
  addDoc,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

// ---------------------------------------------------------------

// para manejar las variable de entorno en .env en vite esta documentacion
// --> https://dev.to/whchi/how-to-use-processenv-in-vite-ho9#:~:text=The%20process%20object%20is%20a,rendering%20it%20for%20browser%20use

const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: "indkevin-6b242.firebaseapp.com",
  projectId: "indkevin-6b242",
  storageBucket: "indkevin-6b242.appspot.com",
  messagingSenderId: "827885309023",
  appId: "1:827885309023:web:d7d3460b7d9b1351f65fea",
  measurementId: "G-6PPP3WEYYQ",
};

// ---------------------------------------------------------------

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//______________________________________________________________________
// ACTIONS
const getItems = async (DATABASE) => {
  const data = await getDocs(collection(db, DATABASE));
  const items = data.docs.map((e) => {
    return { ...e.data(), id: e.id };
  });
  return items;
};

const getItemsCondition = async (DATABASE, CONDITION) => {
  const data = await getDocs(
    query(collection(db, DATABASE), where("idCategory", "==", CONDITION))
  );
  const items = data.docs.map((e) => {
    return { ...e.data(), id: e.id };
  });
  return items;
};

const getItem = async (DATABASE, ID) => {
  const data = (await getDoc(doc(db, DATABASE, ID))).data();
  return { ...data, id: ID };
};

// setDoc --> actualiza y crea pero necesita que el id se cree en ID
const setItem = async (DATABASE, ID, CONTENT) => {
  return await setDoc(doc(db, DATABASE, ID), CONTENT);
};

// addDoc --> el id es creado por firestore y y crea el campo
const addItem = async (CONTENT) => {
  const response = await addDoc(collection(db, "catalogo"), CONTENT);
  return response;
};

const deleteItem = async (DATABASE, ID) => {
  return await deleteDoc(doc(db, DATABASE, ID));
};

export {
  getItems,
  getItem,
  db,
  deleteItem,
  setItem,
  addItem,
  getItemsCondition,
};
