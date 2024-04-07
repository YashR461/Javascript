let btn = document.querySelector("button")

function randomColorGenerator() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`
}

btn.addEventListener('click', () => {
    
    let color = randomColorGenerator();
    let h1 = document.querySelector('h1');
    h1.textContent = color
    
    let div = document.querySelector('div');
    div.style.backgroundColor = color
});
