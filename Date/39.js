function diff_to_GMT(date) {
  let offset = -date.getTimezoneOffset() / 60; 
  return (offset >= 0 ? "+" : "") + offset.toFixed(3);
}
let dt1 = new Date(prompt("Enter a date-time (YYYY-MM-DDTHH:MM:SS)"));
console.log(diff_to_GMT(dt1)); 
