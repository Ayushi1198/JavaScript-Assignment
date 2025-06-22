function stringCombinations(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let combo = '';
    for (let j = i; j < str.length; j++) {
      combo += str[j];
      result.push(combo);
    }
  }
  return result;
}
let userInput = prompt("Enter a string to get all combinations:");
if (userInput === null || userInput.trim() === "") {
  console.log("No input provided.");
} else {
  let combinations = stringCombinations(userInput);
  console.log(combinations);
}
