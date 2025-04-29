// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_iydrTyYKaDWwIyuoON8Pm9JeWTfEEz4",
  authDomain: "netflixgpt-rl.firebaseapp.com",
  projectId: "netflixgpt-rl",
  storageBucket: "netflixgpt-rl.firebasestorage.app",
  messagingSenderId: "950174243161",
  appId: "1:950174243161:web:d37c7f50e0b67aa8f5d448",
  measurementId: "G-ZTJV2Y7E1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics( app );
export const auth = getAuth();