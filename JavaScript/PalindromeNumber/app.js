let userInput = document.querySelector("#user-input");
let btnCheck = document.querySelector("#btn-check");
let showOutput = document.querySelector(".show-output");

btnCheck.addEventListener('click', () => {
    let userNum = (userInput.value);
    let reverseNum = userNum.split('').reverse().join('');
    if (userNum == reverseNum) {
        showOutput.innerHTML = "Yay! It's a Palindrome Number";
    } else {
        showOutput.innerHTML = "Opps! It's a not Palindrome Number";
    }

})