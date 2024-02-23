// creating a new promise
// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network

//     setTimeout(function() {
//         console.log("Async task is completed");
//         resolve();
//     }, 1000);
// });

// //consuming promise
// promiseOne.then(function() {
//     console.log("Promise consumed");
// })

// // creating new promise and resolving it using then
// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2 completed");
//         resolve();
//     }, 1000);
// }).then(function() {
//     console.log("Async 2 resolved");
// });

// passing arguments in resolve
// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({username : "chai", email: "yash@gmail.com"});
//     }, 1000);
// });
// promiseThree.then(function(user) {
//     console.log(user);
// });

//learning chaining and finally
// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true;
//         if (!error) {
//             resolve({username: "yash", password: "123"});
//         }else {
//             reject("Error : Something went wrong");
//         }
//     }, 1000);
// });

// //chaining
// promiseFour.then( (user) => {
//     console.log(user);
//     return user.username;
// }).then(function(myUserName) {
//     console.log(myUserName);
// }).catch(function (error) {
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"));


//using async await
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({username: "Javascript", password: "123"});
        }else {
            reject("Error : Javascript went wrong");
        }
    }, 1000);
});

promiseFive.then(function (user) {
    console.log(user);
    return user
})
.then(function (usr) {
    console.log(usr.username);
    console.log(usr.password);
})
.catch (function (error) {
    console.log(error);
})
.finally( () => console.log("Promise is either resolved or rejected"));

//when error = true in promiseFive then this will throw an error as async await doesn't handles error gracefully
// async function consumePromiseFive () {
//     const response = await promiseFive;
//     console.log(response);
// }
// consumePromiseFive();

//but using try and catch can help in handling the error gracefully
// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive();


async function getAllUsers () {
    const response = await fetch 
}