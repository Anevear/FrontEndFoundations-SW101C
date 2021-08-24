// Classes Workshop
//define a class then you can create things over and over with new info by instatiating it with the new info

class Employee {
         constructor(name, salary, hireDate){
                  this.name = name;
                  this.salary = salary;
                  this.hireDate = hireDate;
         } //abova are attributes
         //function in a class are called methods
         getName(){
                  console.log(this.name);
         }
         getSalary(){
                  console.log(this.salary);
         }
         getHireDate(){
                  console.log(this.hireDate);
         }

}

let anevear = new Employee("Anevear", 69000, 2006);
console.log(anevear)
anevear.getName();
anevear.getSalary();
anevear.getHireDate();

//below is a class with 3 methods

class Person {
         constructor(firstName, lastName) {
                  this.firstName = firstName;
                  this.lastName = lastName;
         }
         run() {
                  console.log(this.firstName + " " + this.lastName + " is running.");
         }
         walk() {
                  console.log(this.firstName + " " + this.lastName + " is walking.");
         }
         greeting() {
                  console.log("Hello, my name is " + this.firstName + ".");
         }
}

let illidan = new Person("Illidan", "Stormrage");
illidan.run();
illidan.walk();
illidan.greeting();

// Car class that makes use of the 'get' & 'set' concepts 
// video notes are in get&set.txt expect some overlap


// 1) start w/ the class keyword
// 2) add the constructor funtion
// '_' attached to the bgng of diff props as a convention to create a backing field to store: make, model, year props. w/o '_' netm get/set is called a "stack overflow" is caused. get wld b clld in an ∞ loop
// 3) get method is then created
// 4) set method is then created
// 5) Last method is another getter allow the retrieval of the description of 'myCar'
// last note: if an attempt to change the make of myCar to a val other that the vals in 'possibleMakes' it would thro an error similar to below
// Uncaaught Error : (random unlisted make) is not a valid make. code following.
// since myCar.make is a prop. the setter (set kywd) cn b used to chg the val w/ foll syntax: myCar.make = "Toyota";
// ?? so then stands I can set model w/--- myCar.model = "Tiburon" --- ofc if I used set to make an array of possibleModels if I went so far as to hv def those....??
class Car {  // 1)
         constructor(make, model, year) { // 2)
                  this._make = make;
                  this._model = model;
                  this._year = year;
         } // '_' in notes.

         get make() { // 3)
                  return this._make; // 'getter' for 'make' meaning that 'make' can be retrieved by using the dot notation and the ref var used to instatiate the class 'Car'
                  // ex:: myCar.make; will return 'Subaru' b/c method make() is used to ask for that very info in the -let myCar = new Car("Subaru", "WRX", 2002); line of code
         }

         set make(value) { // 4) ****** with this setter -set keyword- the opt 2 chg the make validates vals given in the array: possibleMakes. 'if' checks if val given is incl. else the error is thrown. 
                  const possibleMakes = ["Honda", "Toyota", "Subaru"]; // this is an array of makes if i enter a make aside from what I have listed I will get the error syntax i prev mentions in the numbers list of instrs

                  if (possibleMakes.includes(value)) {
                           this._make = value;
                  } else {
                           throw Error(value + " is not an included make");
                  }
         }
         //I didnt chg the make w/ the setter. SO myCar.description is gng to send back "2002 Subaru WRX" 
         //if I had w/: myCar.make = "Toyota" (somewhere idk yet) then myCar.description method will return "2002 Toyota WRX". which is clearly wrong and would offend my sensibilities XD

         get description() { // 5)
                  return this._year + " " + this._make + " " + this._model;
         }
}

let myCar = new Car("Subaru", "WRX", 2002);

//the creation of an instance is called an instantination. you can create as many instances as you want with the same class. to follow

class thePeople {
         constructor(name,age) {
                  this.name = name;
                  this.age;
         }

         greetings(){
                  console.log ("Ho there! My name is " + this.name + "and I am " + this.age + ".");
         }
}
//class above. instantinations below

let araceli = new thePeople("Araceli", 24);
let baelores = new thePeople("Baelores", 27);
let cecelia = new thePeople("Cecelia", 18);
araceli.greetings();
baelores.greetings();
cecelia.greetings();

// in the ex abv araceli, baelores, cecelia are instances of the thePeople cls
// when you create an instance of the class you are creating an obj.
// araceli, baelores, & cecelia are obj and then if you were to log any of them to the console (baelores) you will see thePeople {name: "Baelores", age: 27}
// w/ the logged ex a thePeople onj was created that contains the name and age given when the instance was created.