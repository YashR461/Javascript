const User = {
    username: "Yash Rastogi",
    age: 21,
    email: "yash@facebook.com"
}

console.log(Object.getOwnPropertyDescriptor(User, "username"));

// Object.defineProperty(User , "username", {
//     writable: false,
//     enumerable: false
// });

// console.log(Object.getOwnPropertyDescriptor(User, "username"));

for (const key in User) {
   console.log(`${key} => ${User[key]}`)
}