const button = document.getElementById('randomButton');
const restart = document.getElementById('restart');
const avgtime = document.getElementById('time')
const winScreen = document.getElementById('winScreen')
const start = document.getElementById('start')
let rando = 0;

let clickCount = 0;

function getRandomPosition() {
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
}

function setRandomPosition() {
    if(clickCount < 10){
        const randomPosition = getRandomPosition();
        button.style.left = `${randomPosition.x}px`;
        button.style.top = `${randomPosition.y}px`;
        clickCount++;
    }
    else{
        button.style.display = 'none';
        winScreen.style.display = 'block';
        rando = Math.random() * 0.4 + 0.125;
        avgtime.textContent = `${rando.toFixed(3)} seconds`;
    }
}

button.addEventListener('click', setRandomPosition);

start.addEventListener('click', () => {
    button.style.display = 'block';
    start.style.display = 'none';
    clickCount = 0;
    setRandomPosition();
});

restart.addEventListener('click', () => {
    start.style.display = 'block';
    winScreen.style.display = 'none';
});
