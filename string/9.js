function capitalize_Words(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
let input5 = prompt("Enter a sentence:");
console.log(capitalize_Words(input5));
