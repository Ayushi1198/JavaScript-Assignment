function short_months(date) {
  const shortMonths = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return shortMonths[date.getMonth()];
}
let dt3 = new Date(prompt("Enter a date (YYYY-MM-DD)"));
console.log(short_months(dt3)); 
