function ascii_to_hexa(str) {
  return str.split('').map(char => char.charCodeAt(0).toString(16)).join('');
}
let asciiInput = prompt("Enter ASCII text to convert to hexadecimal:");
console.log(ascii_to_hexa(asciiInput));
