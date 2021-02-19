//The button acts the same way as if it were a dark mode/light mode button except i wanted to add a little more color and fun to it
'use strict';

//variables
const button = document.getElementById('button');
const body = document.querySelector('body');
const p = document.querySelector('p');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');



//Event
//whats the difference between this and onclick in HTML?
button.addEventListener('click', updateButton);


//Button function
//what does tony mean by state of toggle = on/off or open/closed?
function updateButton() {
  if (button.value === 'Party Mode') {
    button.value = 'Normal Mode';
    p.innerHTML = 'Click me for boring'
  } else {
    button.value = 'Party Mode';
    p.innerHTML = 'Click me for fun time';
  }
}

//Background-color for party mode
function updateBackground() {
  //background colour
    body.classList.toggle('party-mode');
  //svgs
    one.classList.toggle('one');
    two.classList.toggle('two');
    three.classList.toggle('three');
    four.classList.toggle('four');
    five.classList.toggle('five');
    six.classList.toggle('six');
    seven.classList.toggle('seven');
    eight.classList.toggle('eight');
}