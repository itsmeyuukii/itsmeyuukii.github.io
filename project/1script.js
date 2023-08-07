'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 0;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// ++++++++++++++ this is how to get the value from input html
// this function will just happen as soon as the event is called
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let newHighscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.number').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //to convert string to number add NUMBER function

  console.log(guess); // this input will get always a string
  //if guess = 0 == to false boolean
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = `🚫No number 👌`;
    displayMessage(`🚫No number 👌`);
    // when the guess is correct
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = `✔✔ Correct 👌`;
    displayMessage(`✔✔ Correct 👌`);
    console.log((document.querySelector('.number').textContent = secretNumber));
    //               you dont need to use .
    document.querySelector('body').style.backgroundColor = '#00A300';
    //backgroundColor = background-Color
    document.querySelector('.number').style.width = '30rem';
    // setting new highscore
    if (score > newHighscore) {
      newHighscore = score;
      document.querySelector('.highscore').textContent = newHighscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? `Too high` : `Too low`;
      displayMessage(guess > secretNumber ? `Too high` : `Too low`);
      score--;
      displayScore(score);
    } else {
      //   document.querySelector('.message').textContent = `You lost 🤦‍♂️🤦‍♀️`;
      displayMessage(`You lost 🤦‍♂️🤦‍♀️`);
      score--;
      //   document.querySelector('.score').textContent = score;
      displayScore(score);
    }
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = `Too high`;
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = `You lost 🤦‍♂️🤦‍♀️`;
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     }
    //     // when guess is lower
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = `Too low`;
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = `You lost 🤦‍♂️🤦‍♀️`;
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //   document.querySelector('.score').textContent = score;
  displayScore(score);
  //   document.querySelector('.message').textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('.number').textContent = '?';
  displayScore('?');
  document.querySelector('.guess').value = '';
});
