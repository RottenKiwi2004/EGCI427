// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function validate(number) {
	return number > 0 && parseInt(number) == number ? number : NaN; 
} 


function computeCost() {
//add your code here

// Compute the cost

	let cost = 0;

	cost += parseInt(validate(document.getElementById("french").value)) * 3.49;
	cost += parseInt(validate(document.getElementById("hazlenut").value)) * 4.11;
	cost += parseInt(validate(document.getElementById("columbian").value)) * 5.23;

	if (!cost) alert("Invalid input");
	else document.getElementById("cost").value = `${cost.toFixed(2)}`;
}  //* end of computeCost
