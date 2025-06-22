function countVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']; 
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase(); 
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
let userInput = prompt("Enter a sentence to count vowels:");
  let totalVowels = countVowels(userInput);
  console.log("Number of vowels in the string:", totalVowels);
