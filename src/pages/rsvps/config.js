// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU_X-8ZlKexISWpDpkjPVqofumYQcRDlI",
  authDomain: "david34-5a90b.firebaseapp.com",
  projectId: "david34-5a90b",
  storageBucket: "david34-5a90b.firebasestorage.app",
  messagingSenderId: "935892852821",
  appId: "1:935892852821:web:f8bd253fe5a6c02d6cb4dc",
  measurementId: "G-CJ6RTLHW8P"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
