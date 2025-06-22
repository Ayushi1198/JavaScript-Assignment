function isHexadecimal(str) {
  if (!str || typeof str !== 'string') return false;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (
      !(ch >= '0' && ch <= '9') &&
      !(ch >= 'a' && ch <= 'f')
    ) {
      return false;
    }
  }
  return true;
}
let hex = prompt("Enter a hex value:");
console.log(isHexadecimal(hex) ? "Valid hex" : "Invalid hex");
