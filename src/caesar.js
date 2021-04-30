// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // your solution code here
    //variable declarations below
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabetString.split("");
    const lowerCaseInput = input.toLowerCase();
    const inputArray = lowerCaseInput.split("");

    //line below tests for incorrect input
    if (shift === 0 || shift > 25 || shift < -25) return false;

    /*nested for loops below to test for matching inputs for encoding
    and decoding*/
    for (let i = 0; i < inputArray.length; i++) {
      for (let j = 0; j < alphabetArray.length; j++) {
        if (inputArray[i] === alphabetArray[j]) {
          //first block of behavior below  after if statement
          if ((shift > 0 && encode) || (shift < 0 && !encode)) {
            let newIndex;
            //below 2 if statements assign new index after shift
            if (shift > 0) newIndex = j + shift;
            if (shift < 0) newIndex = j - shift;
            //below block is if new alphabet index doesn't extend past alphabet
            if (newIndex < alphabetArray.length) {
              inputArray[i] = alphabetArray[newIndex];
            } else {
              //this block is for when new alphabet index wraps around alphabet
              const alphabetLength = alphabetArray.length;
              const restartIndex = newIndex % alphabetLength;
              inputArray[i] = alphabetArray[restartIndex];
            }
            j = alphabetArray.length - 1; //end loop after reassinging index value
          }

          //second block of behavior below after if statement
          if ((shift < 0 && encode) || (shift > 0 && !encode)) {
            let newIndex;
            //below 2 lines assign newIndex values after shift
            if (shift < 0) newIndex = j + shift;
            if (shift > 0) newIndex = j - shift;
            let finalIndex;
            /*below line is if new index is negative value and 
            subtracts it from alphabet length*/
            if (newIndex < 0) finalIndex = alphabetArray.length + newIndex;
            else finalIndex = newIndex;
            inputArray[i] = alphabetArray[finalIndex];
          }
          j = alphabetArray.length - 1; //end loop after reassinging index value
        }
      }
    } //below turns array back to string
    const finalInputArray = inputArray.join("");
    return finalInputArray;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
