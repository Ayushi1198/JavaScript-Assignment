function diff_hours(date1, date2) {
  let diffMs = Math.abs(date2 - date1); 
  return Math.floor(diffMs / (1000 * 60 * 60));
}
let dt1 = new Date(prompt("Enter first date-time (YYYY-MM-DDTHH:MM:SS):"));
let dt2 = new Date(prompt("Enter second date-time (YYYY-MM-DDTHH:MM:SS):"));
console.log(diff_hours(dt1, dt2));
