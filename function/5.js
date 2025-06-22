function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(capitalized);
  }

  return result.join(" ");
}

let userInput = prompt("Enter a sentence:");

if (userInput === null || userInput.trim() === "") {
  console.log("Please enter a valid sentence.");
} else {
  let output = capitalizeWords(userInput);
  console.log("Output:", output);
}
