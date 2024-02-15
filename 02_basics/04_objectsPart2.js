//Constructor

//const tinderUser = new Object() // this is an singleton object
const tinderUser = {} // this is not an singleton object
console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "yash@gmail.com",
    fullname: {
        userFullName : {
            firstName: "Yash",
            lastName: "Rastogi"
        }
    }
}
//console.log(regularUser)
console.log(regularUser.fullname.userFullName.lastName)

//Merging objects
const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"C", 4:"D"}
const obj5 = {4:"C", 5:"D"}

const obj3 = {...obj1, ...obj2, ...obj5}
console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2, obj5)
console.log(obj4)

//Takes all the keys and stores it in an array
console.log(Object.keys(tinderUser))
//Takes all the values and stores it in an array
console.log(Object.values(tinderUser))

//Check if an object has a particular property
console.log(tinderUser.hasOwnProperty("isLoggedIn")) 