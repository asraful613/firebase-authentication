// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPgaKtjwJm8sDKCQ2cXlS2nhMbAQPdOa4",
  authDomain: "fir-authentication-67c1b.firebaseapp.com",
  projectId: "fir-authentication-67c1b",
  storageBucket: "fir-authentication-67c1b.appspot.com",
  messagingSenderId: "343723300457",
  appId: "1:343723300457:web:eba471c9f539c5efe1f4f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app);