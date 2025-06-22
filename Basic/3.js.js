const today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
const year = today.getFullYear();

day = day < 10 ? "0" + day : day;
month = month < 10 ? "0" + month : month;

const format1 = month + "-" + day + "-" + year;
const format2 = month + "/" + day + "/" + year;
const format3 = day + "-" + month + "-" + year;
const format4 = day + "/" + month + "/" + year;

console.log("mm-dd-yyyy: " + format1);
console.log("mm/dd/yyyy: " + format2);
console.log("dd-mm-yyyy: " + format3);
console.log("dd/mm/yyyy: " + format4);