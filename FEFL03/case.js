let place = 1;
let medal;
switch(place){
         case 1:
                  medal="Gold";
                  break;
         case 2:
                  medal="Silver";
                  break;
         case 3:
                  medal="Bronze";
                  break;
         default:
                  medal="Participation";
}


console.log(medal);

//to change what plac could be is when I could get into the if...else or a ternary
// terminal node case.js

//Structure of the switch...case statement

// switch(expression){
//         case value1:
//                  statement1;
//                  break;
//       case value2:
//                statement2;
//                break;
//       case value3:
//                statement3;
//                break;
//       default:
//                defaultStatement;
// }

// This is what the switch...case would look like in an if...else

//  if(expression == value1){
//       statement1;
// } else if (expression == value2){
//       statement2;
// } else if (expression == value3){
//       statement3;
// } else {
//       defaultStatement;
// }
//