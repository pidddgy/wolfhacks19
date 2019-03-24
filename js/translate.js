function translate(frm, to, msg){
	var http = new XMLHttpRequest();
	const url = "https://translation.googleapis.com/language/translate/v2";
	http.open ("POST", url, false);
	http.setRequestHeader("Content-Type", "application/json");
	http.setRequestHeader("Authorization", `Bearer ya29.c.ElrWBm7kCWbbTDN8nfuF-rRiQVtXG5BDWwQVxqn7VaDlHJ1c6MSiCT_1PYxnlBbNxlZo9a2WctL946pZha7j7JxIrsUmDwCqvvK6v8iUUfTg1SnV6UexlJRvjRA`);
	http.send(JSON.stringify({"q": `${msg}`, "source": `${frm}`, "target": `${to}`, "format": "text"}));
	return JSON.parse(http.responseText).data.translations[0].translatedText;
}