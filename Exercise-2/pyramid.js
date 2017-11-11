// Attaching change event handler for row number input field
var row_number = document.getElementById('row_number');

row_number.addEventListener('change',function(){
	printPattern(row_number.value);
});

/**
 * Function to print pattern
 * @param  {number} row 
 */
function printPattern (row) {
	var rows = row || 5,
		num=0,
		element,space,value,
		string = "";
	var element = document.getElementById('pattern');
	for(let i=1;i<=rows;i++)
	{
		for(space=1;space<=rows-i;space++){
			string = string.concat("&nbsp");
		}
		for(value=1;value<=2*i-1;value++){
			if((space+value-1)%2 !== 0) {
				string = string.concat('5');
			}else{
				string = string.concat('8');
			}
		}
		for(space=1;space<=rows-i;space++){
			string = string.concat("&nbsp");
		}	
		string = string.concat('<br/>');	
	}
	element.innerHTML = string;	
}

printPattern();

		