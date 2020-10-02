// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase, { initializeApp } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAgQWdRLTw9PLMhg6AedeKKZyncNxJInV8",
  authDomain: "facebook-clone-b8fee.firebaseapp.com",
  databaseURL: "https://facebook-clone-b8fee.firebaseio.com",
  projectId: "facebook-clone-b8fee",
  storageBucket: "facebook-clone-b8fee.appspot.com",
  messagingSenderId: "1046006165936",
  appId: "1:1046006165936:web:a6b5f60ea957b4bbda2675",
  measurementId: "G-5M5H0LXP7G",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
