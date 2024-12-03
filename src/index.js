import settings from './scripts/settings.js';
import imageChanger from './scripts/imageChanger.js';
import { currentModeTimer, minutes, seconds, start_button, stop_button, radio_buttons, currentModeTimerActive } from './scripts/init.js';
import { setTimer } from './scripts/setTimer.js';
import { formatTime } from './scripts/basicFunctions.js';
import { changeMode } from './scripts/changeMode.js';
import { progressBar } from './scripts/progressbar.js';

let intervalID;

for (let rb of radio_buttons) {
    rb.addEventListener('click', setTimer);
}

start_button.addEventListener('click', () => {
    
    let secondsCount = currentModeTimer.seconds;
    let minutesCount = currentModeTimer.minutes;

    document.querySelector('#work-mode-time').disabled = true;
    document.querySelector('#rest-mode-time').disabled = true;
    document.querySelector('#long-rest-mode-time').disabled = true;

    progressBar();
    if (currentModeTimerActive.mode === 'rest' || currentModeTimerActive.mode === 'rest_long') {
        document.querySelector('.animation-rest').style.display = 'flex';
    } else {
        document.querySelector('.animation-work').style.display = 'flex';
    }

    intervalID = setInterval(() => {
        if (secondsCount === 0) {
            if (minutesCount === 0) {
                alert('It is time to rest');
            } else {
                minutesCount--;
                secondsCount = 60;
                minutes.innerText = formatTime(minutesCount);
            }
        }

        secondsCount--;
        seconds.innerText = formatTime(secondsCount);

    }, 1000);
    stop_button.disabled = false;
    start_button.disabled = true;
});

stop_button.addEventListener('click', () => {
    clearInterval(intervalID);
    stop_button.disabled = true;
    start_button.disabled = false;

    document.querySelector('#work-mode-time').disabled = false;
    document.querySelector('#rest-mode-time').disabled = false;
    document.querySelector('#long-rest-mode-time').disabled = false;

    minutes.innerText = formatTime(currentModeTimer.minutes);
    seconds.innerText = formatTime(currentModeTimer.seconds);

    document.querySelector('.animation-work').style.display = 'none';
    document.querySelector('.animation-rest').style.display = 'none';
});

settings();
imageChanger();
changeMode();
