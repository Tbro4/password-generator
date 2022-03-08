// Assignment Code
var allCaps = [
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
var allLower = [
  "a",
  "b",
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

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specChar = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "{",
  "]",
  "}",
  "\\",
  "|",
  ";",
  ":",
  "'",
  '"',
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
];

var userPossibleChar = [];

var finalPass = [];

var generateBtn = document.querySelector("#generate");

function gatherInfo() {
  var passLength = prompt(
    "Please enter a password length of 8 to 128 characters"
  );
  // console.log(passLength);
  //if length is valid, move into other prompts
  if (passLength >= 8 && passLength <= 128) {
    function charTypes() {
      var includeLowercase = confirm(
        "You must choose at least one character type (lowercase, uppercase, numbers, special characters): \n\nWould you like to include lowercase letters?"
      );

      var includeUppercase = confirm(
        "Would you like to include uppercase letters?"
      );
      var includeNum = confirm("Would you like to include numbers?");
      var includeSpecChar = confirm(
        "Would you like to include special characters?"
      );

      // after prompts are answered, if true, pushes array values to new array
      if (includeLowercase) {
        userPossibleChar = userPossibleChar.concat(allLower);
      }
      if (includeUppercase) {
        userPossibleChar = userPossibleChar.concat(allCaps);
      }
      if (includeNum) {
        userPossibleChar = userPossibleChar.concat(numbers);
      }
      if (includeSpecChar) {
        userPossibleChar = userPossibleChar.concat(specChar);
      }
      //if none are selected, takes us back to char type prompts
      if (
        !includeLowercase &&
        !includeUppercase &&
        !includeNum &&
        !includeSpecChar
      ) {
        alert("Please confirm at least one character type");
        charTypes();
      }
    }
    //calls function for the first time
    charTypes();
  } else {
    alert("Please enter a valid number");
    gatherInfo();
  }
  //Math.floor and .random to create string of characters from user-modified array
  for (var i = 0; i < passLength; i++) {
    var character =
      userPossibleChar[Math.floor(Math.random() * userPossibleChar.length)];
    finalPass.push(character);
  }
  // console.log(finalPass.join(""));
}

// Write password to the #password input
function writePassword() {
  //varibale that calls a function?
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword() {
    //resets arrays to empty if you want to create another password
    finalPass = [];
    userPossibleChar = [];
    //fills array with characters
    gatherInfo();
    // console.log(finalPass.join(""));
    //returns all characters in finalPass array with no spaces
    return finalPass.join("");
  }

  // value is assigned through the generatePassword function
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
