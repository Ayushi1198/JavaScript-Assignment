function subStrAfterChars(str, char, pos) {
  let index = str.indexOf(char);
  if (index === -1) return str;
  return pos === 'b'
    ? str.substring(index + 1)
    : str.substring(0, index);
}
let inputStr = prompt("Enter the full string:");
let char = prompt("Enter the character to look for:");
let pos = prompt("Enter 'a' for before, 'b' for after:");
console.log(subStrAfterChars(inputStr, char, pos));
