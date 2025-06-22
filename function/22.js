function countLetterOccurrences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
let inputString = prompt("Enter a string (e.g., w3resource.com):");
let inputLetter = prompt("Enter the letter to count (e.g., o):");
if (inputLetter.length !== 1) {
  console.log("Please enter a single letter.");
} else {
  let result = countLetterOccurrences(inputString, inputLetter);
  console.log("The letter '" + inputLetter + "' appears " + result + " times in \"" + inputString + "\".");
}
