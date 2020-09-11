var a = "<=>?@!#$%&abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

var character = a.split("");



// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function randomtype(){
    console.log(character[Math.floor(Math.random()*72)])
};



randomtype()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function passgen(event){
//     if (event.target.matches("button")){
//         event.preventDefault();

//     }
// }

// generate.addEventListener("click", passgen)