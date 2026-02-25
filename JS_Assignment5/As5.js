class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary =salary;
    }
    getDetails(){
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }
}
class Manager extends Employee{
    constructor(name, salary, bonus){
        super(name, salary);
        this.bonus = bonus;
    }
    getTotalSalary(){
        return this.salary + this.bonus;
    }
}
class Director extends Manager{
    constructor(name, salary, bonus, stockOptions){
        super(name, salary, bonus);
        this.stockOptions = stockOptions;
    }
    getFullCompensation(){
        return this.salary + this.bonus + this.stockOptions;
    }
}
let emp1 = new Employee("gayi", 75000);
emp1.getDetails();

let manager1 = new Manager("Yogi", 100000, 15000);
manager1.getDetails();
console.log(`Total Salary: ${manager1.getTotalSalary()}`);

let dir = new Director("Chetan", 175000, 30000, 60000);
dir.getDetails();
console.log(`Total Salary: ${dir.getTotalSalary()}`); 
console.log(`Full Compensation: ${dir.getFullCompensation()}`);

