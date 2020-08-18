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


// ===== 1. Definitions =====

// Define Variables
var upperCaseConfirm = false;
var lowerCaseConfirm = false;
var numericConfirm = false;
var specialCaseConfirm = false;
var characterQuantity;
var generateBtn = document.querySelector("#generate");

// Define Arrays
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCaseArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "|", "~", "-", "_", "{", "}", "`", "'", '"', "/"];
var userOptionsArray = [];

// ===== 2. Generate Password and Input =====


function generatePassword() {
  confirmUserInputs ();
  generateFinalArray ();
  var password = "";
  for (var i = 0; i < characterQuantity; i++) {
    let character = totalCharacters[Math.floor(Math.random() * characterQuantity)];
    password += character;
  } 
}

// ===== 3. Confirmation Prompts =====
function confirmUserInputs () {
// Confirm Uppercase
upperCaseConfirm = confirm("Would you like your password to include Uppercase characters?");
// Confirm Lowercase
lowerCaseConfirm = confirm("Would you like your password to include Lowercase characters?");
// Confirm Numerics
numericConfirm = confirm("Would you like your password to include numbers?");
// Confirm Special Chars
specialCaseConfirm = confirm("Would you like your password to include Special characters?");
// Confirm Password Length
characterQuantity = prompt("How many characters, between 8 and 128, would you like your password to contain?");
// Conditionals
if (characterQuantity < 8 || characterQuantity > 128){
  alert("Please ensure a number between 8 and 128 characters, inclusive.");
  characterQuantity = prompt("How many characters, between 8 and 128, would you like your password to contain?");
  };
if (upperCaseConfirm === false && lowerCaseConfirm === false && numericConfirm === false && specialCaseConfirm === false){
  alert("Please include at least one of the following case types: Uppercase, Lowercase, Numeric, & Special Case.")
  confirmUserInputs ();
}
};


// ===== 4. Generate Final Array =====

function generateFinalArray() {
  if (confirmUpperCase) {
    Array.prototype.push.apply(totalCharacters, upperCaseArray);
  }
}





// =================below is archive=================
// notes
    // Possible combinations = possible number of characters^Password length


// Assignment Code

// Write password to the #password input



// build a concatenated array based on user selections
// var userOptionsArray = 

// prompt for length

// if length is not greater than 8 and less than 128
  // alert must have password between 8 and 128 chars

// prompt lowercase
// uppercase
// numeric
// special characters

// store in vars
// check for length

  // generate password



  // if (uppercase)
    // add first character from random upper

  // if numeric
    // add second char from random upper

  // if special
    // add second char from random upper

  // if (lowercase)
    // for each missing letter add a letter from the lowercase
    // for (var i = password.length; i < passwordLength; i++)
    // add char from lowercase
    // characterFiller = specialCharactersArray;

    // while (password.length < passwordLength) {

//   // alert password
//   // return password

// function generatePassword() {

// }

// // write password to password input

//   var password = passwordPrompt();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);




// // belwo is from office hours 8/17

// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// // Write password to the #password input
// function start() {
//    console.log("we're here!");
//    var password = generatePassword();
//    var passwordText = document.querySelector("#password");
//    passwordText.value = password;
// }
// //return a string
// function generatePassword() {
//    // ======= vars definition ======
//    // Array of special characters to be included in password

//    var userOptionalChars = [];
//    // ======= functions definition ======
//    function getUserOptions() {
//       // get user options and store in vars
//       // check for length (it should be longer than 8 and shorter than 128)
//       // check if lower
//       // check if upper
//       // check if special
//       // check if numeric
//       // check that at least one is true
//         // else - alert user
//     }
//     function generatePassword(userOptions) {
//       var password = [];
//       // if lower
//         // push a random lower char to password
//         // add lowerCharsArray to userOptionalChars
//       // if upper
//         // push a random upper char to password
//         // add upperCharsArray to userOptionalChars
//       // if special
//         // push a random special char to password
//         // add specialCharsArray to userOptionalChars
//       // if numeric
//         // push a random numeric char to password
//         // add numericCharsArray to userOptionalChars
//       // for loop between start number of elemnts in password to the requested number of charactars
//       // mutate the array to a string
//       // return password string
//     }
//    // ======= functions calls (start) ======
//    // getUserOptions();
  
//    // generatePassword(userOption)
// }
// // Add event listener to generate button
// generateBtn.addEventListener("click", start);
// // var expectSpecialChars = false;
// // var expectNumericChars = false;
// // var expectUppercaseChars = false;
// // var expectLowercaseChars = false;
// // var userOptions = {
// //   expectSpecialChars: false,
// //   expectNumericChars: false,
// //   expectUppercaseChars: false,
// //   expectLowercaseChars: false,
// // }