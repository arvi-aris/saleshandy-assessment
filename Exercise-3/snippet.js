/**
 * Print names from Response
 * @param  {String} response Response from API
 */
function printNames(response){
	response = JSON.parse(response);
	var nameString = "<b>Name List : (from Public JSON API : <a href='https://github.com/thm/uinames'> uinames </a>) </b></br> ";
	response.map(function(nameObj){
		nameString += (nameObj.name + " " + nameObj.surname + "</br>");
	});
	document.getElementById('content').innerHTML = nameString;
}
/**
 * Callback method to execute on AJAX failure
 */
function failureCallback(){
	document.getElementById('content').value = "AJAX Request has failed..";
}
//	New Instance of SalesHandy is created
var salesHandy = new SalesHandy;
// doSomething method gets invoked
salesHandy.doSomething(printNames,failureCallback);
