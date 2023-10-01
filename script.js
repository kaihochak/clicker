const button = document.getElementById('randomButton');
const gameplayAvg = document.getElementById('gameplayAverage');
const restart = document.getElementById('restart');
const avgtime = document.getElementById('time')
const winScreen = document.getElementById('winScreen')
const start = document.getElementById('start');
const titleHeader = document.getElementById('startScreen')
const timerElement = document.getElementById('timer');
const total = document.getElementById('totalTime');
const gameElement = document.getElementById('game');
const colorStartbutton = document.getElementById('colorStart');
const animalStartbutton = document.getElementById('animalStart');
const startButtons = document.getElementById('checkboxContainer');
const colorText = document.getElementById('colorText');
let colorGame = false;
let animalGame = false;
let timerInterval;
let rando = 0;
let seconds = 0.0;
let clickCount = 0;

const colors = ["#7CB4CF", "#CB98C3", "#FAC7CB", "#5A672D", "#E25F26", "#FEB519"];
const animalpics=["bear", "cat", "cheeta", "deer", "elephant", "fox", "hippo", "koala", "lama", "lion", "monkey", "panda", "pig","sheep","sloth", "tiger", "wolf","zebra"];


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

function newRandomIndex(){
    return Math.floor(Math.random() * colors.length);
}

function startGame() {
    if(clickCount < 10){

        rando = Math.random() * 0.4 + 0.125;
        gameplayAvg.textContent = `Average time: ${rando.toFixed(3)} seconds`;

        if(colorGame){

            const randomIndex = newRandomIndex();
            button.style.backgroundColor = colors[randomIndex];
            colorText.textContent = `click ${colors[randomIndex].toUpperCase()}`

            let fakerandomIndex = newRandomIndex();
            while(fakerandomIndex == randomIndex){
                fakerandomIndex = newRandomIndex();
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

        if(animalGame){
            const animalPic = Math.floor(Math.random() * animalpics.length);
            button.innerHTML = `<img id = "animalpics" src = "animals/${animalpics[animalPic]}.png">`
        }

        const randomPosition = getRandomPosition();
        button.style.left = `${randomPosition.x}px`;
        button.style.top = `${randomPosition.y}px`;

        //loop until the buttons dont overlap
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
        total.textContent = `${seconds.toFixed(3)} seconds`;
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
    colorGame = true;
    fakeButton.style.display = 'block';
    colorText.style.display = 'block';
}

function removeFakeButton() {
    colorGame = false;
    fakeButton.style.display = 'none';
    button.style.backgroundColor = 'black';
    colorText.style.display = 'none';
}

button.addEventListener('click', startGame);

//Click Start button
start.addEventListener('click', () => {
    gameElement.style.display = 'block';
    titleHeader.style.display ='none';
    button.style.display= 'block';

    animalGame =false;
    button.innerHTML = ''

    clickCount = 0;
    removeFakeButton();
    startTimer();
    startGame();
});

colorStartbutton.addEventListener('click', () => {
    gameElement.style.display = 'block';
    titleHeader.style.display ='none';
    button.style.display= 'block';

    animalGame = false;
    button.innerHTML = ''

    clickCount = 0;
    addFakeButton();
    startTimer();
    startGame();
});


animalStartbutton.addEventListener('click', () => {
    gameElement.style.display = 'block';
    titleHeader.style.display ='none';
    button.style.display= 'block';
    animalGame = true;
    clickCount = 0;
    removeFakeButton();
    startTimer();
    startGame();
});
//Click restart button
restart.addEventListener('click', () => {
    titleHeader.style.display ='block';
    winScreen.style.display = 'none';
});

