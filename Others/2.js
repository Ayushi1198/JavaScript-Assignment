function alphabeticalOrder(str) {
  return str.split('').sort().join('');
}
console.log(alphabeticalOrder("javascript")); 
console.log(alphabeticalOrder("hello"));    
console.log(alphabeticalOrder("OpenAI"));   
