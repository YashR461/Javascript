var c = 30

if (true) {
    let a = 10
    let b = 20
    var c = 300
}

// console.log(a)
// console.log(b)
// console.log(c)

//Nested Scope

function one(){
    const userName = "Yash"

    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website)
    two()
}
one()


function addOne(num){
    return num+1
}
console.log(addOne(5))

const addTwo = function (num){
    return num + 2
}
console.log(addTwo(5))