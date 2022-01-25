let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.getElementById("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}
setGradient();

function generateColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
}

function setRandomColor() {
	let color1 = generateColor();
	let color2 = generateColor();

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1
	+ ", " 
	+ color2
	+ ")";

	css.textContent = body.style.background + ";";
}

button.addEventListener("click", setRandomColor);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);