function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i; 
    }
  }
  if (sum === num) {
    console.log(num + " is a perfect number.");
  } else {
    console.log(num + " is not a perfect number.");
  }
}
let input = prompt("Enter a number:");
let number = parseInt(input);
if (isNaN(number) || number <= 0) {
  console.log("Please enter a valid positive number.");
} else {
  isPerfectNumber(number);
}