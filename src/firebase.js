import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEIm_wSD9Ycm0RyKwKW8nJVsFj2nvRZOs",
  authDomain: "rohit-react-protfolio.firebaseapp.com",
  projectId: "rohit-react-protfolio",
  storageBucket: "rohit-react-protfolio.appspot.com",
  messagingSenderId: "646980465082",
  appId: "1:646980465082:web:7e8ad3ba481fb671c5ad83"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
