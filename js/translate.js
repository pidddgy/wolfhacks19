function translate(frm, to, msg, token){
	var http = new XMLHttpRequest();
	const url = "https://translation.googleapis.com/language/translate/v2";
	http.open ("POST", url, false);
	http.setRequestHeader("Content-Type", "application/json");
	http.setRequestHeader("Authorization", `Bearer ${token}`);
	http.send(JSON.stringify({"q": `${msg}`, "source": `${frm}`, "target": `${to}`, "format": "text"}));
	return JSON.parse(http.responseText);
}