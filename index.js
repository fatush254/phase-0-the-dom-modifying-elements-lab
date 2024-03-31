// Write your code here!
var elementToRemove = document.getelementaryById('main');
var parentElement = elementToRemove.parentNode;
parentElement.removeChild(elementToRemove);

var newHeader = document.createElement("h1")
newHeader.textContent = 'This is a new header';
newHeader.id ="victory"
document.body.appendChild(newHeader)

var newHeader = document.createElement("h1")
newHeader.textContent = 'fatush wins';
newHeader.id ="victory"
document.body.appendChild(newHeader);