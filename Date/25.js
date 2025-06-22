function full_month(date) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return months[date.getMonth()];
}
let dt1 = new Date(prompt("Enter a date (YYYY-MM-DD)"));
console.log(full_month(dt1)); 
