function calculate_age(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
let input = prompt("Enter your birth date (YYYY-MM-DD):");
let birthDate = new Date(input);
console.log( calculate_age(birthDate));
