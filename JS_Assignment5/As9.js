class Product{
    constructor({name, price, category = "General"}){
        this.name= name;
        this.price = price;
        this.category = category;
    }
    getInfo = ()=> `Product: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
    productDiscount({discount}){
        this.price = this.price - discount;
        console.log(`After Discount, New price: ${this.price}`);
    }
    productChanges(changes){
        return new Product({...this, ...changes});
    }
}

let p1= new Product({name: "Mascara", price: 3000});
console.log(p1.getInfo());
p1.productDiscount({discount:700});
let p2 = p1.productChanges({name:"Eagger Mascara", category:"Beauty" });
console.log(p2.getInfo());