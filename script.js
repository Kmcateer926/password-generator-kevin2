// Assignment Code
//user input to be set to confirms for true false statements
var enter;
var confirmNumber;
var confirmSpecialCharacter;
var confirmUppercase;
var confirmLowercase;

//password variables

number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
lowerCase = ["b", "a", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var generateBtn = document.querySelector("#generate");
//ask for length
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



