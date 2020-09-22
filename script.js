// Assignment Code
//user input to be set to confirms for true false statements
var enter;
var confirmNumber;
var confirmSpecialCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;

//password variables as choices for password

number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
lowerCase = [
  "b",
  "a",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

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
  enter = parseInt(prompt("How many characters in password between 8 and 128?"));
  if (!enter) {
    alert("must enter value!")
  } else if (enter <8 || enter >128) {
    alert("must be between 8 and 128")
  } else {
    confirmUppercase = confirm("will password contain Uppercase letters?")
    confirmNumber = confirm("will password contain numbers?")
    confirmLowercase = confirm("will password contain lowercase letters?")
    confirmSpecialCharacter = confirm("will password contain special characters?")
  };

  



  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
