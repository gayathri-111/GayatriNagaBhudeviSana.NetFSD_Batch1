class BankAccount{
    constructor(accountHolder, balance=0){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount){
        if(amount>0){
            this.balance +=amount;
            console.log(`${amount} deposited. New balance: ${this.balance}`);
        }else{
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount){
        if(amount> this.balance){
            console.log("Insufficient balance.");
        }
        else if(amount<=0){
            console.log("Withdrawal amount must be positive.")
        }else{
            this.balance -= amount;
            console.log(`${amount} withdrawn. Remaining balance: ${this.balance}`);
        }
    }

    checkBalance() {
        console.log(`Account Holder: ${this.accountHolder}, Balance: ${this.balance}`);
    }
}
let acc1 = new BankAccount("Gayi", 5000);
acc1.checkBalance();
acc1.deposit(1500);
acc1.withdraw(7000);
acc1.withdraw(3000);
acc1.checkBalance();

