function getUniqueCharacters(str) {
  let seen = {};
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!seen[char]) {
      result += char;
      seen[char] = true;
    }
  }

  return result;
}
let input = prompt("Enter a string:");
let output = getUniqueCharacters(input);
console.log("Unique characters:", output);
