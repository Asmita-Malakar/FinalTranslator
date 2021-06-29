let login = () => {
    let email = document.getElementById("email_field")
    let password = document.getElementById("password_field")

    //console.log(email.value)
    //console.log(password.value)

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((result) => {
        console.log(result)
    })
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });

  window.location.href = "welcomePage.html"

}