// Constructor Function

const myObject = {
    username: "Yash Rastogi",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        console.log("Got user details from database");
    }
};
// console.log(myObject.username);
// console.log(myObject.loginCount);
// console.log(myObject.signedIn);
// console.log(myObject.getUserDetails());

// function getDetails(obj) {
//     console.log(obj.username);
//     console.log(obj.loginCount);
//     console.log(obj.signedIn);
// }
// getDetails(myObject);

function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    return this
}
// it will overwrite the values. When userTwo is created it overwrites the values stored in userOne.
// const userOne = User("Yash", 8, true);
// const userTwo = User("Elon Musk", 11, false);
// console.log(userOne);
// console.log(userTwo);

//therefore in order to avoid this situation we use new keyword as new keyword creates a new instance
const userOne = new User("Yash", 8, true);
const userTwo = new User("Elon Musk", 11, false);
console.log(userOne);
console.log(userTwo);
