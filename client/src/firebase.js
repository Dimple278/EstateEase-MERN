// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-wanderlust.firebaseapp.com",
  projectId: "mern-wanderlust",
  storageBucket: "mern-wanderlust.appspot.com",
  messagingSenderId: "454017607702",
  appId: "1:454017607702:web:5f8237bafcfa9b0a842d37",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
