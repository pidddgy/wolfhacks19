function submitForm() {
	var thing = document.getElementById("msgCont").value;
	alert(thing);
	document.getElementById('msgCont').value = '';
	return false;
}

function thing(){
	document.getElementById("whatever").submit(function () {
		submitForm();
		return false;
	});

}

function searchKeyPress(e)
        {
            // look for window.event in case event isn't passed in
            e = e || window.event;
            if (e.keyCode == 13)
            {
                document.getElementById('btnSearch').click();
                                return false;
            }
            return true;
        }