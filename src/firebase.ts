// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "llm-stuff-c9858.firebaseapp.com",
  projectId: "llm-stuff-c9858",
  storageBucket: "llm-stuff-c9858.appspot.com",
  messagingSenderId: "70134447050",
  appId: "1:70134447050:web:1a6f6cd2df5ec50de1ed33"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);