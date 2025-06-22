function short_year(date) {
  return date.getFullYear().toString().slice(-2).padStart(2, '0');
}
let dt1 = new Date(prompt("Enter a date (YYYY-MM-DD)"));
console.log(short_year(dt1)); 
