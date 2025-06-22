function validateCreditCard(number) {
  if (!number || isNaN(number)) {
    return "Invalid input. Please enter numbers only.";
  }
  number = number.toString();
  if (number.length < 13 || number.length > 19) {
    return "Credit card number must be between 13 and 19 digits.";
  }
  let sum = 0;
  let shouldDouble = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number[i]);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0 ? "Valid credit card number." : "Invalid credit card number.";
}
let cardInput = prompt("Enter credit card number:");
console.log(validateCreditCard(cardInput));
