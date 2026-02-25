class Shape{
    calculateArea(){
        console.log("Area calculation not defined for generic shape.");
        return 0;
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    calculateArea(){
        let area = Math.PI* this.radius * this.radius;
        console.log(`Circle Area: ${area.toFixed(2)}`);
        return area;
    }
}
class Rectangle extends Shape{
    constructor(length, breadth){
        super();
        this.breadth = breadth;
        this.length = length;
    }
    calculateArea(){
        let area = this.length* this.breadth;
        console.log(`Rectangle Area: ${area}`)
    }
}
class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }
    calculateArea(){
        let area = 0.5* this.base * this.height;
        console.log(`Triangle Area: ${area}`);
        return area;
    }
}

let shapes = [
    new Circle(5),
    new Rectangle(2,4),
    new Triangle(3, 8)
];

for(let shape of shapes){
    shape.calculateArea();
}