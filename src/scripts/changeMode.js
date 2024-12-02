import { currentModeTimer, currentModeTimerActive, modeTimes, minutes, seconds } from './init';
import { formatTime } from './basicFunctions';

export const changeMode = () => {
    const activeCheckbox = document.querySelectorAll('.switch input');
    console.log(activeCheckbox);
    for (let c of activeCheckbox) {
        c.addEventListener('change', function() {
            
            let currentMode;
            if (this.checked) {
                currentMode = this.value;
            }

            if (currentMode === "active") {
                adjustTime(currentModeTimerActive.activeMode);

            } else if (currentMode === "rest" || currentMode === "rest_long") {
                adjustTime(currentMode);
            }
        })
    }
}

const adjustTime = (mode) => {
    currentModeTimer.seconds = modeTimes[mode].seconds;
    currentModeTimer.minutes = modeTimes[mode].minutes;

    seconds.innerText = formatTime(modeTimes[mode].seconds);
    minutes.innerText = formatTime(modeTimes[mode].minutes);

    console.log(modeTimes[mode]);

    currentModeTimerActive.mode = mode;
    console.log(currentModeTimerActive.mode);
}