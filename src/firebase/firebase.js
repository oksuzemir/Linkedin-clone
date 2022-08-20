import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_Hd4xT4PDIhoIiD71mDqSzP2th6b39hc",
  authDomain: "linkedin-demo-706cf.firebaseapp.com",
  projectId: "linkedin-demo-706cf",
  storageBucket: "linkedin-demo-706cf.appspot.com",
  messagingSenderId: "797610480866",
  appId: "1:797610480866:web:46ecbd99403350aa4afabb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};
