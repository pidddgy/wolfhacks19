const config = {
    apiKey: "AIzaSyD--fcGZUlW6qZny-GRCaHZhOq498ZBENw",
    authDomain: "wolfhacks19.firebaseapp.com",
    databaseURL: "https://wolfhacks19.firebaseio.com",
    projectId: "wolfhacks19",
    storageBucket: "wolfhacks19.appspot.com",
    messagingSenderId: "189830752995"
  };

var token = "Bearer ya29.c.ElrXBj1BZGO0J-JiPJ-TWO0vmTGCvz-KIP3COJlFQ_GCk9mdtHM8Rj0lARucQet3LXMy-ZHGHw8XCt1eUq_JijRC-qaAP269Ul2TCgWugdJcd5QkLvFlt6JCm8c";

        function translateToEng(msg){
    var from = detectLang(msg);
    var http = new XMLHttpRequest();
    const url = "https://translation.googleapis.com/language/translate/v2";
    http.open ("POST", url, false);
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("Authorization", token);
    http.send(JSON.stringify({"q": `${msg}`, "source": from, "target": "en", "format": "text"}));
    console.log(http.responseText);
    return JSON.parse(http.responseText).data.translations[0].translatedText;
}




function detectLang(msg){
    var http = new XMLHttpRequest();
    const url = "https://translation.googleapis.com/language/translate/v2/detect";
    http.open ("POST", url, false);

    http.setRequestHeader("Authorization", token);
    http.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    http.send(JSON.stringify({"q": `${msg}`}));
    console.log(http.responseText);
    return JSON.parse(http.responseText).data.detections[0].language;
}
    function updateToken(tokenStr){
        token = "Bearer " + tokenStr;
    }

    function translateFromEng(engStr, lang){
    var http = new XMLHttpRequest();
    const url = "https://translation.googleapis.com/language/translate/v2";
    http.open ("POST", url, false);
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("Authorization", token);
    http.send(JSON.stringify({"q": `${engStr}`, "source": "en", "target": `${lang}`, "format": "text"}));
    console.log(http.responseText);
    return JSON.parse(http.responseText).data.translations[0].translatedText;
    }


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
	var messageTxt = document.getElementById("messageSender").value;
	messageTxt = translateToEng(messageTxt);
  db.ref("demo").push({
    author: firebase.auth().currentUser.uid,
    text: messageTxt,
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