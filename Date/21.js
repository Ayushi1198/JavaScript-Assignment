function long_Days(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}
let dt2 = new Date(prompt("Enter date in format YYYY-MM-DD"));
console.log(long_Days(dt2));
