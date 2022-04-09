'use strict';

/* let getTheMessage = document.querySelector('.message').textContent;
console.log(getTheMessage);

getTheMessage = 'Currect Number';

document.querySelector('.number').textContent = 10;
document.querySelector('.guess').value = 22;
document.querySelector('.message').textContent = 'Wohoo We Did'

console.log(getTheMessage);

*/

const secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secrectNumber);
document.querySelector('.number').textContent = secrectNumber;

document.querySelector('.check').addEventListener('click', function () {
//   let theMessage = document.querySelector('.message').textContent;
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there have not a input
  if (!guess) {
    theMessage = 'No Number Added';
  } 
  // When the number is equal / currect number
  else if (guess === secrectNumber) {
    document.querySelector('.message').textContent = 'Currect Number';
    document.querySelector('.guess-h').textContent = 'Ohh you guessed my number!'
    document.querySelector('body').style.backgroundColor = '#019267';
    document.querySelector('.number').style.width = '30rem'
  } 
  //When the number is High
  else if (guess < secrectNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lose the game';
        document.querySelector('.score').textContent = 0;

      }
   
  } 
  //When the number is Low
  
  else if (guess > secrectNumber) {
      if(score > 1) {
        document.querySelector('.message').textContent = 'Too High';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lose the game';
        document.querySelector('.score').textContent = 0;
      }
    
  }
});