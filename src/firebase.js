// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import "firebase/compat/database";


const firebaseConfig = {
    apiKey: "AIzaSyDLjE8TFQe_quOT21xDv5y1w0FrceLHcq8",
    authDomain: "react-blockown-info.firebaseapp.com",
    projectId: "react-blockown-info",
    storageBucket: "react-blockown-info.appspot.com",
    messagingSenderId: "289757292678",
    appId: "1:289757292678:web:a186f95b48df514c40c907",
    measurementId: "G-N1B5HHZG38"
  };

  const fireDb =  firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();