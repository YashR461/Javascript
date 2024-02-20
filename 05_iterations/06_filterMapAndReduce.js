// filter
const myArr = [1,2,3,4,5,6,7,8,9,10]
const newNum = myArr.filter((num) => num > 4)
// console.log(newNum)

const newNum2 = myArr.filter( (num) => {
    return num>4
});
// console.log(newNum2)

//using for each
const newArray = []
myArr.forEach((num)=>{
    if(num > 4) {
        newArray.push(num);
    }
});
// console.log(newArray)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// book published of history genre
const myBookArr = []
books.filter((bk)=>{
    if(bk.genre === "History") {
        myBookArr.push(bk)
    }
});
// console.log(myBookArr);

// book published of history genre
const bookAccordingToGenre = books.filter( (bk) => bk.genre === "History")
// console.log(bookAccordingToGenre)

// book published after year 2000
const booksPublished = books.filter((bk)=> bk.publish >= 2000)
// console.log(booksPublished)

// book published after 1995 and of history genre
const bookPublishedAfter1995AndOfHistoryGenre = books.filter( (bk) => { return (bk.publish >= 1995 && bk.genre === "History") });
// console.log(bookPublishedAfter1995AndOfHistoryGenre)

const bookPublishedAfter1995AndOfHistoryGenre2 = books.filter( (bk) => (bk.publish >= 1995 && bk.genre === "History"))
// console.log(bookPublishedAfter1995AndOfHistoryGenre2)

//---------------------filter ends here -------------------------------

// map
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map( (num) => {return num + 10})
// console.log(newNums)

const newNums2 = myNumbers.map( (num) => num + 10)
// console.log(newNums2)

//chaining of methods
const newNums3 = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
// console.log(newNums3);

//----------------------map ends here-----------------------------------

//reduce
const myNums = [1,2,3]

//using regular function
const myTotal = myNums.reduce(function (accumulator, currentValue) {
    console.log(`Accumulator is ${accumulator} and cuurentValue is ${currentValue}`);
    return accumulator + currentValue;
}, 0)
console.log(myTotal)

//using arrow function
const myTotal2 = myNums.reduce( (acc, currVal) => acc+currVal, 0)
console.log(myTotal2)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const shoppingCartValue = shoppingCart.reduce( (accumulator, item) => (accumulator + item.price), 0);
console.log(shoppingCartValue);