'use strict';

//variables
const button = document.getElementById('button');
const body = document.querySelector('body');
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
//menubar.addEventListener('click', updateMenu);

//hamburger menu
function hamburgerMenu() {
  nav.classList.toggle('no-show');
}

//random date list - array
const date = [
  ('<a href="http://kegsteakhouse.com/en/get-table">The Keg</a>'),
  ('<a href="https://www.milestonesrestaurants.com/en/locations/5238/calgary-shaqanappi-trail-nw.html#">Milestones</a>'),
  ('<a href="https://bostonpizza.com/en/reservation.html">Boston Pizza</a>'),
  ('<a href="http://www.petersdrivein.com/"> Peters\' Drive-In</a>'),
  ('<a href="https://unapizzeria.com/?pmo=AB"> Una Pizzeria</a>'),
  ('<a href="https://www.redsdiner.com/"> Red\'s Diner</a>'),
  ('<a href="https://famoso.ca/"> Famoso</a>')
];

const dessert = [
  ('<a href="https://www.cravecupcakes.ca/">Crave Cupcakes</a>'),
  ('<a href="https://www.dairyqueen.com/en-ca/locations/ab/calgary/2060-symons-valley-pky-nw/12997">Dairy Queen</a>'),
  ('<a href="http://www.sweetreliefpastries.com/">Sweet Relief Pastries</a>'),
  ('<a href="https://www.madebymarcus.ca/"> Made by Marcus</a>'),
  ('<a href="https://www.byollia.com/">Ollia Macarons & Tea</a>')
];

const activity = [
  ('<a href="https://www.cineplex.com/Theatres/Location/Calgary">Cineplex</a>'),
  ('<a href="https://www.calgary.ca/csps/parks/locations/outdoor-skating-rinks.html">Skating</a>'),
  ('<a href="https://www.calgaryzoo.com/">Zoo</a>'),
  ('<a href="https://www.glenbow.org/">Glenbow Museum</a>'),
  ('<a href="http://www.vingogh.ca/"> VinGogh</a>')
];

//assigning variables
const dinner = document.getElementById('dinner');
const randomDin = document.getElementById('randomDin');
const randomDes = document.getElementById('randomDes');
const randomAct = document.getElementById('randomAct');
let randAct;
let randDes;
let randDate;

//making it so the button outputs result
function updateDinner(){
  if (dinner.value === 'Choose my date!') {
    //this is for the dinner array
   randDate = date[Math.floor(Math.random() * date.length)];
    //this is for the dessert array
   randDes = dessert[Math.floor(Math.random() * dessert.length)];
    //this is for the activity array
    randAct = activity[Math.floor(Math.random() * activity.length)];
   }
  //this is for the paragraph tags
  randomAct.innerHTML = randAct;
  randomDin.innerHTML = randDate;
  randomDes.innerHTML = randDes;
 }