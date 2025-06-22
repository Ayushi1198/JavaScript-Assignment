function diff_days(date1, date2) {
  let diffMs = Math.abs(date2 - date1);
  return Math.floor(diffMs / (1000 * 60 * 60 * 24)); 
}
let dt3 = new Date(prompt("Enter first date-time (YYYY-MM-DDTHH:MM:SS):"));
let dt4 = new Date(prompt("Enter second date-time (YYYY-MM-DDTHH:MM:SS):"));
console.log(diff_days(dt3, dt4)); 
