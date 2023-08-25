// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhw5rcHBACo7mJsepZGNKNZV1Fq6xItxE",
  authDomain: "gamesid-737df.firebaseapp.com",
  projectId: "gamesid-737df",
  storageBucket: "gamesid-737df.appspot.com",
  messagingSenderId: "114099536079",
  appId: "1:114099536079:web:ca5bd01123feb0ab96b7ba",
  measurementId: "G-GNW2VB24G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Cloud Firestore
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
export const auth = getAuth(app);


export const provider = new GoogleAuthProvider();