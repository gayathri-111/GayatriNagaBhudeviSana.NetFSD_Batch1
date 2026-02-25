class Animal{
    makeSound(){
        console.log(`Animal Makes sound`);
    }
}
class Dog extends Animal{
    makeSound(){
        console.log("Bow! Bow!");
    }
}
class Cat extends Animal{
    makeSound(){
        console.log("Meow! Meow!");
    }
}
class Cow extends Animal{
    makeSound(){
        console.log("Moo! Moo!");
    }
}

let Animals = [new Dog(), new Cat(), new Cow()];
Animals.forEach(a => a.makeSound());

