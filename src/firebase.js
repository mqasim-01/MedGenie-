// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9WGxJ34EQTiXL8lF63oevotsI0CdH3wc",
  authDomain: "medgenie-4941e.firebaseapp.com",
  projectId: "medgenie-4941e",
  storageBucket: "medgenie-4941e.appspot.com",
  messagingSenderId: "165670086194",
  appId: "1:165670086194:web:1fd532c3b53816195a3e2b",
  measurementId: "G-6WJ0WQ853C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);