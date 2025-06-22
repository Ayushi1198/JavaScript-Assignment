console.log("3-digit Armstrong Numbers:");

for (let num = 100; num <= 999; num++) {
  let digits = num.toString().split(""); // split into individual digits
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let digit = parseInt(digits[i]);
    sum += digit * digit * digit; // cube of each digit
  }

  if (sum === num) {
    console.log(num);
  }
}
