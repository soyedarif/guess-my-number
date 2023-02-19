let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
function getElementInnerValue(elementid) {
  const elementValue = document.getElementById(elementid).value;
  return parseInt(elementValue);
}
function htmlElementByID(elementid) {
  return document.getElementById(elementid);
}

document.getElementById('btn-check').addEventListener('click', function () {
  const guess = getElementInnerValue('guess');
  const message = htmlElementByID('message');
  const scoreBoard = htmlElementByID('score');
  const theNumber = htmlElementByID('number');
  const hightScoreElement=htmlElementByID('highscore');
   const highscore=parseInt(hightScoreElement.innerText);
  
  if (!guess || isNaN(guess)) {
    message.innerText = '⛔ Try Number Between 1-20';
    // when the player guesses right
  } else if (guess === secretNumber) {
    theNumber.innerText = secretNumber;
    message.innerText = '🎉 Bravo You did it...!';
    document.body.style.backgroundColor = '#60b347';
    theNumber.style.width = '30rem';
    if(score>highscore){
      hightScoreElement.innerText=score;
    }
    //when the player guesses wrong
  }else if(guess!==secretNumber){
    if (score > 1) {
      message.innerText = guess>secretNumber?'📈 Too High Try Again...!':'📉 Too Low Try Again...!';
      score--;
      scoreBoard.innerText = score;
    } else {
      message.innerText = '💥 You lost the Game';
      scoreBoard.innerText = 0;
  }}
});

document.getElementById('btn-again').addEventListener('click', function () {
  score = 20;
  // regenerate number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // design reset
  const theScore = htmlElementByID('score');
  theScore.innerText = score;
  const theNumber = htmlElementByID('number');
  theNumber.innerText = '?';
  const guess = htmlElementByID('guess');
  guess.value = '';
  const message = htmlElementByID('message');
  message.innerText = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  theNumber.style.width = '15rem';
});
