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
var currentChat = "demo";
var currentChatMsg = []
function loginwgoog() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  console.log(firebase.auth().currentUser.uid);

  var uid = firebase.auth().currentUser.uid
  db.ref("users/"+uid).push({
    "demo": true,
  });
}

var demoRef = db.ref("/demo");
demoRef.on('value', function(ss) {
  
  // for(var msg in ss.val()) {
  //   console.log(msg)
  //   // var data = ""
  //   // if(ss.val()[msg].author == firebase.auth().currentUser.uid) {
  //   //   data = data+"<div class=\"outgoing_msg\">";
  //   // } else {
  //   //   data = data+"<div class=\"incoming_msg\">";
  //   // }
    
  //   //document.getElementById("messageList").innerHTML += data;
  // }
  
  Object.keys(ss.val()).forEach(function(msg) {
    var data = "";
    if(ss.val()[msg].author == firebase.auth().currentUser.uid) {
        data = data+"<div class=\"outgoing_msg\">";
        data = data+"<div class=\"sent_msg\">";
        data = data+"<p>" + ss.val()[msg].text + " </p> ";
        data = data+"<span class=\"time_date\"> "+ ss.val()[msg].author + "+ </span>"
        data = data+"</div> </div>";
    } else {
        data = data+"<div class=\"incoming_msg\">";
        data = data+"<div class=\"received_msg\">";
        data = data+"<div class=\"received_withd_msg\">";
        data = data+"<p>" + ss.val()[msg].text + " </p> ";
        data = data+"<span class=\"time_date\"> "+ ss.val()[msg].author + "+ </span>"
        data = data+"</div> </div>";
    }

    console.log(data);
    document.getElementById("messageList").innerHTML += data;
  })

  currentChatMsg = ss.val();
})
  

function sendMsg() {
  db.ref("demo").push({
    author: firebase.auth().currentUser.uid,
    text: document.getElementById("messageSender").value,
  }) 

  document.getElementById("messageSender").value = "";
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