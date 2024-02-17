const user = {
    userName : "Yash Rastogi",
    price : 9999,

    welcomeMessage : function() {
        console.log(`${this.userName}, welcome to sharktank`) // Yash Rastogi, welcome to sharktank
        console.log(this)                                     // { userName: 'Yash Rastogi', price: 9999, welcomeMessage: [Function: welcomeMessage] }
        console.log(this.userName)                            // Yash Rastogi
    },

    leavingMessage : () => {
        console.log(`${this.userName}, welcome to sharktank`) // undefined, welcome to sharktank
        console.log(this)                                     // {}
        console.log(this.userName)                            // undefined
    }
}

// user.welcomeMessage()
// user["userName"] = "Sam"
//user.leavingMessage()
// console.log(this)

const printName = function() {
    let userName = "Yash"
    //console.log(this)        // Gives the global scope
    console.log(this.userName) // The context of this works in objects only not in functions. The function can be regular or arrow functions as well.
}
printName()

// Arrow Functions
const printNameCopy = () => {
    let userName = "Yash"
    //console.log(this)        // gives empty object
    console.log(this.userName) // The context of this works in objects only not in functions. The function can be regular or arrow functions as well.
}
printNameCopy()

//Basic arrow function or explicit arrow function
const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(2,3))

//Implicit return arrow function
const addThree = (num1, num2) => (num1+num2)
console.log(addThree(4,4))

//return object
const returnObject = () => ({userName: "Yash Rastogi"})
console.log(returnObject())