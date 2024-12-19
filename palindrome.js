//coding problem 1: String Array Operations

let var1 = prompt("Enter the first word(var1): "); // prompt user to enter a word
let var2 = prompt("Enter the second word(var2): ");// prompt user to enter a  2nd word

// Reversing each string by splitting each character, then reversing them and then joining them
const reversedVar1 = var1.split('').reverse().join('');
const reversedVar2 = var2.split('').reverse().join('');

//logs the original strings
console.log("Original var1:", var1);
console.log("Original var2:", var2);

//logs the reversed strings
console.log("Reversed var1:", reversedVar1);
console.log("Reversed var2:", reversedVar2);

//function to define if the original string is equivalent to the reversed strings
function isEquivalent(original, reversed) {
    return original === reversed; //returns true if the condition is met, otherwise false
}

// Call the function for both inputs
console.log("Is var1 eqivalent to reversedVar1?", isEquivalent(var1, reversedVar1));
console.log("Is var2 equivalent to reversedVar2", isEquivalent(var2, reversedVar2));


