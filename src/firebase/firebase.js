import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBjw5nyNSYm72v9BXyAEXgEUXo1d_UCurk",
  authDomain: "open-the-door-14786.firebaseapp.com",
  databaseURL:
    "https://open-the-door-14786-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "open-the-door-14786",
  storageBucket: "open-the-door-14786.appspot.com",
  messagingSenderId: "373604385632",
  appId: "1:373604385632:web:bad46f340f2651505ed405",
  measurementId: "G-RQLC87LBD4",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getDatabase(firebaseApp);
