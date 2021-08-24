var text = document.getElementById("paragraph").innerHTML;

document.getElementById("paragraph").innerHTML = text + " and I am Awesome!";

var myButton = document.getElementById("submitButton");

myButton.addEventListener("click", function(){
         alert("I've been clicked!");
})

function setHeading (){
         let heading = document.createElement('h1'); // creates the heading
         heading.innerHTML = document.getElementById("message").value; // add the input value as text

         document.getElementById('output').appendChild(heading); // append the heading to the div element
}