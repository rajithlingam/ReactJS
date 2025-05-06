// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDznJjkXdvjfEiL75C5LLajZqUGhONAsaE",
  authDomain: "rlnetflixgpt.firebaseapp.com",
  projectId: "rlnetflixgpt",
  storageBucket: "rlnetflixgpt.firebasestorage.app",
  messagingSenderId: "443764190028",
  appId: "1:443764190028:web:8272860052a96d982e7de9",
  measurementId: "G-XTLKKJKG44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();