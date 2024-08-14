// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_API_KEY,
  authDomain: "mern-blog-faa6f.firebaseapp.com",
  projectId: "mern-blog-faa6f",
  storageBucket: "mern-blog-faa6f.appspot.com",
  messagingSenderId: "755708223962",
  appId: "1:755708223962:web:e4fcacfce7adea5fc2e0e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);