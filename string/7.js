function string_parameterize(str) {
  return str.trim().toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, "-");
}
let input3 = prompt("Enter a string:");
console.log(string_parameterize(input3));
