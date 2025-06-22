function daylights_savings(date) {
  const jan = new Date(date.getFullYear(), 0, 1);
  const jul = new Date(date.getFullYear(), 6, 1);
  const stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  return date.getTimezoneOffset() < stdTimezoneOffset ? 1 : 0;
}
let dt2 = new Date(prompt("Enter a date-time (YYYY-MM-DDTHH:MM:SS)"));
console.log(daylights_savings(dt2));  
