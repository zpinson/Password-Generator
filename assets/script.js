// picks up the button from the html
var generateBtn = document.querySelector("#generate"); 

//Variable holding all the lower case letters as an array
var alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); 
console.log(alphabet);

//variable holding all the upper case letters as an array
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); 
console.log(alphabetUpper);

//variable holding all the numbers as an array
var numbers = "0123456789".split(""); 
console.log(numbers);

//variable holding all the special characters as an array
var specialCaracters = "!#$'%&()*+,-./:;<=>?@][^_`{|}~".split(""); 
console.log(specialCaracters);

//variable that will receive the random carracters to be the password
var password = []; 

// Write password to the #password input
function writePassword() {

// asks how many charater the password should be
  var userImput = prompt(
    "how many caracters you want in your password? (Chose between 8 and 128)"
  );

  //turns the users number from an string to a number
  var userLength = parseInt(userImput) 
  console.log(userLength);

    //prevents the user to enter a letter instead of a number
    if (isNaN(userLength)) {
      alert("password length must be number");
      return;
    }
// confirms paasword is longer than 8 characters
  if (userLength < 8) {
    alert("password length must be gat least 8 characters");
    return;
  }

//   confirms password is shorter than 129 characters
  if (userLength > 128) {
    alert("password length must be less than 129 characters");
    return;
  }

//   ask what type of charachters to include in the password
  var userUpper = confirm("Do you want uppercase letters in your password?");
  console.log(userUpper);
  var userNumbers = confirm("Do you want numbers in your password?");
  console.log(userNumbers);
  var userSpecial = confirm("Do you want special caracters in your password?");
  console.log(userSpecial);

 

  // uses user choice of choice to create a new arrray thant will include all the choosen charaters and returns a message if non of the was choosen
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

  //creates a loop that will go through the array the number of time equivlant to the user password length choice and the the random index choose random characters. and add the to the password variable
  for (var i = 0; i < userLength; i++) {
    var rndIndex = Math.floor(Math.random() * fullArray.length);
    var rndCharacter = fullArray[rndIndex];
    password.push(rndCharacter);
  }
    //creates a variable that is conected text place for the password in the html
  var passwordText = document.querySelector("#password");
  // fills out the text variable with the generated password and make it to a string
  passwordText.value = password.join("");
  console.log(password.length);
}

// starts the code when the button is clicked
generateBtn.addEventListener("click", writePassword);
