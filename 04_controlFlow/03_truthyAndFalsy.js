//truthy values
// "0"
// "false"
// " " (non empty string)
// function name() {}
// [] (empty array)
// {} (empty object)

//falsy values
// false
// 0 (zero)
// -0 (negative zero)
// "" (empty string)
// null
// undefined
// NaN

const userEmail = "yash@gmail.com"
if (userEmail.length === 0) {
    console.log("Empty array")
}

const userObject = {}
if (Object.key(userObject).length === 0) {
    console.log("Object is empty")
}

