const course = {
    courseName: "JS mastery",
    coursePrice: 1999,
    courseInstructor: "hitesh"
}

//destructure
const {courseInstructor} = course
console.log(courseInstructor)
const {courseName} = course
console.log(courseName)

const {courseInstructor : instructor} = course
console.log(instructor)