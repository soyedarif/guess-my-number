let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
function getElementInnerValue(elementid) {
  const elementValue = document.getElementById(elementid).value;
  return parseInt(elementValue);
}
function getIdElement(elementid) {
  return document.getElementById(elementid);
}

document.getElementById('btn-check').addEventListener('click', function () {
  score--;
  const theScore = getIdElement('score');
  theScore.innerText = score;
  const theNumber = getIdElement('number');
  const guess = getElementInnerValue('guess');
  const message = getIdElement('message');
  const highScoreElement = getIdElement('highscore');
  const highScore = parseInt(highScoreElement.innerText);
  if (!guess || isNaN(guess)) {
    message.innerText = 'No Number guessed...!!!';
  } else if (guess > secretNumber) {
    if (guess > 20) {
      alert('Try Number Between 1-20');
    } else {
      message.innerText = 'Too High Try Again...!';
    }
  } else if (guess < secretNumber) {
    if (guess < 0) {
      alert("You can't guess negetive Number");
    } else {
      message.innerText = 'Too Low Try Again...!';
    }
  } else if (guess == secretNumber) {
    theNumber.innerText = secretNumber;
    message.innerText = 'Bravo You did it...!';
    document.body.style.backgroundColor = '#60b347';
    theNumber.style.width = '30rem';
    if (score > highScore) {
      highScoreElement.innerText = score;
    }
  }
});

document.getElementById('btn-again').addEventListener('click', function () {
  score = 20;
  const theScore = getIdElement('score');
  theScore.innerText = score;
  const theNumber = getIdElement('number');
  theNumber.innerText = '?';
  const guess = getIdElement('guess');
  guess.value = '';
  const message = getIdElement('message');
  message.innerText = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  theNumber.style.width = '15rem';
});
