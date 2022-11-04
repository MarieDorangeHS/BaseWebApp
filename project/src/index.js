// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5_euNsvXdsA3mKT3Bx0wE0IKhHH9PtyU",
  authDomain: "message-stream-a2a40.firebaseapp.com",
  databaseURL:
    "https://message-stream-a2a40-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "message-stream-a2a40",
  storageBucket: "message-stream-a2a40.appspot.com",
  messagingSenderId: "245426279764",
  appId: "1:245426279764:web:55ff4545207ed8e83ca4c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

//detect auth change
onAuthStateChanged(auth, (user) => {
  if (user ≠ null) {
    console.log("logged in!");
  } else {
    console.log("No user");
  }
});
