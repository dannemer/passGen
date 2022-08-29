// Assignment code here
window.onload = alert("Please click the Generate Password button to begin")

var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var abcUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var abcLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var confirmAbcLow;
var confirmAbcUp; 
var confirmNumber;
var confirmChar;
var confirmLength;
var passwordLength;

/////////////////////////////////////////////

function determineLength() {
  var passwordLength = window.prompt("Choose the number of characters you would like your password to be (between 8-128): ");

  if (passwordLength<8) {
  alert("Password length must be 8-128 characters long");
  }
  else if (passwordLength>128){
  alert("Passwork length must be 8-128 characters long")
  } else {
  return passwordLength;
}

function confirmAbcLow() {
  var abcUp = window.prompt("Would like you password to contain uppercase letter?");
  }

function confirmAbcUp() {
  var abcLow = window.prompt("Would like you password to contain lowercase letters?");
  }

function confirmChar() {
  var character = window.prompt("Would you like your password to contain special characters?");
  }

function confirmNumber () {
  var number = window.prompt("Would you like your passwrod to contain numbers?")
  } 

function generatePassword () {
  var result = ""
  result = generatePassword();
  return result;
}

/////////////////////////////////////////////////////

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var reset = window.alert("Would you like a different password?")

  If(reset) {
      writePassword();
  }
}