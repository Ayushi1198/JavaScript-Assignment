
function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
let n = parseInt(prompt("Enter how many Fibonacci numbers you want:"));
if (isNaN(n) || n <= 0) {
  console.log("Please enter a positive integer.");
} else {
  console.log(`First ${n} Fibonacci numbers:`);
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
}
