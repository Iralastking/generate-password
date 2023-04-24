// Assignment code here

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// function generatePassword(){

// // 1.prompt the user for a password criteria
// // A. password lenght 8 to 128
// // B. lowercase, uppercase, numeric, special
// // 2. validated the input
// // 3. generated the password based on criteria
// // 4. Display password to page
// var prompt = document;
// return generatePassword;
// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword()
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   return "writePassword"

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// jQuery(document).ready(function($){
//     $('#generate').fadeOut('slow');
//     // $('#generate').fadeIn('slow');
//     $('#generate').slideDown('slow');
// });

var passwordLength = prompt("How many characters should the password have? Choose between 8-128 characters.");
var passwordLengthInt = parseInt(passwordLength);
if (passwordLengthInt >= 8 && passwordLengthInt <= 128) {
    var generateBtn = document.querySelector("#generate");
    generateBtn.addEventListener("click", writePassword);
}
else {
    alert('Password length should be between 8 and 128');
    location.reload();
}

function generatePassword() {
    var charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    return "writePassword";
}
