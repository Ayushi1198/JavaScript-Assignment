function hours_without_zeroes(date) {
  return date.getHours(); 
}

let dt2 = new Date(prompt("Enter a date-time (YYYY-MM-DDTHH:MM:SS)"));
console.log(hours_without_zeroes(dt2)); 
