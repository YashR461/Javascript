// Stack Memory
let myYoutubeName = "yashdotcom"
let anotherName = myYoutubeName
anotherName = "hello"

// console.log(anotherName)
// console.log(myYoutubeName)

//Heap Memory
let userOne = {
    email: "yash@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "yashHelloDotCom"

console.log(userTwo.email)
console.log(userOne.email)