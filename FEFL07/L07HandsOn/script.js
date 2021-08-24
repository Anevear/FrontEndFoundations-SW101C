function regexChecker (){
         let firstName = document.getElementById("firstName").value;
         let lastName = document.getElementById("lastName").value;
         
         let nameCheck = /^[A-Z]{1}[a-z]+$/;
         
         if (firstName.match(nameCheck) && lastName.match(nameCheck)){
           alert('Yay! Your inputs were all correct!');
           console.log(true);
         }
         else {
           alert("Oh no! That's an invalid format!");
           console.log(false);
         }
     }