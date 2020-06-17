var specChars = ["!", "#", "$", "%", "&", "'", "(", "(", "*", "+", ",", "-", ".", "/", ":", "<", "=", ">", "?", "@", "\", " ^ ", ~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [];

for (var J = 0; J <= 9; J++) { // Create an array of numbers
    numbers.push(J);
}
console.log(numbers);

function userOptions() {
    var userChoice = {}; //This is an empty object
    var passwordlength = prompt('How long would you like your password to be? Choose 8 to 128');
    console.log(passwordlength);
    userChoice.passwordlength = passwordlength;
    //   if (passwordlength >=8 || passwordlength <=128) {
    var confirmSpecChars = confirm('Would you like to use special characters in your password?');

    userChoice.characters = confirmSpecChars; //add value of true or false

    var confirmlowercase = confirm('Would you like to use lowercase letters in your password?');

    userChoice.lowercase = confirmlowercase; //add value of true or false

    var confirmuppercase = confirm('Would you like to use uppercase letters in your password?');

    userChoice.uppercase = confirmuppercase; //add value of true or false

    var confirmnumbers = confirm('Would you like to use numbers in your password?');

    userChoice.numbers = confirmnumbers; //add value of true or false

    return userChoice;
    //    }
}

function generatePassword() {
    var options = userOptions();
    var result = [];
    var possiblechars = [];
    var guaranteedchars = [];
    if (options.characters) {
        possiblechars = possiblechars.concat(specChars);
        guaranteedchars.push(getrandom(specChars));
    }
    if (options.lowercase) {
        possiblechars = possiblechars.concat(lowercase);
        guaranteedchars.push(getrandom(lowercase));
    }
    if (options.uppercase) {
        possiblechars = possiblechars.concat(uppercase);
        guaranteedchars.push(getrandom(uppercase));
    }
    if (options.numbers) {
        possiblechars = possiblechars.concat(numbers);
        guaranteedchars.push(getrandom(numbers));
    }
    console.log(options);
    console.log(options.passwordlength);

    for (i = 0; i < options.passwordlength; i++) {
        var possiblechar = getrandom(possiblechars);
        result.push(possiblechar);
    }

    for (i = 0; i < guaranteedchars.length; i++) {
        result[i] = guaranteedchars[i];
    }
    return result.join("");
}


function writePassword() {
    var password = generatePassword();
    var passwordtext = document.querySelector("#password");
    passwordtext.value = password;
}


function getrandom(arr) {
    var random = Math.floor(Math.random() * arr.length);
    var randomelement = arr[random];
    return randomelement;
}

var generatebutton = document.querySelector("#generate");
generatebutton.addEventListener("click", writePassword);