// Assignment code here
var generateBtn = document.querySelector("#generate");

window.onload = alert("Please click Generate asswork to begin.");

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var abcUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var abcLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var confirmAbcLow = window.prompt ("Would you like your password to contain lower casee letter?);
var confirmAbcUp; window.prompt ("Would you like your password to contain lower casee letter?);
var confirmNumber; window.prompt ("Would you like your password to contain lower casee letter?);
var confirmChar; window.prompt ("Would you like your password to contain lower casee letter?);

var passwordLength;

function determineLength() {
  passwordLength = window.prompt("Choose the numer of characters you would like your password to be (between 8-128): ");

  if (passwordLength<8) {
  alert("Passwork length must be 8-128 characters long");
  determineLength();
  }
  else if (passwordLength>128){
    alert("Passwork length must be 8-128 characters long")
  }
  return passwordLength;
}

  function confirmAbcUp() {

  }

  function confirmChar() {

  }

  function confirmNumber () {

  }




  function 







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