const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~`!@#$%^&*())_-+=[]{};:'<>,./?*/+-";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let pass= "";
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    pass += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > pass.length) {
        pass += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = pass;
}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}
