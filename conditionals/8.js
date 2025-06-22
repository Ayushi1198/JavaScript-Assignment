
function sumOfSquares(n) {
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}
function isHappy(num) {
  let seenNumbers = [];
  while (num !== 1 && !seenNumbers.includes(num)) {
    seenNumbers.push(num);
    num = sumOfSquares(num);
  }
  return num === 1;
}
let count = 0;
let num = 1;

console.log("First 5 Happy Numbers:");

while (count < 5) {
  if (isHappy(num)) {
    console.log(num);
    count++;
  }
  num++;
}

