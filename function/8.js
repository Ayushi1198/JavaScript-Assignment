function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
let userInput = prompt("Enter a number to check if it's prime:");
let num = parseInt(userInput);
  if (isPrime(num)) {
    console.log(num + " is a prime number.");
  } else {
    console.log(num + " is not a prime number.");
  }

