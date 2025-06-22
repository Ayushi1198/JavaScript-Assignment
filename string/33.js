function remove_non_word(str) {
  return str.replace(/[^\w\s-]/g, '');
}
let input3 = prompt("Enter a string with symbols:");
console.log(remove_non_word(input3));

