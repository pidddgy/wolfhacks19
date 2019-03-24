function translate(frm, to, msg){
	var http = new XMLHttpRequest();
	const url = "https://translation.googleapis.com/language/translate/v2";
	http.open ("POST", url, true);
	http.setRequestHeader("Content-Type", "application/json");
	http.setRequestHeader("Authorization", "Bearer ya29.c.ElrWBtj03j-Ml9u4AmPOFCyoLhnG7WqcZToCOi6f1TnS1D5O8Zms1A_dvyDJSAXE-E4FcObOwf0Pk4Ly38_b9H5nZRpqQL28DemBCjVaX2oLCq8xQorTC5K8Kx0");
	http.send({'q': `${msg}`,'source': `${frm}`,'target': `${to}`,'format': 'text'});
	return xmlHttp.responseText;
}
console.log(translate("en", "zh", "hello"))