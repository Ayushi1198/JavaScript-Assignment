function findLongestWord(str) {
  let words = str.split(" ");
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

let userInput = prompt("Enter a sentence to find the longest word:");
  let longestWord = findLongestWord(userInput);
  console.log("The longest word is:", longestWord);

