class Beginner{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

let b1 = new Beginner("Gayi", 25);
b1.greet();
