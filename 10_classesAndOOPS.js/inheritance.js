class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.password = password
        this.email = email
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}
const temp = new Teacher("Hitesh", "hitesh@lco.com", 656565);
temp.addCourse();
const temp2 = new User("Yash Rastogi")
temp2.logMe();

// console.log(temp instanceof User);
console.log(temp2 instanceof Teacher);