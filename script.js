'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value) */
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.check').addEventListener('click', function () {
        const guess = parseInt(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        if (!guess) { //if only takes true values but zero NAN falsy values in boolean so ! to make it true;
            document.querySelector('.message').textContent = '⛔ No Number!'
        } else if (guess === secretNumber) {
            document.querySelector(".message").textContent = '🎉 Correct Number'
        }
    })
})
