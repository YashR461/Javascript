console.log("Done")

// fetch('https://dummyjson.com/products').then((res)=> {
//     // console.log(res);
//     // console.log(res.json())
//     return res.json()
// }).then((data)=> {
//     console.log(data)
// })

fetch('https://dummyjson.com/products').then((res)=> res.json())
.then((data)=> console.log(data) )