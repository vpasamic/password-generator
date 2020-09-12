//lists variables
var a = "<=>?@!#$%&abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var type = a.split("");







// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
    var pswrd = "";
    var lngth = parseInt(prompt("How long of a password?"));
    //make it between 8 to 128
   
    if(lngth>8 && lngth<128){
    var passwordText = document.querySelector("#password");
    function generatePassword(){
    //for loop length
    for( var x=0; x < lngth; x++){
        //random character generator
        function randomtype(){
            var red = type[Math.floor(Math.random()*type.length)];
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
