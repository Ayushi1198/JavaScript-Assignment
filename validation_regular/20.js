function isAlphaDashUnderscore(str) {
  if (!str || typeof str !== 'string') return false;
  for (let ch of str) {
    if (
      !(ch >= 'A' && ch <= 'Z') &&
      !(ch >= 'a' && ch <= 'z') &&
      ch !== '-' &&
      ch !== '_'
    ) {
      return false;
    }
  }
  return true;
}
let testStr = prompt("Enter a value:");
console.log(isAlphaDashUnderscore(testStr) ? "Valid (alpha, dash, underscore)" : "Invalid");
