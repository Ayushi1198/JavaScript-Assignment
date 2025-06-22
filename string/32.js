function remove_non_ascii(str) {
  return str.replace(/[^\x20-\x7E]/g, '');
}
let input2 = prompt("Enter a string with accented/non-ASCII characters:");
console.log(remove_non_ascii(input2));

