function uncamel(str, separator = ' ') {
  return str.replace(/([a-z])([A-Z])/g, function(match, lower, upper) {
  return lower + separator + upper;
}).toLowerCase();
}
let input2 = prompt("Enter a camelCase string:");
let sep = prompt("Enter a separator (e.g. '-', '_', or leave blank for space):");
console.log(uncamel(input2, sep || ' '));


