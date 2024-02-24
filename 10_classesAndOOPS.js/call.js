// call
function setUserName(username) {
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password) {
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const temp = new createUser("Yash", "yash@google.com", 123);
console.log(temp)