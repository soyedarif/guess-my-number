'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore=0
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = parseInt(document.querySelector('.guess').value);

    //when there's no input
    if (!guess) { //if only takes true values but zero NAN falsy values in boolean so ! to make it true;
        document.querySelector('.message').textContent = '⛔ No Number!'


        //when player wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = '🎉 Correct Number!';

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
       if(score>highScore){
        highScore=score;
        document.querySelector('.highscore').innerText=highScore;
       }
        


        //when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {

            document.querySelector('.message').textContent = '📈 Too High';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
        //when guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {

            document.querySelector('.message').textContent = '📉 Too Low';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent ='Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem'

    
})