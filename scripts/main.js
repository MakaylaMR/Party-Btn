'use strict'

//variables
const button = document.querySelector('input');
const paragraph = document.querySelector('p');
const body = document.querySelector('body');


//Event
//whats the difference between this and onclick in HTML?
button.addEventListener('click', updateButton);


//Button
//what does tony mean by state of toggle = on/off or open/closed?
function updateButton() {
  if (button.value === 'Dark Mode') {
    button.value = 'Light Mode';
    paragraph.textContent = 'Dark Mode Activated';
  } else {
    button.value = 'Dark Mode';
    paragraph.textContent = 'Light Mode Activated';
  }
}

//Background-color
function updateBackground() {
    body.classList.toggle('dark-mode');
}