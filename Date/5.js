
let inputDate1 = prompt("Enter the first date (mm/dd/yyyy hh:mm):");
let inputDate2 = prompt("Enter the second date (mm/dd/yyyy hh:mm):");
let date1 = new Date(inputDate1);
let date2 = new Date(inputDate2);
function compare_dates(date1, date2) {
  if (date1.getTime() === date2.getTime()) {
    return "Date1 = Date2";
  } else if (date1 > date2) {
    return "Date1 > Date2";
  } else {
    return "Date1 < Date2";
  }
}
console.log(compare_dates(date1, date2));
