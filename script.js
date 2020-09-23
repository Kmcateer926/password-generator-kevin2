// Assignment Code
//user input to be set to confirms for true false statements
//password variables as choices for password
var enter;
var number = "0123456789";
var specialCharacter = "?}{+_)(*&^%$#@!";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var choices = "";
var password = "";
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
//ask for length
//initial user input, from choosing length to whether they want numbers/characters/letters
function writePassword() {
  // user is alerted if it does not meet required criteria
  enter = prompt("How many characters in password between 8 and 128?");
  if (!enter) {
    alert("must enter value!");
  } else if (enter < 8 || enter > 128) {
    alert("must be between 8 and 128");
  } else {
    // confirms assigned to variables
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
  if (includeLowercase) {
    choices += lowercase;
  }
  if (includeNumber) {
    choices += number;
  }
  if (includeSpecialCharacter) {
    choices += specialCharacter;
  }
  //should return alert to user but is broken on deployed site
  else if (
    !includeUppercase &&
    !includeNumber &&
    !includeLowercase &&
    !includeSpecialCharacter
  )
    alert("Must choose at least one set of criteria!");

  for (var i = 0; i < enter; i++) {
    password += choices[Math.floor(Math.random() * choices.length)];
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function getRandomCharacter() {
  return choices[Math.floor(Math.random() * choices.length)];
}
