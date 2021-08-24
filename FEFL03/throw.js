function myFunction() {
         let message = document.getElementById("message");
         
         message.innerHTML = "";

         let x = document.getElementById("demo").value;

         try {
                  if(x == "") throw "Ball! Please input a number.";
                  if(x<10) throw "Strike! Your number is too low!!";
                  if(x>25) throw "Foul! Your number is too high!!";
         }
         catch(err){
                  message.innerHTML = "Error: " + err;
         }
         finally {
                  document.getElementById("demo").value = "";
         }
}


function name() {
         let firstName = document.getElementById("demo").value;
         
         firstName === "John" ? (document.getElementById("demo").innerHTML = "Hello John!") : (document.getElementById("demo") = "Hello Human!");

       }

       console.log(name);