//regex
function process(txt) {
	var regex = /\b(\w+)\b/gi;
	var results = txt.match(regex);

	var newText = txt.replace(regex, '<b>ver</b>$1');

	//update HTML
	newP = document.getElementById("final");
	newP.innerHTML = newText;
}

//handle input
var input, button, newP;

function setup() {
	//add all the elements from html
	input = document.getElementById("input");
	button = document.getElementById("submit");

	//when submit button is pressed
	button.onclick(submit);
}

function submit() {
	process(input.value);
}