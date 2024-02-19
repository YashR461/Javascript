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

//for each doesn't only bring item or val in parameter but it brings
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
});