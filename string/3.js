function string_to_array(str) {
  return str.trim().split(" ");
}
let input3 = prompt("Enter a sentence:");
console.log(string_to_array(input3)); 
