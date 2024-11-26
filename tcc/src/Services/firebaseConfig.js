import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUEjI-loQYVe-a00tnULOdwMt-3qAqC64",
  authDomain: "estudos-74309.firebaseapp.com",
  databaseURL: "https://estudos-74309-default-rtdb.firebaseio.com",
  projectId: "estudos-74309",
  storageBucket: "estudos-74309.firebasestorage.app",
  messagingSenderId: "103723439058",
  appId: "1:103723439058:web:e324bcdc6604b96ecd6e0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore (app);

export { db };
