//map method

const months = ["january", "februray", "march", "april"]
//map method creates a new array and inserts all the returning values in that array and returns that newly created array
const capitalMonths = months.map( (month) => {
    // console.log(month)
    return month.toUpperCase();
})
// console.log(capitalMonths);

const indexAndMonths = months.map( (month, index) => {
    // console.log(month);
   // console.log(index);
    return index;
})
// console.log(indexAndMonths)


//filter method
const students = [

    {
        name: "Akash",
        age: 23
    },
    {
        name: "Adarsh",
        age: 17
    },
    {
        name: "Anurag",
        age: 18
    },
    {
        name: "Raman",
        age: 23
    },
    {
        name: "Nidhi",
        age: 16
    }

]
//using filter method
const adultStudents = students.filter( (student) => {
    return student.age >= 18
}).map( (student) => {
    return student.name
}).filter( (student) => {
    return student.includes("A");
})
// console.log(adultStudents)

const nums = [1,2,3,4,5,6,7,8,9,10]


//reduce method
const sum = nums.reduce( (accumulator, currentValue) => {
    // console.log(`Accumulator : ${accumulator}, CurrentVal : ${currentValue}, acc+currentVal : ${accumulator+currentValue}`)
    return accumulator+currentValue
}, 0);


//Create a new array using the map function whose each element is equal to the original element plus 5
const arr = [1,2,3,4,5,6,7,8,9,10]
const newArr = arr.map( (value) => {
    return value+5;
});
// console.log(arr, newArr)

//
const words = ["apple", "banana", "mohit", "aDarsh"]

const newWordsArray = words.map( (word) => {
    return word.toUpperCase();
})
// console.log(words)
// console.log(newWordsArray)

//
const obj1 = {
    name: "yash",
    age: 21,
    gender: "Male"
}

const obj2 = {
    location: "India",
    city: "Blr",
    pincode: 876567
}

function mergeObjects(obj1, obj2) {
    const obj3 = new Object();
    Object.assign(obj3, obj1, obj2)
    //const obj3 = {...obj1, ...obj2}
    console.log(obj3)

    return obj3
}

const ans = mergeObjects(obj1, obj2);
console.log(ans)