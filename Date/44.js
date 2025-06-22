function diff_minutes(date1, date2) {
  let diffMs = Math.abs(date2 - date1); 
  return Math.floor(diffMs / 60000); 
}
let inputDate2 = new Date(prompt("Enter first date-time (YYYY-MM-DDTHH:MM:SS):"));
let inputDate3 = new Date(prompt("Enter second date-time (YYYY-MM-DDTHH:MM:SS):"));
console.log(diff_minutes(inputDate2, inputDate3));  
