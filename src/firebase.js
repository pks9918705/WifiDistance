// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2x0PCNReXXZBOMs7XHx0XW3jbPrHll9Y",
  authDomain: "uwbproject-3c8d6.firebaseapp.com",
  projectId: "uwbproject-3c8d6",
  storageBucket: "uwbproject-3c8d6.appspot.com",
  messagingSenderId: "415821985633",
  appId: "1:415821985633:web:a406f8b82286c43942b720",
  databaseURL: "https://uwbproject-3c8d6-default-rtdb.asia-southeast1.firebasedatabase.app", // Updated URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
