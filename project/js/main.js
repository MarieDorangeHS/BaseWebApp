// $(document).ready(function () {
// getPost();
// });

///SUPPRIMER CI_DESSOUS
function handleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  console.log("provider", provider);
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user.email);
      // check if it is working!
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log("auth error", error);
    });
}

function addMessage(postTitle, postBody) {
  var postData = {
    title: postTitle,
    body: postBody,
  };

  var dataBase = firebase.database().ref("posts");

  var newPostRef = database.push();
  newPostRef.set(postData);
}

function handleMessageFormSubmit() {
  var postTitle = $("#post-title").val();
  var postBody = $("#post-body").val();
  //console.log(postTitle);
  addMessage(postTitle, postBody);
}

function getPosts() {
  return firebase
    .database()
    .ref("posts")
    .once("value")
    .then((snapshot) => {
      var posts = snapshot.val();
      console.log(posts);
      // ...
    });
}

console.log(
  "main.js",
  "index.js",
  addMessage,
  handleMessageFormSubmit,
  getPosts
);
