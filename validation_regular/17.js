function isHexColor(str) {
  if (typeof str !== 'string') return false;
  if (str[0] !== '#') return false;

  let hex = str.slice(1);

  if (hex.length !== 3 && hex.length !== 6) return false;

  for (let char of hex.toLowerCase()) {
    if (
      !(char >= '0' && char <= '9') &&
      !(char >= 'a' && char <= 'f')
    ) {
      return false;
    }
  }

  return true;
}
let hexColor = prompt("Enter a hex color code:");
console.log(isHexColor(hexColor) ? "Valid hex color" : "Invalid hex color");
