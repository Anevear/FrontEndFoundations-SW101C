const average = arrayOfNumbers => {
         if (typeof arrayOfNumbers == 'undefined' || arrayOfNumbers == null) {
                  throw "Invalid input";
         }
         if(arrayOfNumbers.length == 0){
                  throw "Empty input";
         }
         let total = 0.0;
         for(var i=0; i<arrayOfNumbers.length; i++) {
                  total+= arrayOfNumbers[i];
         }
         return total/arrayOfNumbers.length;
}

//-----

const testData = data => {
         var result = 0;
         console.log("---"); //this is jsut a visual seperator for the console.
         try {
                  result = average(data);

                  console.log("The average is: " + result);
         }
         catch(err) {
                  console.log("ERROR: " + err);
         }
         finally {
                  console.log("Completed testing: " + data);
         }
}

//bellow is some test data without having anything in the html
let validData = [1,2,3,4,5]; //average 3
let emptyData = [];          // error empty
let nullData = null;         // error invalid
let undefinedData;           // error invalid

testData(validData);
testData(emptyData);
testData(nullData);
testData(undefinedData);

//to run in terminal node catchEx.js