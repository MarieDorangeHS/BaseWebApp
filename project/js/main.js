// $(document).ready(function () {
// getPost();
// });

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
