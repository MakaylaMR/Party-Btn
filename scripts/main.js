'use strict'

//variables
const button = document.getElementById('button');
const body = document.querySelector('body');
const image = document.getElementById('image').src;
//const nav is the id for the ul element... does this also affect all li child elements?
const nav = document.getElementById('show');


//Event
//whats the difference between this and onclick in HTML?
button.addEventListener('click', updateButton);


//Button function
//what does tony mean by state of toggle = on/off or open/closed?
function updateButton() {
  if (button.value === 'Dark Mode') {
    button.value = 'Light Mode';
  } else {
    button.value = 'Dark Mode';
  }
}

//Background-color for dark mode
function updateBackground() {
    body.classList.toggle('dark-mode');
}

//Event for hamburger menu
menubar.addEventListener('click', updateMenu);

//hamburger menu function

//hamburger menu
function hamburgerMenu() {
  nav.classList.toggle('no-show');
}
