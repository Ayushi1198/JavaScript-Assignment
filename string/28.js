function hex_to_ascii(hexStr) {
  let ascii = '';
  for (let i = 0; i < hexStr.length; i += 2) {
    ascii += String.fromCharCode(parseInt(hexStr.substr(i, 2), 16));
  }
  return ascii;
}
let hexInput = prompt("Enter hexadecimal to convert to ASCII:");
console.log(hex_to_ascii(hexInput)); 
