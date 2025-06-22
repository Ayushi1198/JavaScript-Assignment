let Input = prompt("Enter a date to check if it's weekend (e.g., Nov 15, 2014):");
let Date = new Date(Input);
function is_weekend(dateStr) {
  let day = new Date(dateStr).getDay();
  if (day === 0 || day === 6) {
    return "weekend";
  }
  return "weekday";
}
console.log(is_weekend(Input));
