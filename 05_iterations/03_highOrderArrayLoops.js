// for of
const myArr = [10,20,30,40,50]
for (const value of myArr) {
    //console.log(`Value is ${value}`)
}

const greeting = "Hello World!"
for (const greet of greeting) {
    if (greet === " ") {
        continue
    }else{
        //console.log(`Char at index is ${greet}`)
    }
}

//Maps
const myMap = new Map()
myMap.set("IN", "INDIA")
myMap.set("US", "UNITED STATES OF AMERICA")
myMap.set("JPN", "JAPAN")
myMap.set("FR", "FRANCE")

console.log(myMap)

//iterate a map
for (const [key, value] of myMap) {
    console.log(key, "=>" , value)
}

//for of cannot be used to iterate an object
const myObject = {
    game1: "NFS",
    game2: "RDR",
    game3: "RDR2"
}
//for of cannot be used to iterate an object
for (const [key , value] of myObject) {
    console.log(key, "=>", value)
}
