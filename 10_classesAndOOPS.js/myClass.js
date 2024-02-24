//ES 6

//class concept
class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abcd`
    }

    changeuserName(){
        return `${this.username.toUpperCase()}`
    }
}
const temp = new user("yash rastogi", "yash@gmail.com", 1234);
console.log(temp.encryptPassword());
console.log(temp.changeuserName());


//behind the scene
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function() {
    return `${this.password}abcd`
}
User.prototype.changeuserName = function() {
    return `${this.username.toUpperCase()}`
}
const temp2 = new User("yash chopra", "yash@facebook.com", 656565);
console.log(temp2.encryptPassword());
console.log(temp2.changeuserName());