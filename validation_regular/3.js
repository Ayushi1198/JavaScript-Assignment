function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return "Invalid input.";
  }
  const parts = email.split('@');
  if (parts.length !== 2) return "Email must contain one '@' symbol.";
  const local = parts[0];
  const domain = parts[1];  
  if (local.length === 0 || local[0] === '.' || local[local.length - 1] === '.') {
    return "Invalid local part in email.";
  }
  for (let i = 0; i < local.length - 1; i++) {
    if (local[i] === '.' && local[i + 1] === '.') {
      return "Dots cannot be repeated in local part.";
    }
  }
  const allowed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'*+-/=?^_`{|}~.";
  for (let i = 0; i < local.length; i++) {
    if (!allowed.includes(local[i])) {
      return "Invalid character in email local part.";
    }
  }
  if (domain.length < 3 || domain[0] === '.' || domain[domain.length - 1] === '.' || !domain.includes('.')) {
    return "Invalid domain.";
  }
  return "Valid email address.";
}
let emailInput = prompt("Enter your email address:");
console.log(validateEmail(emailInput));
