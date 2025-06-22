function customTrim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}
let input5 = prompt("Enter a string with extra spaces:");
console.log("Trimmed:", '"' + customTrim(input5) + '"');
