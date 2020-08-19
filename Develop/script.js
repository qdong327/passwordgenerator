// Instructions
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Provided Assignment Code

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
   var userPassword = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = userPassword;
  }


// ===== 1. Definitions =====

// Define Variables
var upperCaseConfirm;
var lowerCaseConfirm;
var numericConfirm;
var specialCaseConfirm;
var characterQuantity;

// Define Arrays
const upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCaseArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "|", "~", "-", "_", "{", "}", "`", "'", '"', "/"];
var totalCharacters = [];

// Define Functions for User Interaction
// ===== Character Quantity Prompt =====
function confirmQuantity() {
  // Confirm Password Length
  characterQuantity = prompt("How many characters, between 8 and 128, would you like your password to contain?");
  // Conditionals
  if (characterQuantity === null) {
    alert("Please give a quantity!");
    characterQuantity = prompt("How many characters, between 8 and 128, would you like your password to contain?");
  };
  if (characterQuantity < 8 || characterQuantity > 128) {
    alert("Please ensure a number between 8 and 128 characters, inclusive.");
    confirmQuantity();
  };
};

// ===== Confirmation Prompts =====
function confirmUserInputs() {
  // Confirm Uppercase
  upperCaseConfirm = confirm("Would you like your password to include Uppercase characters?");
  // Confirm Lowercase
  lowerCaseConfirm = confirm("Would you like your password to include Lowercase characters?");
  // Confirm Numerics
  numericConfirm = confirm("Would you like your password to include numbers?");
  // Confirm Special Chars
  specialCaseConfirm = confirm("Would you like your password to include Special characters?");
  if (upperCaseConfirm === false && lowerCaseConfirm === false && numericConfirm === false && specialCaseConfirm === false) {
    alert("Please include at least one of the following case types: Uppercase, Lowercase, Numeric, & Special Case.");
    confirmUserInputs();
  };
};

// ===== Generate Password Function =====

function generatePassword(){
  confirmQuantity();
  confirmUserInputs();
  createFinalArray();
  var userPassword = "";
    for (var i = 0; i < characterQuantity; i++){
      var character = totalCharacters[Math.floor(Math.random()*totalCharacters.length)];
      console.log(character);
      password += character;
    };
    totalCharacters = [];
    return userPassword;
  }


// ===== 2. Calling the Functions and Generate Final Array =====


console.log(upperCaseConfirm);
console.log(lowerCaseConfirm);
console.log(numericConfirm);
console.log(specialCaseConfirm);
console.log(characterQuantity);

function createFinalArray() {
  if (upperCaseConfirm) {
      Array.prototype.push.apply(totalCharacters, upperCaseArray);
  };
  if (lowerCaseConfirm) {
      Array.prototype.push.apply(totalCharacters, lowerCaseArray);
  };
  if (numericConfirm) {
      Array.prototype.push.apply(totalCharacters, numericArray);
  };
  if (specialCaseConfirm) {
      Array.prototype.push.apply(totalCharacters, specialCaseArray);
  };
  };

// Add event listener to generate button
generateBtn.addEventListener= ("click", writePassword);

// ===== Generate Password and Input =====

function writePassword() {
  var userPassword = generatePassword();
  console.log(userPassword);
  var passwordText = document.querySelector("#password");
  passwordText.textContent = userPassword;
};

