// MAKE SURE YOU USE AN HTTP SERVER OR ELSE THIS WONT WORK
// do " python -m SimpleHTTPServer 8080 " in this directory

function loginwgoog() {
    var provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider)
    console.log(firebase.auth().signInWithRedirect(provider));
    firebase.auth().signInWithRedirect(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
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