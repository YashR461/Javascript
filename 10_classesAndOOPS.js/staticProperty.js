class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }
    static createId() {
        return `123`
    }
}

const yash = new User("Yash Rastogi")
// console.log(yash.createId());
console.log(yash.logMe());
// console.log(yash)

class Teacher extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}
const iphone = new Teacher("Iphone", "iphone@iphone.com")
