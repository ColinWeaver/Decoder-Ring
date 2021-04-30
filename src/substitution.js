// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //below if statements test for proper inputs
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;

    //variable declarations below
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabetString.split("");
    const testArray = [];
    const inputString = input.toLowerCase();
    const inputArray = inputString.split("");
    const alphabetInputString = alphabet.toLowerCase();
    const alphabetInputArray = alphabetInputString.split("");

    //the below for loop tests for duplicate values in input alphabet
    for (let i = 0; i < alphabetInputArray.length; i++) {
      if (testArray.includes(alphabetInputArray[i])) return false;
      else testArray.push(alphabetInputArray[i]);
    }

    //below nested for loops are for matching index values to reassign for both encoding and decoding
    for (let i = 0; i < inputArray.length; i++) {
      for (let j = 0; j < alphabetArray.length; j++) {
        /*below reassigns 'inputArray' index values to input alphabet values when index value matches letter 
        in Enlish alphabet*/
        if (encode) {
          if (inputArray[i] === alphabetArray[j]) {
            inputArray[i] = alphabetInputArray[j];
            j = alphabetArray.length - 1; //this ends the 'j' for loop after index reassignment
          }
        }
        /*below reassigns 'inputArray' index values to English alphabet values when index value 
        matches value on input alphabet*/
        if (!encode) {
          if (inputArray[i] === alphabetInputArray[j]) {
            inputArray[i] = alphabetArray[j];
            j = alphabetArray.length - 1; //this ends the 'j' for loop after index reassignment
          }
        }
      }
    }
    //below turns array back to string and returns
    const newArray = inputArray.join("");
    return newArray;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
