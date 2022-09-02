let itemList = document.querySelector("#items");

// createElement

let newDiv = document.createElement("div");
// Adding className
newDiv.className = "Hello";

// Adding id
newDiv.id = "Hello1";

// Adding Attribute
newDiv.setAttribute("title", "Hello Div");

// create text node
let newDivText = document.createTextNode("HEllo");

// Appending text node into div
newDiv.appendChild(newDivText);

let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);

let newDiv1 = document.createElement("div");

newDiv1.className = "HEllo";

// Adding id
newDiv1.id = "HeHEllollo1";

// Adding Attribute
newDiv1.setAttribute("title", "HEllo Div1");

let newDiv1Text = document.createTextNode("HEllo");

newDiv1.appendChild(newDiv1Text);

let itemContainer = document.querySelector("#items");
let item1Text = document.querySelector(".list-group-item");

itemContainer.insertBefore(newDiv1, item1Text);
