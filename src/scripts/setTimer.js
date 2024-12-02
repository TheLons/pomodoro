import { modeTimes, minutes, seconds, currentModeTimer, currentModeTimerActive } from './init';
import { formatTime } from './basicFunctions'; 

export function setTimer() {
    if (currentModeTimerActive.mode !== 'rest' && currentModeTimerActive.mode !== 'rest_long') {
        minutes.innerText = formatTime(modeTimes[this.value].minutes);
        seconds.innerText = formatTime(modeTimes[this.value].seconds);
    }

    currentModeTimer.minutes = modeTimes[this.value].minutes;
    currentModeTimer.seconds = modeTimes[this.value].seconds;

    currentModeTimerActive.activeMode = this.value;
}