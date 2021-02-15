'use strict'

//variables
const button = document.querySelector('input');
const paragraph = document.querySelector('p');
const body = document.querySelector('body');


//Event
button.addEventListener('click', updateButton);


//Function
function updateButton() {
  if (button.value === 'Dark Mode') {
    button.value = 'Light Mode';
    paragraph.textContent = 'Dark Mode Activated';
  } else {
    button.value = 'Dark Mode';
    paragraph.textContent = 'Light Mode Activated';
  }
}

function updateBackground() {
    body.classList.toggle('dark-mode');
}