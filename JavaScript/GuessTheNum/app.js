const userInput = document.querySelector("#user-input");
const btnCheck = document.querySelector("#btn-check");
const prevGuess = document.querySelector(".prev-guess");
const showOutput = document.querySelector(".show-output");


let computerNumber = Math.ceil((Math.random()) * 20);
btnCheck.addEventListener('click', () => {
    let userGuessNum = parseInt(userInput.value);
    showOutput.style.visibility = "visible";
    if (userGuessNum === computerNumber) {
        showOutput.innerHTML = `Yay! You are right.`
    } else if (userGuessNum < computerNumber) {
        showOutput.innerHTML = `Opps ! Your number is less than computer number`
        showPrevGuess(userGuessNum);
    } else if (userGuessNum > computerNumber) {
        showOutput.innerHTML = `Opps ! Your number is grater than computer number`
        showPrevGuess(userGuessNum);
    }
})

let prevGuessArray = [];

function showPrevGuess(prevNum) {
    prevGuess.style.visibility = "visible";
    prevGuessArray.push(prevNum)
    prevGuess.innerHTML = 'Your Previous Guesses was : ';
    prevGuessArray.forEach(guess => {
        let span = document.createElement("span");
        span.innerHTML = `    ${guess}    `;
        prevGuess.append(span);
    })
}