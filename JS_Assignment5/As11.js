class User{
    #password;
    constructor(username, password){
        this.username = username;
        this.#password = password;
    }
    get password(){
        return this.#password;
    }
    set password(newPassword){
        if(newPassword.length>= 6){
            this.#password = newPassword;
            console.log("Password Updated.")
        }else{
            console.log("Error: Password must be atleast 6 characters long.")
        }
    }
}
let user1 = new User("gayi", "yog0987");
console.log(user1.password);
user1.password = "gay";
user1.password="gayathri456";