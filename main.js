'use strict';

function changeColor () {
    const colorButtons = document.querySelectorAll('.color-change');

    for (const ele of colorButtons) {
        ele.style.color =  'red';
    }
}

document.querySelector('.color-changer').addEventListener('click', changeColor);

// Event.preventDefault() → will stop something from being done 

function validateInput (evt) {
    evt.preventDefault();

    const numberInput = document.querySelector('#number-input');
    const userInput = numberInput.value;
    const feedBack = document.querySelector('#formFeedback');

    if (isNaN(userInput) || userInput >= 10) {
        feedBack.textContent = 'Please enter a smaller number.';
    } else {
        feedBack.textContent = 'You are good to go!';
    }
}

document.querySelector('.number-form').addEventListener('submit', validateInput);

