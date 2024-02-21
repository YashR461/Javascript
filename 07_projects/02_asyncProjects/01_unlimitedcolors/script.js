// console.log("yash rastpgi");

function randomRGBcolorGenerator() {
    let random1 = Math.floor(Math.random()*255);
    let random2 = Math.floor(Math.random()*255);
    let random3 = Math.floor(Math.random()*255);
    return `rgb(${random1}, ${random2}, ${random3})`
}

const rgbValue = randomRGBcolorGenerator();
console.log(rgbValue);

let validId;

const startChangingColor = function () {
    document.body.style.backgroundColor = randomRGBcolorGenerator();
};

document.querySelector("#start").addEventListener("click", function() {
    validId = setInterval(startChangingColor, 1000)
}, false);

document.querySelector("#stop").addEventListener("click", function() {
    clearInterval(validId);
})
