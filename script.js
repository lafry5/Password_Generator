// variables are...
// userResponse ok or cancel
// specChars lists the special Characters that can be used in the password
// passwordlength is the length of the password (should be between 8 and 128)
passwordlength = 0;

// var specChars = [" ", "!", """, "#", "$", "%", "&", "'", "(", "(", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "'", "{", "|", "}", "~"]
//console.log(specChars[1], specChars[8]); //Try to print out the Special Characters to see if the string array is working

// Collect the user's response if they want to generate a password
var userResponse = confirm('Do you want to generate a password');
    console.log(userResponse);

// Only run logic if user chose to generate a password
if (userResponse === true) {
//  alert('You would like to generate a password');
//  console.log('You would like to generate a password');

  // Collect the user's response on how long they want their password to be
  var passwordlength = prompt('How long would you like your password to be? Choose 8 to 128');
      console.log(passwordlength);

  //Check password length and execute code if the password lengths falls within the bounds
  for (var i = 0; i < 3; i++) {
      if (passwordlength < 8 || passwordlength > 128) { //Is the password outside of the password bounds?
         var passwordlenth = prompt('Enter a number between 8 and 128!');
        console.log(passwordlength);
        }
          else if (isNaN(passwordlength) == true) { // Record another choice if entry wasn't a number
          var passwordlength = prompt('Please choose a number between 8 and 128!'); 
          console.log(passwordlength);
        
        } else  (passwordlength >= 8 || passwordlength <= 128); { // Is the password inside the bounds?
          alert("You chose a password length of " + passwordlength);
          i = 2;
            } //end of else statement that checks password length inside the bounds    


        } //end of if statement to check bounds of password length
  } //end of for loop, i loops 3 times





// User chose not to generate a password. The end!                  Why is this still appearing if the pw is generated?
  else (userResponse === false)
      alert('Have a great day!'); { 
//  console.log('You chose not to generate a password. Have a great day!');
} //end of if statement that checks if user wants to generate a password



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