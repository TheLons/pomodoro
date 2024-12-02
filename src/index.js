import settings from './scripts/settings.js';
import imageChanger from './scripts/imageChanger.js';
import { currentModeTimer, minutes, seconds, start_button, stop_button, radio_buttons } from './scripts/init.js';
import { setTimer } from './scripts/setTimer.js';
import { formatTime } from './scripts/basicFunctions.js';
import { changeMode } from './scripts/changeMode.js';

let intervalID;

for (let rb of radio_buttons) {
    rb.addEventListener('click', setTimer);
}

start_button.addEventListener('click', () => {
    
    let secondsCount = currentModeTimer.seconds;
    let minutesCount = currentModeTimer.minutes;

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

    minutes.innerText = formatTime(currentModeTimer.minutes);
    seconds.innerText = formatTime(currentModeTimer.seconds);
});

settings();
imageChanger();
changeMode();
