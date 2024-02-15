const marvelHeroes = ["thor", "spiderman","ironman"]
const dcHeroes = ["superman", "batman", "aquaman"]
//marvelHeroes.push(dcHeroes)
//console.log(marvelHeroes);
//console.log(marvelHeroes[3][1])

const mergedHeroes = marvelHeroes.concat(dcHeroes)
console.log(mergedHeroes)

const allHeroes = [...marvelHeroes, ...dcHeroes]
console.log(allHeroes)

const newArray = [1,2,3,[4,5], [6,7,[8,9]]]
console.log(newArray)
const anotherArray = newArray.flat(Infinity)
console.log(anotherArray)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2, score3))