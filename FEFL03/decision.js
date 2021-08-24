// ternimal node decision.js

const doubleAge = age => age * 2;

console.log(doubleAge(33));

// switch statement examples below
//Example 1

let day = 4;
let dayName;
switch (day){
         case 1:
                  dayName = 'Sunday';
                  break;
         case 2:
                  dayName = 'Monday';
                  break;
         case 3:
                  dayName = 'Tuesday';
                  break;
         case 4:
                  dayName = 'Wednesday';
                  break;
         case 5:
                  dayName = 'Thursday';
                  break;
         case 6:
                  dayName = 'Friday';
                  break;
         case 7:
                  dayName = 'Saturday';
                  break;
         default:
                  dayName = 'Invalid Day';
}
console.log(dayName);

//example 2
let grade = 7;
let school;

switch (grade){
         case 1:
                  school = 'Elementary School';
                  break;
         case 2:
                  school = 'Elementary School';
                  break;
         case 3:
                  school = 'Elementary School';
                  break;
         case 4:
                  school = 'Elementary School';
                  break;
         case 5:
                  school = 'Elementary School';
                  break;
         case 6:
                  school = 'Middle School';
                  break;
         case 7:
                  school = 'Middle School';
                  break;
         case 8:
                  school = 'Middle School';
                  break;
         case 9:
                  school = 'High School';
                  break;
         case 10:
                  school = 'High School';
                  break;
         case 11:
                  school = 'High School';
                  break;
         case 12:
                  school = 'High School';
                  break;
         default:
                  school = 'Invalid Entry';
}
console.log(school);

//Eample 3 example with built in js functions being used in a switch statement. the method used is getDay() which will return a weekday btn 0 and 6. the new Date().getDay() retrieves the current date and then defines the corresponding day number btn 0-6. it s checking to see if todays date is a weekday or a weekday
//to find out the day you can type console.log(Date()) to get the current date directly in the console with the console.log!!!
let text;
switch (new Date().getDay()){
         case 6:
                  text = 'Today is Saturday';
                  break;
         case 0:
                  text = 'Today is Sunday';
                  break;
         default:
                  text = 'Dangit, its a weekday. Looking forward to the weekend!!';
}
console.log(text);

let phoneNumberPresent = true;
let needsNumber;

switch(phoneNumberPresent) {
         case true:
                  needsNumber = false;
                  break;
         case false:
                  needsNumber = true;
                  break;
         default:
                  needsNumber = "Try Again!";
}
console.log(needsNumber);

let selectedNumber = 23;
let output;

switch(selectedNumber) {
         case 23:
                  output = "That's exactly what I was thinking, spoooky!";
                  break;
         case 9:
                  output = "How did you know?";
                  break;
         default:
                  output = "Better luck next time.";
}
console.log(selectedNumber);