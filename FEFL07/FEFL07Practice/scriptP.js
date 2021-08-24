//example 1 script

var parentNode = document.getElementById("div1");
var childNode = document.getElementById("p1");
parentNode.removeChild(childNode);

//example 2 script

function addAChild() {
         let newElem = document.createElement("div");
         newElem.innerHTML = "This is a new Element created by appendChild()";

         let container = document.getElementById("container");
         container.appendChild(newElem);
}

//example 3 script

function myFunction() {
         var list = document.getElementById("myList");
         list.removeChild(list.childNodes[0]);
}