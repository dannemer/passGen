// Assignment code here
var generateBtn = document.querySelector("#generate");

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var abcUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var abcLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var chararacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function determineLength() {
  passwordLength = prompt("Choose the length you would like your password to be: ");
}



var confirmAbcLow;
var confirmAbcUp;
var confirmNumber;
var confirmChar;

funtion 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











funtion generatePassword () {


}