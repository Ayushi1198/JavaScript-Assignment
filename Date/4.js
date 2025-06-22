
let inputDate = prompt("Enter a date (mm/dd/yyyy):");
let date = new Date(inputDate);
function month_name(date) {
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  return months[date.getMonth()];
}
console.log("Month name:", month_name(date));
