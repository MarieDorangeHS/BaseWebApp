// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

import {
  getDatabase,
  ref,
  push,
  set,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  onValue,
  query,
  orderByChild,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

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

const auth = getAuth();

const provider = new GoogleAuthProvider();

// Initialize Realtime Database and get a reference to the service

// Create a new post reference with an auto-generated id
const db = getDatabase();
const postListRef = ref(db, "posts");
const newPostRef = push(postListRef);
set(newPostRef, {
  // ...
});

const commentsRef = ref(db, "post-comments/" + postId);
onChildAdded(commentsRef, (data) => {
  addCommentElement(postElement, data.key, data.val().text, data.val().author);
});

onChildChanged(commentsRef, (data) => {
  setCommentValues(postElement, data.key, data.val().text, data.val().author);
});

onChildRemoved(commentsRef, (data) => {
  deleteComment(postElement, data.key);
});

const dbRef = ref(db, "/a/b/c");

onValue(
  dbRef,
  (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      // ...
    });
  },
  {
    onlyOnce: true,
  }
);

const myUserId = auth.currentUser.uid;

//detect auth change
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in!");
  } else {
    console.log("No user");
  }
});

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // The signed-in user info.
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    // The email of the user's account used.
    // The AuthCredential type that was used.
    // ...
  });
