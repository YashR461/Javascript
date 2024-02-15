//Array

const myArr = [0,1,2,3,4,5]
// console.log(myArr)
// console.log(typeof myArr)

const myHeroes = ["spiderman", "superman"]
// console.log(myHeroes)
// console.log(typeof myHeroes)

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2) 
// console.log(typeof myArr2)

// Array methods
myArr.push(6) // push method is used to push or insert a value in the array at the last index
//console.log(myArr)
myArr.pop() // pop method is used to pop or delete the value which is at last index of the array
//console.log(myArr)

myArr.unshift(99)
//console.log(myArr) // unshift method is used to insert a value at the starting index of the array
myArr.shift()
//console.log(myArr) // shift method is used to delete the value form the starting index of the array

// console.log(myArr.includes(9)) // Returns a bool value implying that whether the value is present or not
// console.log(myArr.indexOf(5)) // returns the index where that particular value is present if not present then it returns -1
// console.log(myArr.indexOf(9))

const newArray = myArr.join()
//console.log(typeof newArray)

//slice and splice

const myArray2 = myArr.slice(1,3)
console.log(myArray2)
console.log(myArr)

const myArray3 = myArr.splice(1,3)
console.log(myArray3)
console.log(myArr)

const colors = ["red", "yellow", "blue", "orange"]
const splicedArray = colors.splice(1,2)
console.log(splicedArray)
console.log(colors)
