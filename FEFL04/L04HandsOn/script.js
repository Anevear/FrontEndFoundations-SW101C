class Employee {
         constructor(name, salary, hireDate) {
                  this.name = name;
                  this.salary = salary;
                  this.hireDate = hireDate;
         }
         getName() {
                  console.log(this.name.toUpperCase());
         }
         getSalary() {
                  console.log(this.salary);
         }
         getHireDate() {
                  console.log(this.hireDate);
         }
}

class Manager extends Employee {
         constructor(name, salary, hireDate, jobDesc) {
                  super(name, salary, hireDate);
                  this.jobDesc = jobDesc;
         }
         descriptionOfJob(){
                  console.log(this.name + " was hired on " + this.hireDate + ", salary: " + this.salary + ". Responsibilities include: " + this.jobDesc + ".");
         }
}

class Designer extends Employee {
         constructor(name, salary, hireDate, yrsExp) {
                  super(name, salary, hireDate);
                  this.yrsExp = yrsExp;
         }
         experience(){
                  console.log(this.name + " was hired on " + this.hireDate + ", salary: " + this.salary + ". " + this.name + " has " + this.yrsExp + " years of experience.");
         }
}

class SalesAssociate extends Employee {
         constructor(name, salary, hireDate, degree) {
                  super(name, salary, hireDate);
                  this.degree = degree;
         }
         degrees(){
                  console.log(this.name + " was hired on " + this.hireDate + ", salary: " + this.salary + ". Degrees include: " + this.degree + ".");
         }
}

let manager = new Manager("Jace Lester", 70700, "15 Mar 2006", "handles day to day task delegation and ensures team goals are met");
let designer = new Designer("Hoid Stormblessed", 80800, "17 Nove 2010", 12);
let sales = new SalesAssociate("Stennimar Kholin", 65000, "24 Jan 2015", "B.S in Accounting");

manager.descriptionOfJob();
designer.experience();
sales.degrees();