function alphabetOrder(str) {
  return str.split('').sort().join('');
}
let input=prompt("Enter the input:");
console.log(alphabetOrder(input));