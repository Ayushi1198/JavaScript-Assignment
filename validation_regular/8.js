function countVowels(str) {
  if (!str || typeof str !== 'string') return 0;

  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let ch of str) {
    if (vowels.includes(ch)) count++;
  }

  return count;
}
let str8 = prompt("Enter a string:");
console.log(countVowels(str8));
