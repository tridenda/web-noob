let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	let button = document.createElement("button");

	button.innerHTML = "Delete";
	button.classList.add("deleteClass")
	li.appendChild(document.createTextNode(input.value + ' '));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function changeToggle(element) {
	if ( element.target.tagName == "LI") {
		element.target.classList.toggle("done");
	}
}

function deleteList(element) {
	if (element.target.className == "deleteClass") {
		element.target.parentElement.remove();
	}
}

function UIEventHandler(event) {
	changeToggle(event);
	deleteList(event);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", UIEventHandler);
