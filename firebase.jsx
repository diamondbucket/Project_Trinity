// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO9no-_AdBhX18sOJzFaEVecF5JHFMXFM",
  authDomain: "trinity-solution1.firebaseapp.com",
  projectId: "trinity-solution1",
  storageBucket: "trinity-solution1.appspot.com",
  messagingSenderId: "526282587747",
  appId: "1:526282587747:web:ba039c7152284c2b9ac256",
  measurementId: "G-Q2H57B723N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);