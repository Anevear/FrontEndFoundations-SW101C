// above 50 then response = "Wow! your playlist is impressive!!"
// below 50 then response = "You could use a few more songs..."


let playlistSize = 10;

let response = (playlistSize > 50) ? "Wow! your playlist is impressive!!" : "You could use a few more songs...";



console.log(response);


let age = 15;
let movieRating = (age > 12) ? "PG-13" : "PG";

console.log(movieRating);


//node ternary.js

function name() {
         let firstName;
         firstName === "John" ? (document.getElementById("demo").innerHTML = "Hello John!") : (document.getElementById("demo") = "Hello Human!");

       }

       console.log(name);