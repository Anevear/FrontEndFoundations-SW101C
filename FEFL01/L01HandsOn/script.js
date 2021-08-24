function numberChecking(number1, number2){
    if(number1 > 100){
        console.log("Number 1 has many digits!");
    }
    if(number1 < 100){
        console.log("Number 1 is a negative number!");
    }
    if(number2 < 20){
        console.log("Number 2 is not a very high number...");

    }
    if(number2 > 50){
        console.log("Number 2 is a high number!");
    }
}
console.log(numberChecking(426,11));
//new change to see where i am commiting to