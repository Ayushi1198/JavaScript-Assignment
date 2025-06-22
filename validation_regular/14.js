function isCanadaPostCode(code) {
  code = code.toUpperCase().replace(/\s/g, '');
  if (code.length !== 6) return false;
  return isNaN(code[0]) &&
         !isNaN(code[1]) &&
         isNaN(code[2]) &&
         !isNaN(code[3]) &&
         isNaN(code[4]) &&
         !isNaN(code[5]);
}
let caCode = prompt("Enter Canada postcode:");
console.log(isCanadaPostCode(caCode) ? "Valid Canadian postcode" : "Invalid");
