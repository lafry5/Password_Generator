// variables are...
// userResponse y or n
//

// Collect the user's response if they want to generate a password
var userResponse = prompt('Do you want to generate a password');
    console.log(userResponse)

// Only run logic if user chose a valid option
if (userResponse === 'true' {
  alert('You chose ' + userResponse);
  console.log('You chose' + userResponse);
}
 else { // User chose cancel
  alert('You chose not to generate a password');
  console.log('You chose not to generate a password');
}





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