import firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO-fv4aFSIDGyQYMs9jR839Mh-oXtNpSk",
  authDomain: "drakken-app.firebaseapp.com",
  projectId: "drakken-app",
  storageBucket: "drakken-app.appspot.com",
  messagingSenderId: "147280363592",
  appId: "1:147280363592:web:faee80345871b4563a587d",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const itemsCollection = firebase.firestore(app).collection("items");