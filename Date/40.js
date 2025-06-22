function timezone_offset_in_seconds(date) {
  return -date.getTimezoneOffset() * 60;
}
let dt2 = new Date(prompt("Enter a date-time (YYYY-MM-DDTHH:MM:SS)"));
console.log(timezone_offset_in_seconds(dt2));
