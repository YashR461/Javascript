console.log("This gets printed first")

function printMyName() {
    console.log("This gets executed second: Yash Rastogi")
}

setTimeout( () => {
    console.log("Dont know when it will be executed")
})

function hello() {
    console.log("This gets executed third")
}

printMyName()
hello()

setTimeout( () => {
    console.log("2nd setTimeout ")
}, 2000)

