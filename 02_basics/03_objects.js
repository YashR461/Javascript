//Objects can be declared in two ways Literals and Constructors

//Object literals
const mySym = Symbol("Key1")
const jsUser = {
    name: "Yash",
    "full name": "Yash Rastogi",
    [mySym]: "Key1",
    age:    21,
    location: "Varanasi",
    email: "yash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

//access values in objects
// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
// console.log(jsUser)

//change values in objects
jsUser["full name"] = "Yash Chopra"
// console.log(jsUser["full name"])

//freeze objects so that no changes can be made
jsUser.email = "yash@microsoft.com"
//Object.freeze(jsUser)
jsUser.email = "yash@chatgpt.com "
// console.log(jsUser)

//function
jsUser.greeting = function(){
    console.log("Hello JS user")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())