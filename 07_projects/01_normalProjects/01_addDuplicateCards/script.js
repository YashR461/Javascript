// video lecture 98
// const container = document.querySelector('.container')
// const card = document.querySelector('.card')

// for (let i = 2; i <= 100; i++) {
//     const newCard = card.cloneNode(true);
//     newCard.textContent = i
//     container.appendChild(newCard);
// }

// video lecture 101

const container = document.querySelector('.container')
const card = document.querySelector('.card')
// console.log(container, card)

// function singleClick() {
//     console.log(`Card is clicked`)
// }
// function doubleClick() {
//     console.log(`Card is double clicked`);
// }
// card.addEventListener('click', singleClick)
// card.addEventListener('dblclick', doubleClick)

// card.addEventListener('click', function() {
//     console.log(`Card is clicked`)
// })
// card.addEventListener('dblclick', function() {
//     console.log(`Gets executed when card is double clicked`)
// })


//assignment

// let count = 2;
// card.addEventListener('click', () => {
//     // using cloneNode
//     // const cardClone = card.cloneNode();
//     //container.append(cardClone)
     
//     //using createElement
//     const newCard = document.createElement('div')
//     newCard.setAttribute('class', 'card');
//     newCard.innerText = count++
//     // newCard.classList.add('card');
//     container.append(newCard);
// })

let count = 2;
card.addEventListener('click', function() {
    const newCard = document.createElement('div')
    newCard.classList.add('card-new');
    newCard.innerText = count++
    container.append(newCard);
})