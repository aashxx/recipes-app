// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDxq_Y-15aPJ4-0hVkedODA_mjk_mO_GDE",
  authDomain: "nutriverse-ff301.firebaseapp.com",
  projectId: "nutriverse-ff301",
  storageBucket: "nutriverse-ff301.appspot.com",
  messagingSenderId: "298825236832",
  appId: "1:298825236832:web:8c385d5e37f772d6d4de05"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };