class aClass { //define the class
         constructor(name, age){
                  this.name = name;
                  this.age = age;
         }
         sayName() { //method assigned to the class
                  alert(this.name); 
         }
         sayAge () { // another method assigned to the class
                  alert(this.age);
         }
}

//instantinating, or createing an instance of the class aClass w/ the 'new' keyword
const myInstance = new aClass ("Araceli", 33);
myInstance.sayName();

class Vehicle{
         constructor(make, model, year) {
                  this.make = make;
                  this.model = model;
                  this.year = year;
         }
}

let myCar = new Vehicle ("Subaru", "Impreza", 2002);
console.log(myCar);