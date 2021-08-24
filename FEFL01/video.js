//create a function
//takes in a string
//returns the total number of words in that string

//sample string
//"Hello world" should return 2
//"I am a student and my name is Anevear" - 9
//"Goodbye"- 1

//create function is step one X
//1 parameter - string input
//1 output - total number of words
//create var that will keep track of total words

//the space is the pattern of words is total spaces + 1
//need to calcualate total spaces.
//loop thru string to count the spaces

function wordCount(input){
    let totalWords = 0;
    let totalSpaces = 0;
    //loop thru string
    //let is like var but doesnt hold permanent space in memory. Let only exists within the curly brackets. var is a gobal varible visible anywhere in the program.

    for(let i=0; i < input.length; i++){
        if (input.charAt(i) == ' ') {
            totalSpaces++
        } //pre-existing charater method to look at
    }

    totalWords = totalSpaces + 1;
    return totalWords;
}

console.log(wordCount("Hello World!"));
console.log(wordCount("I am a student and my name is Anevear"));
console.log(wordCount("Goodbye"));


//change 2 lines change total words to see if i can get the sentence count rather than the word count.
function sentCount(sente){
    let totalSent = 0;
    let totalPeri = 0;

    for(let i=0; i < sente.length; i++){
        if(sente.charAt(i) == "."){
            totalPeri++
        }
    }

    totalSent = totalPeri;
    return totalSent;
}

console.log(sentCount("Hello there. I am a student, my name is Anevear. Goodbye."))

  let user = {
    firstName: "Coder",
    lastName: "Bill",
    fullName: function(){
      return this.firstName + ' ' + this.lastName;
    }
  };
  console.log(user.fullName());

  //In the product object that is provided, the cost and deliveryFee are in US dollars. Add a method named newPayments to the product object that sums the cost and deliveryFee and returns the result in cents (multiply by 100). Remember to use this and to return the result.

  let product = {
    cost: 1200,
    deliveryFee: 200,
    newPayments: function(){
        let newTotal = this.cost + this.deliveryFee;
        return newTotal * 100;
        //return (this.cost + this.deliveryFee) * 100;   fewer keystrokes
    }
  }
  console.log(product.newPayments());

let odd = 7;
let even = 20;
let greaterThan;
if(odd > 19 && even > 19){
    greaterThan = true;
}
else {
    greaterThan = false;
}
console.log(greaterThan);