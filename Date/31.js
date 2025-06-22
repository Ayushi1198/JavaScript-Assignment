function uppercase_meridiem(date) {
  const hours = date.getHours();
  return hours >= 12 ? 'PM' : 'AM';
}
let dt3 = new Date(prompt("Enter a date-time (YYYY-MM-DDTHH:MM)"));
console.log(uppercase_meridiem(dt3));
