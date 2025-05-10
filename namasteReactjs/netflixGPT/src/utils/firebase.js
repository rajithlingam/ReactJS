// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtcqYkRixrij2rwHmcvyTvTwNX7tQB3rE",
  authDomain: "rajithlingamnetflixgpt.firebaseapp.com",
  projectId: "rajithlingamnetflixgpt",
  storageBucket: "rajithlingamnetflixgpt.firebasestorage.app",
  messagingSenderId: "1048059999070",
  appId: "1:1048059999070:web:b516a14af6dac6f943d5cf",
  measurementId: "G-981V3JZYET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();