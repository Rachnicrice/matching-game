'use strict';

var placesOccupied = [];
var cardsUsed = [];
var clickedFramework = [];
var clickedId = [];
var flipped = [];
var correctGuess = 0;
var timeFinished;
var names;
Card.list = [];
Score.list = [];

function Card (name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Card.list.push(this);
}

function Score (name, time) {
  this.name = name;
  this.level = 'Hard';
  this.time = time;
  Score.list.push(this);
}

function createCards () {
  new Card ('newimage1', '/images/newimage1.jpeg');
  new Card ('newimage2', '/images/newimage2.jpeg');
  new Card ('newimage3', '/images/newimage3.jpeg');
  new Card ('newimage4', '/images/newimage4.jpeg');
  new Card ('newimage5', '/images/newimage5.jpeg');
  new Card ('newimage6', '/images/newimage6.jpeg');
  new Card ('newimage7', '/images/newimage7.jpeg');
  new Card ('newimage8', '/images/newimage8.jpeg');
  new Card ('newimage9', '/images/newimage9.jpeg');
  new Card ('newimage10', '/images/newimage10.jpeg');
  new Card ('newimage11', '/images/newimage11.jpeg');
  new Card ('newimage12', '/images/newimage12.jpeg');
  new Card ('newimage13', '/images/newimage13.jpeg');
  new Card ('newimage14', '/images/newimage14.jpeg');
  new Card ('newimage15', '/images/newimage15.jpeg');
  new Card ('newimage16', '/images/newimage16.jpg');
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
      var place = createRandomPlace(1, 32);
      placesOccupied.push(place);

      var placeHere = document.getElementById(`img${place}`);

      placeHere.appendChild(img.cloneNode());
      placeHere.dataset.framework = img.id;
    }
  }
  //Empty the array so the page can reload for the next game
  placesOccupied = [];
  cardsUsed = [];
}

function flipClass (e) {
  e.target.classList.add('flipped');
  flipped.push(e.target);
}

function unflipClass () {
  flipped[0].classList.replace('flipped','unflipped');
  flipped[1].classList.replace('flipped','unflipped');
}

//Function changes the class in the  first and second indexes of the array
function rightCards() {
  var choice1 = document.getElementById(`${clickedId[0]}`);
  var choice2 = document.getElementById(`${clickedId[1]}`);
  choice1.classList.add('correct');
  choice2.classList.add('correct');

  correctGuess++;

  clickedFramework = [];
  clickedId = [];
  flipped = [];
  setUpEventListener(32);
}

//Function changes the class back in the  first and second indexes of the array
function resetCards() {

  console.log(clickedId);

  if (document.getElementById(`${clickedId[0].classList}`) === true) {
    var choice1 = document.getElementById(`${clickedId[0]}`);
    choice1.classList.replace('reset');
  } else {
    choice1 = document.getElementById(`${clickedId[0]}`);
    choice1.classList.add('reset');
  }

  if (document.getElementById(`${clickedId[1].classList}`) === true) {
    var choice2 = document.getElementById(`${clickedId[1]}`);
    choice2.classList.replace('reset');
  } else {
    choice2 = document.getElementById(`${clickedId[1]}`);
    choice2.classList.add('reset');
  }

  clickedFramework = [];
  clickedId = [];
  unflipClass();
  flipped = [];
  setUpEventListener(32);
}

//Checks to see if array has two items in the array then empties the the array when  === 2
function checkChoices (event) {
  if (clickedId[0] === clickedId[1]){
    clickedId.pop();
    clickedFramework.pop();
    flipped.pop();
  } else {
    if (clickedFramework[0] === clickedFramework[1]) {
      rightCards(event);
    } else {
      setTimeout(resetCards, 1500);
    }
  }
}

function checkClicks (event) {
  if (clickedFramework.length === 2) {
    removeEventListener(32);
    checkChoices(event);
  }
}

function clickHandler (e) {
  clickedFramework.push(e.target.parentElement.dataset.framework);
  clickedId.push(e.target.parentElement.id);

  console.log(clickedId);

  flipClass(e);
  checkClicks(e);
}

function setUpEventListener (numDivs) {
  for (var i = 1; i < numDivs + 1; i++) {
    var container = document.getElementById(`img${i}`);
    container.addEventListener('click', clickHandler);
  }
}

function removeEventListener (numDivs) {
  for (var i = 1; i < numDivs + 1; i++) {
    var container = document.getElementById(`img${i}`);
    container.removeEventListener('click', clickHandler);
  }
}

// https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript/7910506
var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;

function countTimer() {
  ++totalSeconds;
  var hour = Math.floor(totalSeconds /3600);
  var minute = Math.floor((totalSeconds - hour*3600)/60);
  var seconds = totalSeconds - (hour*3600 + minute*60);

  document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
  //End code sourced from Stack Overflow

  var whatTime = hour + ":" + minute + ":" + seconds;
  stopTimer(whatTime);
}

function stopTimer (whatTime) {
  if (correctGuess === 16) {
    timeFinished = whatTime;
    console.log(timeFinished);
    getScore();
    clearInterval(timerVar);
  }
}

function saveTime () {
  var storedScores = JSON.stringify(timeFinished);
  localStorage.setItem('score', storedScores);
}

function getSavedData () {
  timeFinished = JSON.parse(localStorage.getItem('score'));
  names = JSON.parse(localStorage.getItem('name'));

  if (Score.list.length) {
    Score.list = JSON.parse(localStorage.getItem('final'));
  }
}

function getScore () {
  saveTime();
  getSavedData();

  new Score (names, timeFinished);
  saveScores();
}

function saveScores () {
  var finalScores = JSON.stringify(Score.list);
  localStorage.setItem('final', finalScores);
}


createCards();
placeImage(16);
setUpEventListener(32);
