// for in loops
// for of loops cannot be used to iterate an object therefore we use for in loops to iterate an object

const myObject = {
    js: "Javascript",
    go: "Golang",
    cpp: "C++",
    rb: "Ruby"
}

for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`)
}