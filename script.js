const container = document.querySelector(".time-container");
/*const timeHours = document.querySelector("#hrs");
const timeMinutes = document.querySelector("#mins");
const timeSeconds = document.querySelector("#secs");
const timeMilli = document.querySelector("#milli");*/

const startButton = document.querySelector("#start-button");
const resetButton = document.querySelector("#reset-button");

let milli = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let time;
let isRunning = false;

function updateHTML(){
    container.innerHTML = `
    <p id="hrs">${hours.toString().padStart(2, '0')}:</p>
    <p id="mins">${minutes.toString().padStart(2, '0')}:</p>
    <p id="secs">${seconds.toString().padStart(2, '0')}:</p>
    <p id="milli">${Math.floor(milli/10).toString().padStart(2, '0')}</p>
    `
}

function updateTimer() {
    milli += 10;
    if(milli == 1000){
        milli = 0;
        seconds++;
        if(seconds==60) {
            minutes++;
            seconds = 0;
            if(minutes == 60){
                hours++;
                minutes=0;
            }
        } 
    }  
    updateHTML();
}

function startTimer() {
    if(isRunning==false) {
        time = setInterval(updateTimer, 10);
        isRunning = true;
        startButton.innerText = "Stop";
        startButton.style.backgroundColor = "brown";
    } else {
        stopTimer();
    }
}

function stopTimer(){
    clearInterval(time);
    isRunning = false;
    startButton.innerText = "Start";
    startButton.style.backgroundColor = "green";
}

function resetTimer(){
    milli = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateHTML();
    stopTimer();
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);