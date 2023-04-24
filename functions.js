function callCaleb( caleb_response) {
    if ( caleb_response === 'coming' ) {
        console.log('Caleb is coming');
        return 'cookie';
    }
    else if (caleb_response === 'sleeping') {
        console.log('Caleb is resting');
        return 'peace and quiet';
    } 
    else {
        console.log('Caleb is in trouble');
        return 'spanking';
    }
}

let caleb_response = 'sleeping';
let reward = callCaleb(caleb_response);
console.log('Reward', reward);
console.log('reward',callCaleb('coming'))
console.log('reward',callCaleb('playing'))

function generateBtn() {
    var btn = document.querySelector("#generate");
    // rest of the function code
  }

  
  function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
  
  const passwordLength = prompt("How many characters should the password have?");
  const password = generatePassword(passwordLength);
  alert(`Your new password is: ${password}`);
  