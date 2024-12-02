export const modeTimes = {
    'normal': {
        'seconds': 0,
        'minutes': 25,
    },
    'hard': {
        'seconds': 0,
        'minutes': 35,
    },
    'extreme': {
        'seconds': 0,
        'minutes': 45,
    },
    'impossible': {
        'seconds': 0,
        'minutes': 55,
    },
    'rest': {
        'seconds': 0,
        'minutes': 5,
    },
    'rest_long': {
        'seconds': 0,
        'minutes': 15
    }
}

export const currentModeTimer = {
    'seconds': 0,
    'minutes': 25,
}

export var currentModeTimerActive = {
    'mode': 'active',
    'activeMode': 'normal',
}

export const minutes = document.querySelector(".minutes");
export const seconds = document.querySelector(".seconds");

export const start_button = document.querySelector('.button-start');
export const stop_button = document.querySelector('.button-stop');

export const radio_buttons = document.querySelectorAll('.radio-button');