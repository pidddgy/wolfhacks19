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