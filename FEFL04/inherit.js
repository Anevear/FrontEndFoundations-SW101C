class Person {
         constructor(firstName, lastName) {
                  this.firstName = firstName;
                  this.lastName = lastName;
         }

         greeting() {
                  console.log("Hello, my name is " + this.firstName + ".");
         }
}

// the 'extends' kywd creates a **subclass** aka 'child of another class'

class NewStudent extends Person {
         constructor(studentID, firstName, lastName) {
                  super(firstName, lastName);
                  this.studentID = studentID;
         }
         studentInfo() {
                  console.log(this.studentID + " " + this.firstName + " " + this.lastName);
         }
}

let student = new NewStudent(12, "Imeria", "Stormrage");
student.greeting();
student.studentInfo();

//abv Person cls is created w/ firstName and lastName properties (w/n constructor) w/n is also the greeting() method.
// NewStudent cls extends(kywd) from the Person cls. the kywd tells NewStudent to use the props& methods from the Person cls
//the super kywd calls on the constructor function in the parent cls which in this case is Person
// super depends on the cntxt. most cases will use the super() method nsde the cls constructor (kywd)
// again this case NewStudent cls calls super(kywd) on the firstName & lastName gvn both Person cls and NewStudent cls access to the strings gvn for first/lastName
// Person is parent cls & NewStudent cls is the child cls
// super.parentMethodName() ----> super(param1, param2)


//ln 24-26 makes use of the parent Person cls and the child extended cls


//classes workshop

class Employee {
         constructor(name, salary, hireDate){
                  this.name = name;
                  this.salary = salary;
                  this.hireDate = hireDate;
         }
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

class Director extends Employee {
         constructor(name, salary, hireDate,numOfEmployees) {
                  super(name, salary, hireDate);
                  this.numOfEmployees = numOfEmployees;
         }
         employeeCount(){
                  console.log(this.name + " is the Director and has " + this.numOfEmployees + " employees.");
         }
}

let director1 = new Director("Lucien", 70000, "July 30, 2009", 19);

director1.getName();
director1.employeeCount();

//remember to get used to --node inherit.js
// instead of opening the .html by right clicking and opening liveServer