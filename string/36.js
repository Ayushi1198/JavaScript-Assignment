function zeroFill(number, width, sign) {
  let numStr = Math.abs(number).toString().padStart(width, '0');
  if (sign === '-') return '+' + numStr;
  return numStr;
}
let num = prompt("Enter a number:");
let width = prompt("Enter total width:");
let sign = prompt("Enter sign ('-' for plus sign, leave empty for none):");
console.log(zeroFill(Number(num), parseInt(width), sign));
