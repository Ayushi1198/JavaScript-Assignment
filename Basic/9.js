let today = new Date();
let currentYear = today.getFullYear();
let christmas = new Date(currentYear, 11, 25); // December is month 11

if (today > christmas) {
  christmas.setFullYear(currentYear + 1);
}

let oneDay = 1000 * 60 * 60 * 24;
let daysLeft = Math.ceil((christmas - today) / oneDay);

console.log("Days left until Christmas: " + daysLeft);
