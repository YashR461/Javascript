// for each loop
const coding = ["js", "golang", "python", "cpp"]

//regular function
coding.forEach(function (item) {
    console.log(item)
});

//arrow function
coding.forEach((value)=>{
    console.log(value)
;})

//for each doesn't only bring item or val in parameter but it also brings index and entire array
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
});

//Accessing objects in array using foreach loop
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "GoLang",
        languageFileName: "go"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
    console.log(item.languageName);
});