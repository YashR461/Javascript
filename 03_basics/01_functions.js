function addTwoNumbers(num1 , num2) {
    if (typeof num1 === typeof num2) {
        return num1 + num2
    }
}
console.log(addTwoNumbers(1,4))

function userMessage(userName) {
    if (userName === undefined) {
        console.log("Please enter a valid username")
        return
    }
    return `${userName} just logged in`
}
console.log(userMessage("Yash"))
console.log(userMessage("ok")) // undefined just logged in


//rest operator
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 2000))

function calculateCartPrice2(val1, val2, ...num2) {
    console.log(val1)
    console.log(val2)
    return num2
}
console.log(calculateCartPrice2(100,200,300,400,500))

//Objects
const user = {
    userName: "Yash",
    price: 1999
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}
handleObject(user)

//Arrays
const myArray = [0,1,2,3,4,5]
function returnSecondValue(arr) {
    return arr[0]
}
console.log(returnSecondValue(myArray))