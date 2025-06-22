function humanize_format(num) {
  if (num === undefined || num === null || isNaN(num)) return '';
  num = Number(num);
  if (num % 100 >= 11 && num % 100 <= 13) return num + "th";
  switch (num % 10) {
    case 1: return num + "st";
    case 2: return num + "nd";
    case 3: return num + "rd";
    default: return num + "th";
  }
}
let numberInput = prompt("Enter a number to humanize:");
console.log(humanize_format(numberInput));
