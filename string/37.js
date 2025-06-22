function compare_strings(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
let strA = prompt("Enter first string:");
let strB = prompt("Enter second string:");
console.log(compare_strings(strA, strB)); 
