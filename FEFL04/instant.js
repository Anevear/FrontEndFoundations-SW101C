// video example for the definition

class Person {
         constructor(name, age) {
                  this.name = name;
                  this.age = age;
         }

         greeting() {
                  console.log("Hello, my name is " + this.name + " and I am " + this.age + ".");
         }
}

let faeln = new Person("Faeln", 81);
let gelinor = new Person("Gelinor", 42);
let haize = new Person("Haize", 21);

faeln.greeting();
gelinor.greeting();
haize.greeting();

console.log(haize); // this line right here will give all the info in the haize obj as an instance of the Person class w/ the info in the instantination that incl the param of the obj i defined using the Person cls.. its a class->obj->instantination (class->let haize-> console.log)

//ea let that is named that calls the greeting method is all logged.