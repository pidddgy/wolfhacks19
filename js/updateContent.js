var interval = setInterval(thing, 1000);

function thing(){
	console.log("running");
	document.getElementById("readthemessages").value= Math.floor(Math.random()*100);
}