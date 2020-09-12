//lists variables
var a = "<=>?@!#$%&abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var character = a.split("");
var pswrd = "";






// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
    var lngth = parseInt(prompt("How long of a password?"));
    //make it between 8 to 128
   
    if(lngth>8 && lngth<128){
    var passwordText = document.querySelector("#password");
    function generatePassword(){
    //for loop length
    for( var x=0; x < lngth; x++){
        //random character generator
        function randomtype(){
            var red = character[Math.floor(Math.random()*72)];
            pswrd += red;
          }
        randomtype()
    }
}
}
    else{
        alert("password must be a number between 8 to 128");
    }
    generatePassword();
    passwordText.value=pswrd

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
