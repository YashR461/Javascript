let score = true

console.log(typeof (score))
console.log(typeof score)

//conversion
let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

// when score is undefined then after conversion it gives the value as NaN which means not a number
// but when score is null then after conversion it gives value as 0
// if we take score as true then after conversion it givesn the value 1 which is correct bcoz true means 1 and false means 0

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0