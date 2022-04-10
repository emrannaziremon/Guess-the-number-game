'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let getScore = document.querySelector('.score');
let getNumber = document.querySelector('.number');
let getGuess = document.querySelector('.guess');

let getBody = document.querySelector('body');

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(getGuess.value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No Number Added Yet😒');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number😃');
    getNumber.textContent = secretNumber;

    getBody.style.backgroundColor = '#60b347';
    getNumber.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      getScore.textContent = score;
    } else {
      displayMessage('you lost the game');
      getScore.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start Guessing');
  getScore.textContent = score;
  getNumber.textContent = '?';
  getGuess.value = '';

  getBody.style.backgroundColor = '#333';
  getNumber.style.width = '10rem';
});
