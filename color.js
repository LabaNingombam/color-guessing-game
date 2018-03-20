var colors = arrayGenerator(6);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var rgbDisplay = document.getElementById("rgb");
var statDisplay = document.querySelector("#status");
var resetBtn = document.getElementById("reset");
var h1 = document.getElementById("header");
var modeBtn = document.querySelectorAll(".mode")
var numberSquares = 6;

for(var i = 0; i < modeBtn.length; i++){
		modeBtn[i].addEventListener("click", function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numberSquares = 3 : numberSquares = 6;
		reset();
	});
}

function reset() {
	colors = arrayGenerator(numberSquares);
	pickedColor = pickColor();
	rgb.textContent = pickedColor;
	resetBtn.textContent = "New Colors";
	statDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


resetBtn.addEventListener("click", function(){
	reset();
});


rgb.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){

		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			statDisplay.textContent = "Correct";
			changeColor(pickedColor);
			resetBtn.textContent = "Play Again?"
		}
		else {
			this.style.backgroundColor = "black";
			statDisplay.textContent = "Try Again";
		}
	});
}


function arrayGenerator(num) {

	var color = [];
	for (var i = 0; i < num; i++){
		var r = Math.floor((Math.random() * 255));
		var g = Math.floor((Math.random() * 255));
		var b = Math.floor((Math.random() * 255));

		color.push("rgb("+ r +", "+ g +", "+ b +")");

	}
	return color;
}

function pickColor() {
	var random = colors[Math.floor(Math.random() * colors.length)];
	return random;
}

function changeColor(pickedColor){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = pickedColor;
	}
	h1.style.backgroundColor = pickedColor;
}
