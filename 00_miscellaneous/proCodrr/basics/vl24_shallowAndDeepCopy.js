const user1 = {
    username: "Yash Rastogi",
    age: 21,
    email: "yash@facebookdotcom"
}

const user2 = user1
user2.age = 19
user2.email = "yash@instagramdotcom"

//Changes will reflect in both the objects because of const user2 = user1 as
// we are not creating a new ionstance of object and both user 1 and user2 will
// have same address therefore changing one object will be changing other one as
//well
// console.log(user1);
// console.log(user2);

// In order to sovle this we user .assign or spread opreator

//Using assign method
const user3 = {
    username: "Yash Chopra",
    age: 21,
    email: "yash@youtube.com"
}

const user4 = {}

Object.assign(user4, user3)
console.log(user4)
user4.age = 18;
user4.email = "yash@twitter.com"
console.log(user4)

//Using spread (...) operator

const user5 = {
    name: "Yash" ,
    age: 17,
}

const user6 = {...user5}
console.log(user6)

user6.age = 21
user6.name = "Yash Rastogi"

console.log(user6)

// user6(...user5)