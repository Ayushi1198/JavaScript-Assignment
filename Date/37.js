function get_timezone(date) {
  return Intl.DateTimeFormat('en-US', { timeZoneName: 'long' })
         .formatToParts(date)
         .find(part => part.type === 'timeZoneName')
         .value;
}
let dt1 = new Date(prompt("Enter a date-time (YYYY-MM-DDTHH:MM:SS)"));
console.log(get_timezone(dt1)); 
