//	Attaching click handler on button
var submitBtn = document.getElementById('findLargest');

submitBtn.addEventListener('click',findLargest);

/**
 * Function which find the even sum of largest two numbers
 */
function findLargest(){ 
	var i=1,
		input_array,descendingSortCallback,
		large_array = [];
	//Split input and converts each value to number
	input_array = document.getElementById('input_array').value.split(',').map(a => parseInt(a,10));
	descendingSortCallback = function(a,b){
		return b-a;
	};
	//Sort in descending order
	input_array = input_array.sort(descendingSortCallback);
	//The largest number 1
	large_array[0] = input_array[0];
	//Finding largest number 2, such that the sum is even number
	while(i<input_array.length){
		let sum = large_array[0] + input_array[i];
		if(sum % 2 === 0) break;
		i++;
	}
	large_array[1] = input_array[i];
	//Displaying results...
	document.getElementById('result_sum').value = large_array.reduce(function (a,b) { return a + b; }, 0);
	document.getElementById('result_array').value = large_array.join(',');
	document.getElementById('result_area').style.display = 'block';
}