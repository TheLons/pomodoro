import { currentModeTimer } from './init';

export const progressBar = () => {
    const progress = document.querySelector("#pomodoroBar");
    const progressBar = document.querySelector('#pomodoroProgress');
    const stop_button = document.querySelector(".button-stop");

    let width = 1;
    const totalTime = currentModeTimer.seconds + currentModeTimer.minutes * 60;
    let id = setInterval(increaseProgressBar, totalTime / 100 * 1000);
    progressBar.style.display = 'block';

    function increaseProgressBar() {
        if (width >= 100) {
            clearInterval(id);
            progressBar.style.display = 'none';
        } else {
            width++;
            progress.style.width = width + '%';
            progress.innerHTML = width + '%';
        }
    }

    stop_button.addEventListener('click', () => {
        clearInterval(id);
        progress.style.width = 1 + '%';
        progress.innerHTML = 1 + '%';
        progressBar.style.display = 'none';
    })
}

