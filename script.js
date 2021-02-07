// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabet = "abcdefghigklmnopqrstuvwxyz".split("");
console.log(alphabet);

var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(alphabetUpper);

var numbers = "0123456789".split("");
console.log(numbers);

var specialCaracters = "!#$%&()*+,-./:;<=>?@][^_`{|}~".split("");
console.log(specialCaracters);

var password = [];

// Write password to the #password input
function writePassword() {
  //   var password = generatePassword();

  var userLength = prompt(
    "how many caracters you want in your password? (Chose between 8 and 128)"
  );
  console.log(userLength);

  if (userLength < 8) {
    alert("password length must be gat least 8 characters");
    return;
  }

  if (userLength > 128) {
    alert("password length must be less than 129 characters");
    return;
  }

  var userUpper = confirm("Do you want uppercase letters in your password?");
  console.log(userUpper);
  var userNumbers = confirm("Do you want numbers in your password?");
  console.log(userNumbers);
  var userSpecial = confirm("Do you want special caracters in your password?");
  console.log(userSpecial);

  if (userUpper === true && userNumbers === true && userSpecial === true) {
    var fullArray = alphabet.concat(alphabetUpper, specialCaracters, numbers);
  } else if (
    userUpper === true &&
    userNumbers === true &&
    userSpecial != true
  ) {
    var fullArray = alphabet.concat(alphabetUpper, numbers);
  } else if (userUpper === true && userNumbers != true && userSpecial != true) {
    var fullArray = alphabet.concat(alphabetUpper);
  } else if (
    userUpper === true &&
    userNumbers != true &&
    userSpecial === true
  ) {
    var fullArray = alphabet.concat(alphabetUpper, specialCaracters);
  } else if (
    userUpper != true &&
    userNumbers === true &&
    userSpecial === true
  ) {
    var fullArray = alphabet.concat(numbers, specialCaracters);
  } else if (userUpper != true && userNumbers === true && userSpecial != true) {
    var fullArray = alphabet.concat(numbers);
  } else if (userUpper != true && userNumbers != true && userSpecial === true) {
    var fullArray = alphabet.concat(specialCaracters);
  } else {
    alert("Must select at least one more criteria");
    return;
  }
  console.log("This is the full array:", fullArray);

  for (var i = 0; i < userLength; i++) {
    var rndIndex = Math.floor(Math.random() * fullArray.length);
    var rndCharacter = fullArray[rndIndex];
    password.push(rndCharacter);
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password.join("");
  console.log(password.length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
