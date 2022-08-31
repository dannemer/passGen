var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var abcUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var abcLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var password = [];
  
  var confirmLength = prompt("Choose the number of characters you would like your password to be (between 8-128).");
  
    if (confirmLength < 8 || confirmLength > 128 || isNaN(confirmLength)) {
      alert ("Choice must be between 8 - 128 characters");
    }

  var confirmAbcUp = confirm("Would like you password to contain uppercase letters?");
    if (confirmAbcUp === true) {
      for (var i = 0; i < abcUp.length; i++) {
      password.push(abcUp[i])
      }
    }

    var confirmAbcLow = confirm("Would like you password to contain lowercase letters?");
    if (confirmAbcLow === true) {
      for (var i = 0; i < abcLow.length; i++) {
      password.push(abcLow[i])
      }
    }

    var confirmNumbers = confirm("Would like you password to contain numbers");
    if (confirmNumbers === true) {
      for (var i = 0; i < numbers.length; i++) {
      password.push(numbers[i])
      }
    }

    var confirmChar = confirm("Would like you password to contain special characters");
    if (confirmChar === true) {
      for (var i = 0; i < character.length; i++) {
      password.push(character[i])
      }
    }

var finalPass = "";
for (i = 0;i < confirmLength; i++) {
  password [
    Math.floor(Math.random() * password.length)];
    finalPass +=
      password[
          Math.floor(Math.random() * password.length)];
}
return finalPass;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}