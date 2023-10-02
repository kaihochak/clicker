
const body = document.querySelector('body');
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
const vegetableStartbutton = document.getElementById('vegetableStart');
const moodStartbutton = document.getElementById('moodStart');
const startButtons = document.getElementById('checkboxContainer');
const colorText = document.getElementById('colorText');
const exitButton = document.getElementById('exit');
const wrongIndicator = document.getElementById('wrongIndicator');

let colorGame = false;
let animalGame = false;
let vegetableGame = false;
let moodGame = false;
let timerInterval;
let rando = 0;
let seconds = 0.0;
let clickCount = 0;

const colors = ["#7CB4CF", "#CB98C3", "#FAC7CB", "#5A672D", "#E25F26", "#FEB519"];
const animalpics=["bear", "cat", "cheeta", "deer", "elephant", "fox", "hippo", "koala", "lama", "lion", "monkey", "panda", "pig","sheep","sloth", "tiger", "raccoon","zebra"];
const vegetablepics = ["aubergine", "broccoli","cabbage","carrot","garlic","greenpepper","mushroom","onion","pea","potato","pumpkin","radish","redchilli","redpepper","tomato"];
const moodpics = ["angry","excited","happy","neutral","upset"];

function getRandomPosition() {
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight + 50;

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

function newAnimalIndex(){
    return Math.floor(Math.random() * animalpics.length);
}

function newVegetableIndex(){
    return Math.floor(Math.random() * vegetablepics.length);
}

function newMoodIndex(){
    return Math.floor(Math.random() * moodpics.length);
}

function startGame() {

    // change background back to plain
    body.style.backgroundImage = 'none';

    // during
    if(clickCount < 10){

        // dummy result genration
        rando = Math.random() * 0.4 + 0.125;
        gameplayAvg.textContent = `Average time: ${rando.toFixed(3)} seconds`;

        // hide wrong indicator
        wrongIndicator.style.display = 'none';

        // specifically for color game
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
        // specifically for animal game
        else if(animalGame){
            const animalPic = newAnimalIndex();
            button.innerHTML = `<img id = "animalpics" src = "animals/${animalpics[animalPic]}.png">`
            colorText.textContent = `click ${animalpics[animalPic].toUpperCase()}`
            
            let fakerandomIndex = newAnimalIndex();
            while(fakerandomIndex == animalPic){
                fakerandomIndex = animalPic();
            }
            fakeButton.innerHTML = `<img id = "animalpics" src = "animals/${animalpics[fakerandomIndex]}.png"></img>`

            fakeButton.style.backgroundColor = 'none';
            button.style.backgroundColor = 'none';
        }
        // specifically for vegetable game
        else if(vegetableGame){
            const vegetablePic = newVegetableIndex();
            button.innerHTML = `<img id = "vegetablepics" src = "vegetables/${vegetablepics[vegetablePic]}.png">`
            colorText.textContent = `click ${vegetablepics[vegetablePic].toUpperCase()}`
            
            let fakerandomIndex = newVegetableIndex();
            while(fakerandomIndex == vegetablePic){
                fakerandomIndex = vegetablePic();
            }
            fakeButton.innerHTML = `<img id = "vegetablepics" src = "vegetables/${vegetablepics[fakerandomIndex]}.png"></img>`

            fakeButton.style.backgroundColor = 'none';
            button.style.backgroundColor = 'none';
        }
        // specifically for mood game
        else if(moodGame){
            const moodPic = newMoodIndex();
            button.innerHTML = `<img id = "moodpics" src = "mood/${moodpics[moodPic]}.png">`
            colorText.textContent = `click ${moodpics[moodPic].toUpperCase()}`
            
            let fakerandomIndex = newMoodIndex();
            while(fakerandomIndex == moodPic){
                fakerandomIndex = moodPic();
            }
            fakeButton.innerHTML = `<img id = "moodpics" src = "mood/${moodpics[fakerandomIndex]}.png"></img>`

            fakeButton.style.backgroundColor = 'none';
            button.style.backgroundColor = 'none';
        }

        // randomize button position
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

        // randomize fake button position
        fakeButton.style.left = `${fakerandomPosition.x}px`;
        fakeButton.style.top = `${fakerandomPosition.y}px`;
        clickCount++;
    }

    // game over
    else{
        // hide button
        button.style.display = 'none';

        // show win screen
        body.style.backgroundImage = 'url("edited-watercolor-rainbow-background.jpg")';
        winScreen.style.display = 'flex';
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

function addAnimals() {
    animalGame = true;
    fakeButton.style.display = 'block';
    colorText.style.display = 'block';

    button.style.backgroundColor = 'none';
    fakeButton.style.backgroundColor = 'none';
}

function addVegetables() {
    vegetableGame = true;
    fakeButton.style.display = 'block';
    colorText.style.display = 'block';

    button.style.backgroundColor = 'none';
    fakeButton.style.backgroundColor = 'none';
}

function addMood() {
    moodGame = true;
    fakeButton.style.display = 'block';
    colorText.style.display = 'block';

    button.style.backgroundColor = 'none';
    fakeButton.style.backgroundColor = 'none';
}

function removeFakeButton() {
    colorGame = false;
    fakeButton.style.display = 'none';
    colorText.style.display = 'none';
}

button.addEventListener('click', startGame);

// Click Basic Game button
start.addEventListener('click', () => {

    button.style.backgroundColor = '#d64b41';
    button.style.opacity = 0.8;
    gameElement.style.display = 'flex';
    titleHeader.style.display ='none';
    button.style.display= 'block';

    animalGame =false;
    vegetableGame = false;
    moodGame = false;
    button.innerHTML = ''

    clickCount = 0;
    removeFakeButton();
    startTimer();
    startGame();
});

// Click color start button
colorStartbutton.addEventListener('click', () => {
    gameElement.style.display = 'flex';
    titleHeader.style.display ='none';
    button.style.display= 'block';

    animalGame = false;
    vegetableGame = false;
    moodGame = false;
    button.innerHTML = ''
    fakeButton.innerHTML = ''

    clickCount = 0;
    addFakeButton();
    startTimer();
    startGame();
});

// Click animal start button
animalStartbutton.addEventListener('click', () => {
    gameElement.style.display = 'flex';
    titleHeader.style.display ='none';
    button.style.display= 'block';
    clickCount = 0;
    removeFakeButton();
    addAnimals();
    button.style.backgroundColor = "";
    startTimer();
    startGame();
});

// Click vegetable start button
vegetableStartbutton.addEventListener('click', () => {
    gameElement.style.display = 'flex';
    titleHeader.style.display ='none';
    button.style.display= 'block';
    clickCount = 0;
    removeFakeButton();
    addVegetables();
    button.style.backgroundColor = "";
    startTimer();
    startGame();
});

// Click mood start button
moodStartbutton.addEventListener('click', () => {
    gameElement.style.display = 'flex';
    titleHeader.style.display ='none';
    button.style.display= 'block';
    clickCount = 0;
    removeFakeButton();
    addMood();
    button.style.backgroundColor = "";
    startTimer();
    startGame();
});

// Click restart button
restart.addEventListener('click', () => {
    titleHeader.style.display ='flex';
    winScreen.style.display = 'none';
});

// exit button
exitButton.addEventListener('click', () => {
    
    // reset start page
    titleHeader.style.display ='flex';
    body.style.backgroundImage = 'url("edited-watercolor-rainbow-background.jpg")';

    // close game page
    gameElement.style.display = 'none';

    // stop timer
    stopTimer();
});

// fake button click
fakeButton.addEventListener('click', () => {
    wrongIndicator.style.display = 'flex';
    setTimeout(() => {
        wrongIndicator.style.display = 'none';
    }, 500);
});
