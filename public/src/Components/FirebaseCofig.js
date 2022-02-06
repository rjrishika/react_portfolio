// Import the functions you need from the SDKs you need
import Firebase from "firebase/compat/app"
import "firebase/compat/database"


const firebaseConfig = {
  apiKey: "AIzaSyCXZap3ti0IAh-lhhBCkTQmS1UnpLc60lw",
  authDomain: "portfolio-1df57.firebaseapp.com",
  databaseURL: "https://portfolio-1df57-default-rtdb.firebaseio.com",
  projectId: "portfolio-1df57",
  storageBucket: "portfolio-1df57.appspot.com",
  messagingSenderId: "955663481089",
  appId: "1:955663481089:web:1583aa34aeb481e4f4c300",
  measurementId: "G-612DTMXKHW"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default Firebase;