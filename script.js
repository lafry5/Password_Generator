
// userResponse: ok or cancel
// specChars: lists the special Characters that can be used in the password
// lowercase: lists the lower case letters
// numbers: lists the numbers 8 - 128
// uppercase: lists the upper case letters
// passwordlength: the length of the password (should be between 8 and 128)
// confirmSpecChars: ok or cancel to use special characters
// confirmlowercase: ok or cancel to use lowercase
// confirmuppercase: ok or cancel to use uppercase
// confirmnumbers: ok or cancel to use numbers
// randNumber: random number
// randomCharacter: random character
// randomletter: lowercase random letter
// randomletterupper: uppercase random letter


passwordlength = 0;
var specChars = ["!", "#", "$", "%", "&", "'", "(", "(", "*", "+", ",", "-", ".", "/", ":", "<", "=", ">", "?", "@", "\", "^", ~"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [];

  for(var J = 0; J <= 9; J++){ // Create an array of numbers
    numbers.push(J);
  }
  console.log(numbers); 



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
  for (var i = 0; i < 3; i++) { // Allow for several attempts at entering the password length
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

  if (passwordlength >=8 || passwordlength <=128) {
    
    var confirmSpecChars = confirm('Would you like to use special characters in your password?');
    
      if (confirmSpecChars === true) {

        var randNumber = Math.floor(Math.random() * specChars.length)
        var randomCharacter = specChars[randNumber]
          alert(randomCharacter + ' is your special character');
      } else {
        alert('You chose not to have special characters');
      }
    
    var confirmlowercase = confirm('Would you like to use lowercase letters in your password?');

    if (confirmlowercase === true) {

      var randNumber = Math.floor(Math.random() * lowercase.length)
      var randomletter = lowercase[randNumber]
        alert(randomletter + ' is your lowercase letter');
    } else {
      alert('You chose not to have lowercase letters');
    }

    var confirmuppercase = confirm('Would you like to use uppercase letters in your password?');

    if (confirmuppercase === true) {

      var randNumberupper = Math.floor(Math.random() * uppercase.length)
      var randomletterupper = uppercase[randNumberupper]
        alert(randomletterupper + ' is your uppercase letter');
    } else {
      alert('You chose not to have uppercase letters');
    }

    var confirmnumbers = confirm('Would you like to use numbers in your password?');

    if (confirmnumbers === true) {

      var randNumber2 = Math.floor(Math.random() * numbers.length)
      var randomrandomnumber = numbers[randNumber2]
        alert(randomrandomnumber + ' is your random number');
    } else {
      alert('You chose not to have numbers');
    }

    
   } else {
    alert('You exceeded the number of attempts to enter a number between 8 and 128')
  }



// User chose not to generate a password. The end!                  Why is this still appearing if the pw is generated?
// else (userResponse === false); {
// alert('Have a great day!'); 
//  console.log('You chose not to generate a password. Have a great day!');
//} //end of if statement that checks if user wants to generate a password



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