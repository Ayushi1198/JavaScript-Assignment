function alphabetize_string(str) {
  return str.replace(/\s/g, '') 
            .split('')          
            .sort()             
            .join('');          
}
let input1 = prompt("Enter a string to alphabetize:");
console.log(alphabetize_string(input1));
