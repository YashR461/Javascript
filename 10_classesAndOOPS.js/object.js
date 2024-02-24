// new keyword working

function multiplyBy5(num) {
    return num * 5;
}
function createUser (username, score) {
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function () {
    this.score++;
    console.log(this.score);
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);
chai.increment();
chai.printMe();

tea.increment();
tea.printMe();