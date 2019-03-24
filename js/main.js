const config = {
    apiKey: "AIzaSyD--fcGZUlW6qZny-GRCaHZhOq498ZBENw",
    authDomain: "wolfhacks19.firebaseapp.com",
    databaseURL: "https://wolfhacks19.firebaseio.com",
    projectId: "wolfhacks19",
    storageBucket: "wolfhacks19.appspot.com",
    messagingSenderId: "189830752995"
  };

firebase.initializeApp(config);
const db = firebase.database();


// MAKE SURE YOU USE AN HTTP SERVER OR ELSE THIS WONT WORK
// do " python -m SimpleHTTPServer 8080 " in this directory

var user;
function loginwgoog() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  //console.log(firebase.auth().currentUser.email);
}


// const a = db.ref().push().key;
// console.log(a);
// console.log(a);

// newMessage(a, {
//   author:"sdfsdf",
//   message:"sdlfsdf",
//   time:"sdfsdf",
// });

// newMessage(a, {
//   author:"sdfsdf",
//   message:"sdlfssdfdsfdssdfdf",
//   time:"sdfsdf",
// });

// addUser("sdfsdf", a);
// addUser("sdflksdjfldksfsd", a);