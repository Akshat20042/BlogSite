// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "akshat-s-blog-b0a62.firebaseapp.com",
  projectId: "akshat-s-blog-b0a62",
  storageBucket: "akshat-s-blog-b0a62.appspot.com",
  messagingSenderId: "798576822517",
  appId: "1:798576822517:web:6905f19b0f30f1cbbfddbc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
