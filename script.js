const button = document.getElementById('randomButton');
const gameplayAvg = document.getElementById('gameplayAverage');
const restart = document.getElementById('restart');
const avgtime = document.getElementById('time')
const winScreen = document.getElementById('winScreen')
const start = document.getElementById('start')
const timerElement = document.getElementById('timer');
const total = document.getElementById('totalTime');
const gameElement = document.getElementById('game');
const addFakeButtonCheckbox = document.getElementById('FakeButtonCheckbox');
const checkboxElement = document.getElementById('checkboxContainer')
const colorText = document.getElementById('colorText');
let colorGame = false;
let timerInterval;
let rando = 0;
let seconds = 0.0;
let clickCount = 0;

const colors = ["#7CB4CF", "#CB98C3", "#FAC7CB", "#5A672D", "#E25F26", "#FEB519"];


function getRandomPosition() {
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
}

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
        
        

        if(colorGame){

            const randomIndex = Math.floor(Math.random() * colors.length);
            button.style.backgroundColor = colors[randomIndex];
            colorText.textContent = `click ${colors[randomIndex].toUpperCase()}`

            let fakerandomIndex = Math.floor(Math.random() * colors.length);
            while(fakerandomIndex == randomIndex){
                fakerandomIndex = Math.floor(Math.random() * colors.length);
            }
            fakeButton.style.backgroundColor = colors[fakerandomIndex];
            button.style.backgroundColor = colors[randomIndex];
            
            switch (randomIndex) {
                case 0:
                    colorText.textContent = `click BLUE`
                    break;
                case 1:
                    colorText.textContent = `click PURPLE`
                    break;
                case 2:
                    colorText.textContent = `click PINK`
                    break;
                case 3:
                    colorText.textContent = `click GREEN`
                    break;
                case 4:
                    colorText.textContent = `click ORANGE`
                    break;
                case 5:
                    colorText.textContent = `click YELLOW`
                    break;

                default:
                    break;
            }
        }
        const randomPosition = getRandomPosition();
        button.style.left = `${randomPosition.x}px`;
        button.style.top = `${randomPosition.y}px`;
        while(true){
         fakerandomPosition = getRandomPosition();
         if(Math.abs(randomPosition.x - fakerandomPosition.x) >= 250 && Math.abs(randomPosition.y - fakerandomPosition.y) >= 250){
            break;
         }
        }
        fakeButton.style.left = `${fakerandomPosition.x}px`;
        fakeButton.style.top = `${fakerandomPosition.y}px`;
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


function addFakeButton() {
    fakeButton.style.display = 'block';
    colorText.style.display = 'block';
}

function removeFakeButton() {
    fakeButton.style.display = 'none';
    colorText.style.display = 'none';
}

button.addEventListener('click', setRandomPosition);

//Click Start button
start.addEventListener('click', () => {
    gameElement.style.display = 'block';
    checkboxElement.style.display ='none';
    button.style.display= 'block';
    start.style.display = 'none';
    clickCount = 0;
    startTimer();
    setRandomPosition();
});

//Click restart button
restart.addEventListener('click', () => {
    start.style.display = 'block';
    checkboxElement.style.display ='block';
    winScreen.style.display = 'none';
});

addFakeButtonCheckbox.addEventListener('change', () => {
    if (addFakeButtonCheckbox.checked) {
        addFakeButton();
        colorGame = true;

    } else {
        removeFakeButton();
        colorGame = false;
    }
});