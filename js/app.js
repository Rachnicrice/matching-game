'use strict';

var placesOccupied = [];
var cardsUsed = [];

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

    for (var k = 0; k < 2; k++) {
      var place = createRandomPlace();
      placesOccupied.push(place);

      var placeHere = document.getElementById(`img${place}`);

      placeHere.appendChild(img);
    }
  }
  //Empty the array so the page can reload for the next game
  var placesOccupied = [];
  var cardsUsed = [];
}

createCards();
placeImage();


