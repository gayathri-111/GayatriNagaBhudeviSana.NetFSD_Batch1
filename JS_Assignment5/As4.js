class Vehicle{
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
    }
    start(){
        console.log(`${this.brand} is starting at speed ${this.speed} km/h.`);
    }
}
class car extends Vehicle{
    constructor(brand, speed, fuelType){
        super(brand, speed);
        this.fuelType= fuelType;
    }
    showDetails(){
        this.start();
        console.log(`Brand: ${this.brand}, Speed: ${this.speed}, Fuel Type: ${this.fuelType}`);
    }
}
let car1 = new car("Defender", 120, "diesel");
car1.showDetails();
