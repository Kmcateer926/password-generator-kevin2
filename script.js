// Assignment Code
//user input to be set to confirms for true false statements
var enter;
var number = "0123456789";
var specialCharacter = "?}{+_)(*&^%$#@!";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var choices = "";
var password = "";

//password variables as choices for password

var generateBtn = document.querySelector("#generate");

//ask for length
//user input starts here
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//initial user input, from choosing length to whether they want numbers/characters/letters
function generatePassword() {

 enter = 
  prompt("How many characters in password between 8 and 128?"
);
if (!enter) {
  alert("must enter value!");
} else if (enter < 8 || enter > 128) {
  alert("must be between 8 and 128");
} else {
  var includeUppercase = confirm("will password contain Uppercase letters?");
  var includeNumber = confirm("will password contain numbers?");
  var includeLowercase = confirm("will password contain lowercase letters?");
  var includeSpecialCharacter = confirm(
    "will password contain special characters?"
  );
}

if (includeUppercase) {
  choices += uppercase;
}
if (uppercase && number && lowercase && specialCharacter)
choices = specialCharacter.concat(number, upperCase, lowerCase)

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
}

  return pickChoices;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);