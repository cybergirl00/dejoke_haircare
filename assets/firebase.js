// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx1qg2311uRq9V9L60gwH0bZrakgB9tI0",
  authDomain: "dejokehaircare.firebaseapp.com",
  projectId: "dejokehaircare",
  storageBucket: "dejokehaircare.appspot.com",
  messagingSenderId: "1003085890678",
  appId: "1:1003085890678:web:17b0471ff17d355f10cb57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)