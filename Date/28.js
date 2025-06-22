function full_year(date) {
  return date.getFullYear();
}
let dt4 = new Date(prompt("Enter a date (YYYY-MM-DD)"));
console.log(full_year(dt4)); 
