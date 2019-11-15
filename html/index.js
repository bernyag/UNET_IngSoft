var firebase = require("firebase/app");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});
          

function login() {
    var userEmail = document.getElementById("correo").value;
    
    var userPass = document.getElementById("pswd").value;
   
   
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
        
        
        window.alert("Error: " + errorMessage);
      // ...
});
}