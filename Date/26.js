function numeric_month(date) {
  const month = date.getMonth() + 1;
  return month < 10 ? '0' + month : '' + month;
}
let dt2 = new Date(prompt("Enter a date (YYYY-MM-DD)"));
console.log(numeric_month(dt2)); 
