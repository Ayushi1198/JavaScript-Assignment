function seconds_with_leading_zeros(date) {
  let sec = date.getSeconds();
  return sec < 10 ? '0' + sec : '' + sec;
}
let dt4 = new Date(prompt("Enter a date-time (YYYY-MM-DDTHH:MM:SS)"));
console.log(seconds_with_leading_zeros(dt4)); 
