
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-mock-interview-platfo-b33ce.firebaseapp.com",
  projectId: "ai-mock-interview-platfo-b33ce",
  storageBucket: "ai-mock-interview-platfo-b33ce.firebasestorage.app",
  messagingSenderId: "340677312868",
  appId: "1:340677312868:web:b6ccae4493132f55637a71"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}