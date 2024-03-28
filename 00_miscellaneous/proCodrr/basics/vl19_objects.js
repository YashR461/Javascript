// when we talk about non primitive datatypes then when we compare them then 
// we actually dont compare their value but we compare their memory addresses 
//and in non primitive datatypes the memory addresses will always 
//be different even if the values of the variabales are same
const user1 = {
    name: "Yash",
    age: 21,
    email: "yash@gmail.com",
    password: 9876
}
const user2 = {
    name: "Yash",
    age: 21,
    email: "yash@gmail.com",
    password: 9876
}
console.log(user1 == user2);
console.log(user1 === user2);

// same in case of an empty object
const user3 = {}
const user4 = {}

console.log(user3 === user4) // false
console.log(user3 == user4)  // false


//same in case of array as well as they are also non primitive datatypes
const arr1 = [];
const arr2 = [];

console.log(arr1 == arr2)
console.log(arr1 === arr2)

const arr3 = [1,2,3,4];
const arr4 = [1,2,3,4];

console.log(arr3 == arr4)
console.log(arr3 === arr4)


//But in case of string it is not the same as objects and arrays as string are primitive datatypes
const myName1 = "";
const myName2 = ""; 
console.log(myName1 == myName2)
console.log(myName1 === myName2)

const myName3 = "Yash";
const myName4 = "Yash"; 
console.log(myName3 == myName4)
console.log(myName3 === myName4)