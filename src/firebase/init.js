// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaz5L8Z4B5pJfMFT1pmCpxUDdCrOeYAd0",
  authDomain: "fir-projectx-9ecc0.firebaseapp.com",
  projectId: "fir-projectx-9ecc0",
  storageBucket: "fir-projectx-9ecc0.firebasestorage.app",
  messagingSenderId: "902688094209",
  appId: "1:902688094209:web:96aa3fc9bcf70fc46ae800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);