//PART 1 -------- 
let highSchoolGrade = 11;
let yourGrade;
switch(highSchoolGrade){
  case 9:
    yourGrade="Freshman";
    break;
  case 10:
    yourGrade="Sophmore";
    break;
  case 11:
    yourGrade="Junior";
    break;
  case 12:
    yourGrade="Senior";
    break;
  default:
    yourGrade="Invalid";
}
console.log(yourGrade);



function name(){
  let firstName = document.getElementById("demo").value;

  firstName === "John" ? document.getElementById("demo").innerHTML = "Hello John" : document.getElementById("demo").innerHTML = "Hello Human!";
}  

console.log(document.getElementById("demo").innerHTML);