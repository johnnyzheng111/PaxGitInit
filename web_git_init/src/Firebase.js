import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6iJJF8Fx12i2wxcpa22zzlFVjiIE52oc",
    authDomain: "hackathongitinit.firebaseapp.com",
    projectId: "hackathongitinit",
    storageBucket: "hackathongitinit.appspot.com",
    messagingSenderId: "603547005020",
    appId: "1:603547005020:web:872423b21316367a873699"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider()