import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7TzA5ugcZYXXw6EMoz0HagqajuFV_7zI",
  authDomain: "amzn-2bd78.firebaseapp.com",
  projectId: "amzn-2bd78",
  storageBucket: "amzn-2bd78.appspot.com",
  messagingSenderId: "700019368860",
  appId: "1:700019368860:web:0b369ea008c9b8dc231e59",
  measurementId: "G-4J8D32V5T7"
};

const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();

export default db;