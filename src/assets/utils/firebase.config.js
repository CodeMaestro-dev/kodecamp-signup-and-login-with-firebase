// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDMaXGWYLCzjfg8P7wRE_gZiKTwmgC7Bo",
  authDomain: "kodecamp-signup-and-login.firebaseapp.com",
  databaseURL: "https://kodecamp-signup-and-login-default-rtdb.firebaseio.com",
  projectId: "kodecamp-signup-and-login",
  storageBucket: "kodecamp-signup-and-login.appspot.com",
  messagingSenderId: "573728324325",
  appId: "1:573728324325:web:f810442db5dc735a2cb20c",
  measurementId: "G-66BFTYWXTZ",
};

// Initialize Firebase
const cong = initializeApp(firebaseConfig);
const auth = getAuth(cong);

export default auth;
