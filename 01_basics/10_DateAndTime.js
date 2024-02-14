//Date 

let myDate = new Date()
//console.log(typeof myDate)  //Object
//console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2024,0,23)

let myCreatedDate2 = new Date(2024, 1, 14, 9, 52)
//console.log(myCreatedDate2.toLocaleString())
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
//console.log(myTimeStamp)

//console.log(myCreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000)) // converts the date in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth()) // In javascript the months start from 0 that is 0 represents january and so on.

console.log(newDate.getMonth()+1) // This method will return the month in correct format 

//string interpolation
console.log(`Today is ${newDate.toLocaleDateString()} which implies that the date is ${myDate.getDate()} and is ${myDate.getDay()}rd day of the week`)