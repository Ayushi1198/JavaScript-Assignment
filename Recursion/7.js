function isEven(n) {
  if (n < 0) n = -n;         
  if (n === 0) return true;  
  if (n === 1) return false; 
  return isEven(n - 2);      
}
let number = parseInt(prompt("Enter a number to check if it's even:"));
if (isNaN(number)) {
  console.log("Please enter a valid number.");
} else {
  if (isEven(number)) {
    console.log(number + " is even.");
  } else {
    console.log(number + " is odd.");
  }
}
