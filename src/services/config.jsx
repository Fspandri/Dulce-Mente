import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dulce-mente.firebaseapp.com",
  projectId: "dulce-mente",
  storageBucket: "dulce-mente.appspot.com",
  messagingSenderId: "235971723612",
  appId: "1:235971723612:web:c049385dc2e29ab920c199"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);