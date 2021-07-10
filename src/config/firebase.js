import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDxyD-N2KwWSiDw-spI8sONJ3ksRNWAusM",
  authDomain: "curso-65a37.firebaseapp.com",
  databaseURL: "https://curso-65a37.firebaseio.com",
  projectId: "curso-65a37",
  storageBucket: "curso-65a37.appspot.com",
  messagingSenderId: "1038776575153",
  appId: "1:1038776575153:web:2fc53bab7e754f76b82e90"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db=db;

export default firebase;