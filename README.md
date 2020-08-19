# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.




<!-- notes from class below -->




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




// // below is from office hours 8/17

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