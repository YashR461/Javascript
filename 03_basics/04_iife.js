// Immediately Invoked Function Expressions (IIFE)

// function check() {
//     console.log(`DB CONNECTED`)
// }
// check();

//IIFE
(function check2() {
    console.log(`DB CONNECTED`);
})();

// Nanmed IIFE
(function check3() {
    console.log(`DB CONNECTED CHECK`);
})();

//Unnamed IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("YASH RASTOGI");

