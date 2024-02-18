// for

for (i = 0; i <= 5 ; i++) {
    let uniqueNumber = 5;
    if (i === uniqueNumber) {
        console.log(`We are at our special case which gives uniques number that is ${i}`)
        break;
    }
    console.log(i)
}

//table
const tableToBePrinted = 43;
for (let i = 1 ; i<=10 ; i++) {
    console.log(`${tableToBePrinted}*${i}=${i*tableToBePrinted}`)
}

//nested loops
for (i = 0 ; i < 5 ; i++) {

    for(j = 0 ; j < 5 ; j++) {
        console.log(`Outer loop is ${i} and inner loop is ${j}`)
    }
    console.log()
}