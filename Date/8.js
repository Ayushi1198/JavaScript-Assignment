let date1 = prompt("Enter the first date (MM/DD/YYYY):");
let date2 = prompt("Enter the second date (MM/DD/YYYY):");

function diffindays(date1Str, date2Str) {
  let dt1 = new Date(date1Str);
  let dt2 = new Date(date2Str);
  let diffTime = dt2 - dt1;
  let diffDays = diffTime / (1000 * 60 * 60 * 24); 
  return Math.round(diffDays);
}

console.log(diffindays(date1, date2));
