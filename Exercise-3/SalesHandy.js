/**
 * Defnition of Saleshandy class
 */
function SalesHandy(){
	this.message = "SalesHandy initialised";
}
/**
 * doSomething public method definition
 * added to prototype property so that objects can access
 * Makes async request to uinames API to get random names
 * @param  {function} successCB [Success callback]
 * @param  {function} failureCB [Failure callback]
 */
SalesHandy.prototype.doSomething = function(successCB,failureCB){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open('GET','http://uinames.com/api/?amount=25&region=india&gender=male');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
        	successCB(xhr.response);
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            failureCB();
        }
    };
    xhr.send();
};