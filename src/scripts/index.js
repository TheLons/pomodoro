import settings from './settings.js';

const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const start_button = document.querySelector('.button-start');
const stop_button = document.querySelector('.button-stop');

let intervalID;
let minutesCount = 25;
let secondsCount = 0;

start_button.addEventListener("click", () => {
    intervalID = setInterval(changeTime, 1000);
    stop_button.disabled = false;
    start_button.disabled = true;
});

stop_button.addEventListener("click", () => {
    clearInterval(intervalID);
    stop_button.disabled = true;
    start_button.disabled = false;

    minutesCount = 25;
    secondsCount = 0;
    minutes.textContent = "25";
    seconds.textContent = "00";
});

settings();

function changeTime() {
    if (secondsCount === 0) {
        if (minutesCount === 0) {
            alert('It is time to rest');
        } else {
            minutesCount--;
            secondsCount = 60;
            minutes.textContent = minutesCount;
        }
    }

    secondsCount--;
    seconds.textContent = secondsCount;
}