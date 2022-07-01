/*let rand = Math.floor(Math.random() * 100) + 1;

let input

for (let i = 0; input != rand; i++) {
    turn();
}

function turn() {
    input = prompt("Please guess a number btween 1 and 100.");
    
    if (input < rand) {
        alert("Too low");
    } else if (input > rand) {
        alert("Too high");
    } else {
        alert("Congratulations!");
    }
}*/

let starting = false;
let secs = 0;
let mins = 0;
let hours = 0;
const input = document.getElementById("guesses");
const feedback = document.getElementById("feedback");
const time = document.getElementById("time");
const btn = document.getElementById("again");
const resetbtn = document.getElementById("reset");
const current = document.getElementById("current");
const highest = document.getElementById("highest");

btn.addEventListener("click", guess);
resetbtn.addEventListener("click", resetGame);

function guess() {
    let rand = Math.floor(Math.random() * 100) + 1;

    starting = true;
}

function playing() {
    giveFeedback(input.value);
}

//Current Score



//Clock

const duration = setInterval(clock, 1000);

function clock() {

    if (starting) {
        secs++;
    }
    if (secs > 59) {
        secs = 0;
        mins ++;
    } else if (mins > 59) {
        secs = 0;
        mins = 0;
        hours++;
    } else if (hours > 24) {
        clearInterval(duration);
    }
}

//Buttons

btn.onclick = function guessAgain() {

    btn.textContent = "Guess Again";
}




