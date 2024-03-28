
const user = {
    username: "Yash Rastogi",
    age: 21,
    email: "yash@facebook.com",
    address: {
        city: "Varanasi",
        state: "Uttar Pradesh",
        pinCode: 767676
    }   
}

// adding a property
// user.gender = "Male"
// console.log(user)

// user.username = "Yash"
// console.log(user)
// user = {}
// console.log(user)

//deleting a property
// delete(user.username);
// console.log(user)


//Object.Seal() 
// Object.seal(user);
// user.username = "Yash Rastogi"
// user.password = 9876
// console.log(user)
// delete(user.age)
// console.log(user)

//Object.freeze() 
// Object.freeze(user)
// console.log(user)
// user.username = "Yash"
// user.age = 19
// user.password = 9876
// delete(user.email)
// console.log(user)

//in keyword in Objects
console.log("username" in user);
console.log("usernAme" in user);

console.log(Object.keys(user))