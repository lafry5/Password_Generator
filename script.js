// Assignment code here

// Collect the user's response if they want to generate a password
var userResponse = prompt('Do you want to generate a password? y or n?');



// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);