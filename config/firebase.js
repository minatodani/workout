import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCCZzmYrULkiqLsUbplEWH78BqrEGMjc5A",
  authDomain: "workout-202011.firebaseapp.com",
  databaseURL: "https://workout-202011.firebaseio.com",
  projectId: "workout-202011",
  storageBucket: "workout-202011.appspot.com",
  messagingSenderId: "1089102552787",
  appId: "1:1089102552787:web:2d42d1d32b92c64f7c3e26",
  measurementId: "G-8FHFXPXHHN"
};

export default !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();
