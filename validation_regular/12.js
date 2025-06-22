function isUSZip(zip) {
  if (typeof zip !== 'string') return false;

  if (zip.length === 5 || zip.length === 10) {
    let digits = zip.replace('-', '');
    if (digits.length === 9 && !isNaN(digits)) {
      if (zip.length === 10 && zip[5] !== '-') return false;
      return true;
    }
    if (zip.length === 5 && !isNaN(zip)) return true;
  }
  return false;
}
let zip = prompt("Enter US ZIP code:");
console.log(isUSZip(zip) ? "Valid ZIP code" : "Invalid ZIP code");
