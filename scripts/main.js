'use strict'

//variables
const button = document.getElementById('button');
const body = document.querySelector('body');
const li = document.getElementById('show');


//Event
//whats the difference between this and onclick in HTML?
button.addEventListener('click', updateButton);


//Button
//what does tony mean by state of toggle = on/off or open/closed?
function updateButton() {
  if (button.value === 'Dark Mode') {
    button.value = 'Light Mode';
  } else {
    button.value = 'Dark Mode';
  }
}

//Background-color
function updateBackground() {
    body.classList.toggle('dark-mode');
}

//hamburger menu
function hamburgerMenu() {
  li.classList.toggle('no-show');
}
