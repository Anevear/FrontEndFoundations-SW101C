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

function phoneNumberFormat() {
         let phoneNumber = document.getElementById('phNumber').value;
         let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;
         if (phoneNumber.match(phoneRegex)) {
                  alert('Valid number entered');
                  console.log(true);
         } else {
                  alert('Phone number entered is invalid');
                  console.log(false);
         }
}