// Prototype

let myName = "yash     "
let myChannel = "ok     ";

let myHeroes = ["Thor", "Spiderman"];

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Swing",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.yash = function () {
    console.log(`yash is present in all objects`);
}
heroPower.yash();
myHeroes.yash();

Array.prototype.heyYash = function () {
    console.log(`Yash says hello ji`);
}
myHeroes.heyYash();
heroPower.heyYash();


//Inheritance

const teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: true
}
const TASupport = {
    makeAssignment: "Js Assignment",
    fullTime: true
}