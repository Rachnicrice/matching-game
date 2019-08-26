'use strict';

var placesOccupied = [];
var cardsUsed = [];
var clicked = [];
Card.list = [];

function Card (name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Card.list.push(this);
}

function createCards () {
  new Card ('kitten1', './images/kitten1.jpeg');
  new Card ('kitten2', './images/kitten2');
}

function createRandomPlace (placehold1, placehold2) {
  //Generate a number between the first placeholder and last placeholder for the image to go
  var createNumber = Math.random()*((placehold2 + 1) - placehold1) + placehold1;
  var randomPlace = Math.floor(createNumber);

  while (placesOccupied.includes(randomPlace) === true) {
    createNumber = Math.random()*((placehold2 + 1) - placehold1) + placehold1;
    randomPlace = Math.floor(createNumber);
  }

  return randomPlace;
}

function createRandomCard () {
  //Generate a random number which will be used to determine which image in the Card array will be shown
  var randomCard = Math.floor(Math.random() * Card.list.length);

  while (cardsUsed.includes(randomCard)=== true) {
    randomCard = Math.floor(Math.random() * Card.list.length);
  }
  return randomCard;
}

function placeImage (numImages) {
  //Place the image on the page based on the randomly generated placehold number.
  //Keep track of where images have already been placed
  //Do this twice for each image
  for (var i = 0; i < numImages; i++) {
    var card = createRandomCard();
    cardsUsed.push(card);

    var img = document.createElement('img');
    img.src = Card.list[card].filepath;
    img.alt = Card.list[card].name;
    img.id = img.alt;

    for (var k = 0; k < 2; k++) {
      var place = createRandomPlace(1, 4);
      placesOccupied.push(place);

      var placeHere = document.getElementById(`img${place}`);

      placeHere.appendChild(img.cloneNode());
      placeHere.dataset.framework
    }
  }
  //Empty the array so the page can reload for the next game
  placesOccupied = [];
  cardsUsed = [];
}

//Function changes the class in the  first and second indexes of the array
function rightCards() {
  document.getElementById(clicked[0]).classList.add('correct');
  document.getElementById(clicked[1]).classList.add('correct');
  removeClickable(clicked[0], clicked[1]);
}

//Function changes the class back in the  first and second indexes of the array
function resetCards() {
  if (document.getElementById(clicked[0].classList) === true) {
    document.getElementById(clicked[0]).classList.replace('reset');
  }
  else {
    document.getElementById(clicked[0]).classList.add('reset');
  }

  if(document.getElementById(clicked[1].classList) === true) {
    document.getElementById(clicked[1]).classList.replace('reset');
  }
  else {
    document.getElementById(clicked[1]).classList.add('reset');
  }
}

//Checks to see if array has two items in the array then empties the the array when  === 2
function checkChoices () {
  if (clicked[0] === clicked[1]) {
    rightCards();
    removeClickable();
  } else {
    resetCards();
  }
}

function checkClicks () {
  if (clicked.length === 2) {
    checkChoices();
    clicked = [];
  }
}


function clickHandler (e) {
  checkClicks();


  clicked.push(e.target.alt);
  console.log(clicked)
}

function setUpEventListener (numDivs) {
  for (var i = 1; i < numDivs + 1; i++) {
    var container = document.getElementById(`img${i}`);
    container.addEventListener('click', clickHandler);
  }
}

function removeClickable (event) {
  var container = event.target.id;
  console.log(container)
  container.removeEventListener();
}

createCards();
placeImage(2);
setUpEventListener(4);

