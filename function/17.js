function countLetters(str) {
  let counts = {};
  str = str.toLowerCase().replace(/[^a-z]/g, '');

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (counts[char] === undefined) {
  counts[char] = 1;
} else {
  counts[char] = counts[char] + 1;
}
  }

  return counts;
}
let input = prompt("Enter a string:");
let result = countLetters(input);
console.log("Letter occurrences:");
for (let letter in result) {
  console.log(letter + ": " + result[letter]);
}
