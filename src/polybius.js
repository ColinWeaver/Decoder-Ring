// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    // your solution code here

    //variable declarations below
    const inputLowerCase = input.toLowerCase();
    const alphabetString = "abcdefgh";
    const alphabetStringSplit = alphabetString.split("");
    const alphabetStringTwo = "klmnopqrstuvwxyz";
    const alphabetStringTwoSplit = alphabetStringTwo.split("");
    const alphabetArray = [
      ...alphabetStringSplit,
      ["i", "j"],
      ...alphabetStringTwoSplit,
    ];
    const inputArray = inputLowerCase.split("");
    const PolybiusString = "11213141511222324252132333435314243444541525354555";
    const PolybiusArray = [];
    const alphabetArrayForDecode = [
      ...alphabetStringSplit,
      "(i/j)",
      ...alphabetStringTwoSplit,
    ];

    for (let i = 0; i < PolybiusString.length; i += 2) {
      /*'tempArray' for each iteration contains array of 2 characters, turns it to 2 character string,
    then adds it to 'PolybiusArray' as single item*/
      const tempArray = [PolybiusString[i], PolybiusString[i + 1]];
      const tempArrayJoin = tempArray.join("");
      PolybiusArray.push(tempArrayJoin);
    }

    //below is to make array from decoding input that is in the right form to be matched and translated
    const newArray = [];
    //below line splits decoding input into chunks of numbers separated by the spaces
    const inputArraySplitBySpaces = inputLowerCase.split(" ");
    for (let i = 0; i < inputArraySplitBySpaces.length; i++) {
      //each iteration of "i" is a chunk of string characters split by spaces in original input
      const numbersArray = inputArraySplitBySpaces[i].split("");
      for (let j = 0; j < numbersArray.length; j += 2) {
        //inner 'j' loop loops through chunk of characters and separates them into 2 character items in 'newArray'.
        const tempArray = [numbersArray[j], numbersArray[j + 1]];
        const tempNowString = tempArray.join("");
        newArray.push(tempNowString);
      }
      newArray.push(" "); //adds back spaces to new Array after each 'i' iteration
    }
    newArray.pop(); //removes space at the end of array

    //below are for loops for encoding from input index values to 'Polybius' values
    if (encode === true) {
      /*below for loops match 'inputArray' index values to 'alphabetArray' values using
      includes() method then reassigns those index values to 
      'Polybius' values*/
      for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < alphabetArray.length; j++) {
          if (alphabetArray[j].includes(inputArray[i])) {
            inputArray[i] = PolybiusArray[j];
            j = alphabetArray.length - 1; //this ends the 'j' for loop after index reassignment
          }
        }
      }
      //below turns array back to string then returns
      const finishedArray = inputArray.join("");
      return finishedArray;
    }

    //below is for decoding back from 'Polybius' values to English alphabet
    if (encode !== true) {
      //below is to check that decoding input has even number of characters (minus spaces)
      const filteredInputArray = inputArray.filter(
        (inputLowerCase) => inputLowerCase !== " "
      );
      //below checks that non-space characters are even
      if (filteredInputArray.length % 2 !== 0) return false;

      /*below for loops match newArray index values to Polybius then reassigns those index 
      values to English alphabet*/
      for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < PolybiusArray.length; j++) {
          if (newArray[i] === PolybiusArray[j]) {
            newArray[i] = alphabetArrayForDecode[j];
            j = alphabetArrayForDecode.length - 1; //this ends the 'j' for loop after index reassignment
          }
        }
      }
      //below turns array back to string then returns
      const finishedArray = newArray.join("");
      return finishedArray;
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
