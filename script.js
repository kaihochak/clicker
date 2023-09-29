const button = document.getElementById('randomButton');
const gameplayAvg = document.getElementById('gameplayAverage');
const restart = document.getElementById('restart');
const avgtime = document.getElementById('time')
const winScreen = document.getElementById('winScreen')
const start = document.getElementById('start')
const timerElement = document.getElementById('timer');
const total = document.getElementById('totalTime');
const gameElement = document.getElementById('game');
let timerInterval;
let rando = 0;
let seconds = 0.0;

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

            rando = Math.random() * 0.4 + 0.125;
            gameplayAvg.textContent = `Average time: ${rando.toFixed(3)} seconds`;
        
        const randomPosition = getRandomPosition();
        button.style.left = `${randomPosition.x}px`;
        button.style.top = `${randomPosition.y}px`;
        clickCount++;
    }
    else{
        button.style.display = 'none';
        winScreen.style.display = 'block';
        gameElement.style.display = 'none';
        stopTimer();
        total.textContent = `Total time: ${seconds.toFixed(3)} seconds`;
        avgtime.textContent = `${rando.toFixed(3)} seconds`; 
    }
}

function startTimer() {
    timerElement.textContent = `Time: 0 seconds`;
    seconds = 0.0;
    timerInterval = setInterval(() => {
        seconds += 0.1;
        timerElement.textContent = `Time: ${seconds.toFixed(1)} seconds`;
    }, 100);
}

function stopTimer() {
    clearInterval(timerInterval);
}

button.addEventListener('click', setRandomPosition);

start.addEventListener('click', () => {
    gameElement.style.display = 'block';
    button.style.display= 'block';
    start.style.display = 'none';
    clickCount = 0;
    startTimer();
    setRandomPosition();
});

restart.addEventListener('click', () => {
    start.style.display = 'block';
    winScreen.style.display = 'none';
});

