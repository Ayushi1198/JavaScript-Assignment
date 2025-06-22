function diff_weeks(date1, date2) {
  let diffMs = Math.abs(date2 - date1);
  return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7)); 
}
let dt5 = new Date(prompt("Enter first date-time (YYYY-MM-DDTHH:MM:SS):"));
let dt6 = new Date(prompt("Enter second date-time (YYYY-MM-DDTHH:MM:SS):"));
console.log(diff_weeks(dt5, dt6)); 
