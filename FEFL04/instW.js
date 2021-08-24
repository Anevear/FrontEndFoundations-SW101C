// Instances Workshop
// also using an ex used in a diff workshop

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

//how to access info and create new instances of the Employee class

let employee1 = new Employee("Daemon", 35000, "Jun 12, 2015");
let employee2 = new Employee("Euphemia", 50000, "Feb 13, 2013");

//how to get the info. we *could* do console.log(getName); but we are not.

employee1.getName(); // and it will console.log the name of the var we set to the var employee1
employee2.getName();

// QUICK!! open the console and making sure you are in the folder 
//type "node instW.js"

// employee1.getName(); is soooo much easier than the below
// console.log(employee1.name);

employee2.getHireDate();
// easier than console.log(employee2.getHireDate);
