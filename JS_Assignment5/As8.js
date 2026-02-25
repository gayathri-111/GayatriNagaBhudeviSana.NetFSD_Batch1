class Payment{
    pay(amount){
        console.log(`Paying ${amount} using generic payment method.`);
    }
}
class CreditCardPayment extends Payment{
    pay(amount){
        console.log(`Paying ${amount} using CreditCardPayment method.`);
    }
}
class UPIPayment extends Payment{
    pay(amount){
        console.log(`Paying ${amount} using UPIPayment method.`);
    }
}
class CashPayment extends Payment{
    pay(amount){
        console.log(`Paying ${amount} using CashPayment method.`);
    }
}
let payments = [
    new CreditCardPayment(),
    new UPIPayment(),
    new CashPayment()
];
for( let p of payments){
    p.pay(10000);
}