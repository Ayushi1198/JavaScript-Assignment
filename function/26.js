function longestUniqueSubstring(str) {
  let longest = "";
  let current = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (current.includes(char)) {
      current = current.slice(current.indexOf(char) + 1);
    }
    current += char;

    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
}
let input = prompt("Enter a string:");
let result = longestUniqueSubstring(input);
console.log( result);
