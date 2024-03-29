//Promises

// //creating a new promise
// const promiseOne = new Promise( (resolve, reject) => {

//     console.log('Resolve')
//     setTimeout( () => {
//         console.log("Resolve called")
//         resolve()
//     },2000);
//     console.log('Reject')
//     setTimeout( () => {
//         console.log("reject called")
//         reject(false)
//     },4000);
// });

// //Promise consume
// promiseOne
// .then( () => {
//     console.log("PromiseOne is resolved");
// })
// .catch( (error) => {
//     console.log("Rejected with error :" , error);
// })

// const newPromise = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         let error = true
//         if (!error) {
//             resolve({username: "Yash", age: 21});
//         }else{
//             reject("Error : something went wrong");
//         }
//     }, 2000);
// })

// newPromise.then( (user) => {
//     console.log(user);
//     return user.username
// }).then( (myUsername) => {
//     console.log(myUsername)
// }).catch( (err) => {
//     console.log(err)
// }).finally( () => {
//     console.log("finally gets executed in resolve and reject both")
// })



const promise3 = new Promise( (resolve, reject) => {
    console.log("hi")
    setTimeout( () => {
        resolve({username: "yash", pswd: "1234"})
        console.log('SetTimeout');
    });
})

promise3.then( (user) => {
    return user.username
}).then( (myUsername) => {
    console.log(myUsername)
}).catch ( (err) => {
    console.log(err)
})