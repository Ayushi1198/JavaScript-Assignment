function isFirstCharUppercase(str) {
  if (!str || typeof str !== 'string' || str.trim() === '') {
    return "Invalid input";
  }

  const firstChar = str.charAt(0);
  if (firstChar >= 'A' && firstChar <= 'Z') {
    return "First character is uppercase.";
  } else {
    return "First character is not uppercase.";
  }
}
let input1 = prompt("Enter a string:");
console.log(isFirstCharUppercase(input1));
