'use strict';

function retrieveData() {
  var scores = JSON.parse(localStorage.getItem('final'));
  for (var i = 0; i < scores.length; i++) {
    var scoreElement = document.createElement('li');
    var list = document.getElementById('myList');
    scoreElement.textContent = scores[i].name + ' - ' + scores[i].level + ' - ' + scores[i].time;
    console.log(scoreElement);
    list.appendChild(scoreElement);
  }
}
retrieveData();

