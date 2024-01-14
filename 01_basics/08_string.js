const gameName = new String("yashhhh")

console.log(gameName) // [String: 'yashhhh'] => it is not array but it is an object which stores key-value pairs.

console.log(gameName[0])

//gives the length
console.log(gameName.length)

//gives the string in uppercase
console.log(gameName.toUpperCase())

//gives the string after slicing => last index is excluded
console.log(gameName.slice(0,4))

const myName = "   yash    "

//trims all the leading and trailing whitespaces
console.log(myName.trim())

const url = "https://yash.com/yash%20rastogi"

//replaces
console.log(url.replace("%20", "-"))

let newName = "yash-yr-rastogi"

//splits the string
console.log(newName.split("-"))