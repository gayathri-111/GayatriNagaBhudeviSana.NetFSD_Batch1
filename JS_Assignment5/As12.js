class Wallet{
    #balance;
    constructor(initialAmount= 0){
        this.#balance = initialAmount;
    }
    addMoney(amount){
        if(amount >0){
            this.#balance +=amount;
            console.log(`Added ${amount}. Current balance: ${this.#balance}`);
        }
    }
    spendMoney(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`Amount Spent ${amount}. Current balance: ${this.#balance}`);
        }else{
            console.log("Insufficient Balance.")
        }
    }
    getBalance(){
        return this.#balance;
    }

}
let myWallet = new Wallet(5000);
myWallet.addMoney(1000);
myWallet.spendMoney(3500);
myWallet.spendMoney(7000);
console.log(myWallet.getBalance());