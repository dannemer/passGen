// Assignment code here
window.onload = alert("Please click the Generate Password button to begin")

var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

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
}

function generatePassword () {

  var confirmlength = prompt("Choose the number of characters you would like your password to be (between 8-128);
  
  var length = parseInt(conformLength)

  if (isNaN(passwordLength)) {
    window.alert("Please choose a total number between 8-128")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please choose a total number between 8-128")
    return
  }

  var confirmAbcUp = confirm("Would like you password to contain uppercase letter?");
  var confirmCharacter = confirm("Would you like your password to contain special characters?");
  var confirmAbcLow = confirm("Would like you password to contain lowercase letters?");
  var confirmNumbers = confirm("Would you like your passwrod to contain numbers?")

  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var abcUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var abcLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  var password = []

  for (var i = 0; i < abcLow; i++) {

  }

  if (confirmAbcLow === true) {
    password.push(abcLow)
  }

  if (confirmAbcUp === true) {
    password.push(abcUp)
  }

  if (confirmNumbers === true) {
    password.push(numbers)
  }

  if (confirmCharacter === true) {
    password.push(character)
  }

console.log(password)



  result = generatePassword();
  return password;
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}