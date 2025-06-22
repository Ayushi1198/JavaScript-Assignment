function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    // Check if the current character appears only once
    if (str.indexOf(currentChar) === str.lastIndexOf(currentChar)) {
      return currentChar;
    }
  }
  return null; // No non-repeated character found
}

// 🔹 Get user input
let input = prompt("Enter a string:");
let result = firstNonRepeatedChar(input);

if (result) {
  console.log("The first non-repeated character is:", result);
} else {
  console.log("No unique character found.");
}
