const score = 400
console.log(typeof score)

//using new keyword
const balance = new Number(100)

//when we have used new keyword and chheck the type of variable then it will say as object
console.log(typeof balance)

console.log(balance)

//checking the type after converting the balance which is number type to string type
console.log(typeof balance.toString())

//checking the length of balance after converting it from number to string
console.log(balance.toString().length)

// toFixed method is used in order to generate decimal places. If 2 is given as argument then it will generate 2 decimal places and so on.
console.log(balance.toFixed(2))

//using precision
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
// it will give output after converting the number into indian number system by applying commas
console.log(hundreds.toLocaleString('en-IN'))

//----------------------------Maths----------------------------------
console.log(Math)

//Use of round function
console.log(Math.round(4.2))
console.log(Math.round(4.6))

//use of ceil
console.log(Math.ceil(4.1))
console.log(Math.ceil(4.8))

//Use of floor
console.log(Math.floor(4.9))
console.log(Math.floor(4.1))

//Use of random
//This if return a random value between 1 and 10 , including 1 and 10 as well.
console.log(Math.floor(Math.random()*10)+1)

// This will return a random value between max and min which is given as 10 and 20
const max = 10
const min = 20
console.log(Math.floor(Math.random()*(max-min + 1))+ min)