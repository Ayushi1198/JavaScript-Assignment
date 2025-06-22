function formatted_string(mask, str, side) {
  str = str.toString();
  if (side === 'l') {
    return (mask + str).slice(-mask.length);
  } else {
    return (str + mask).substring(0, mask.length);
  }
}
let maskInput = prompt("Enter a padding mask:");
let valueInput = prompt("Enter the number or string to pad:");
let sideInput = prompt("Pad left (l) or right (r)? Leave empty for right:");
console.log(formatted_string(maskInput, valueInput, sideInput));
