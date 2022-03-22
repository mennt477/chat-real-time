import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDUWy-kkvizO41QWILAlAkYevG_RWLkeVs",
  authDomain: "chat-app-ecd30.firebaseapp.com",
  projectId: "chat-app-ecd30",
  storageBucket: "chat-app-ecd30.appspot.com",
  messagingSenderId: "217361664454",
  appId: "1:217361664454:web:2f77079f90b3aba291cac7",
  measurementId: "G-8V31PPN2QY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
