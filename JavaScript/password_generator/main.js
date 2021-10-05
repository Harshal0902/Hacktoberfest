// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // GIVEN I need a new, secure password
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword () {
    // prompt for the length of the password
    var passLength = prompt("Please enter how many characters you would like your password to be. \nMust be between 8 - 128 characters.");
    
    var lengthConfirm = parseInt(passLength);
    console.log(lengthConfirm);
 
// choose a length of at least 8 characters and no more than 128 characters
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert ("Error. Choice is not valid. Please try again.");
        return;
    }

var collectionOfValids = [];
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowerCaseChar = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numberChar = "0123456789" .split ("");
var specialChar = "*&^%$#@!?><{}" .split("");


// we need a confirm to ask the user if they want to use lowercase
var lowerCaseConfirm = confirm("Do you want your password to include lowercase letters?");
    if(lowerCaseConfirm === true) {
        for (var i = 0; i < lowerCaseChar.length; i++) {
            collectionOfValids.push(lowerCaseChar[i]);
        }
    }
// we need a confirm to ask the user if they want to use uppercase
var upperCaseConfirm = confirm("Do you want your password to include uppercase letters?");
    if (upperCaseConfirm === true) {
        for (var i = 0; i < upperCaseChar.length; i++) {
            collectionOfValids.push(upperCaseChar[i]);
        }
    }
// we need a confirm to ask the user if they want to use numeric
var numberConfirm = confirm("Do you want your password to include numbers");
    if (numberConfirm === true) {
        for (var i = 0; i < numberChar.length; i++) {
            collectionOfValids.push(numberChar[i]);
        }
    }
// we need a confirm to ask the user if they want to use special characters    
var specialConfirm = confirm("Do you want your password to include special characters?");
    if (specialConfirm === true) {
        for (var i = 0; i < specialChar.length; i++) {
            collectionOfValids.push(specialChar[i]);
        }
    }

// using the number from above and the 4 booleans, create password
 var randomPassword = "";
 for (var i = 0; i < lengthConfirm; i++) {
     collectionOfValids[
         Math.floor(Math.random() * collectionOfValids.length)];
     randomPassword +=
        collectionOfValids[
            Math.floor(Math.random() * collectionOfValids.length)
        ];
    }
 return randomPassword;
}

generateBtn.addEventListener("click", writePassword);