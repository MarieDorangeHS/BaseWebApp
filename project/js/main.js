// $(document).ready(function () {
// getWeather();
// })

import firebase from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";

function getWeather(searchQuery) {
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchQuery +
    "&units=metric&appid=" +
    apiKey;

  $(".city").text("");
  $(".temp").text("");
  $(".wind").text("");
  $(".error-message").text("");

  $.ajax(url, {
    success: function (data) {
      $(".city").text(data.name);
      $(".temp").text(data.main.temp);
      $(".wind").text(data.wind.speed);
    },
    error: function (error) {
      $(".error-message").text("An error occured!");
    },
  });
}

function showPicture() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append(
    '<img class="rounded-circle" src="images/high-five.gif"/>'
  );
  $("p.reward").html(
    "High five! You're building your first web app using a simple API!"
  );

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
}

function searchWeather() {
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}

function handleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();

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
  console.log(postTitle);
  addMessage(postTitle, postBody);
}
