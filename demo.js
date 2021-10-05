const app = document.getElementById("app");

let paragraph = document.createElement("p");

paragraph.innerText = "Hello World";
paragraph.className = "card-text";

let card = document.createElement("div")
card.className = "card"

let cardBody = document.createElement("div")
cardBody.className = "card-body"

cardBody.appendChild(paragraph);
card.appendChild(cardBody);
app.appendChild(card);

function generateHTML(type, classes, text = ""){
    let element = document.createElement(type);
    element.className = classes;
    element.innerText = text;
    return element;
}

let container = generateHTML('div', 'container');

let row = generateHTML('div', 'row');

let col = generateHTML('div', 'col-md-4 col-cm-12 offset-md-4 mt-3');

let 

