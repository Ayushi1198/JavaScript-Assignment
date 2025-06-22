function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
function longestPalindromeSubstring(s) {
  let maxLength = 0;
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substr = s.slice(i, j);
      if (isPalindrome(substr) && substr.length > maxLength) {
        maxLength = substr.length;
        longest = substr;
      }
    }
  }
  return longest;
}
let input = prompt("Enter a string:");
let result = longestPalindromeSubstring(input);
console.log("The longest palindromic substring is:", result);
