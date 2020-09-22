// Assignment Code
//user input to be set to confirms for true false statements
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

//password variables

number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]

var generateBtn = document.querySelector("#generate");
//ask for length
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



