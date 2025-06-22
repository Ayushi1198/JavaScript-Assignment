function isValidTime(str) {
  let parts = str.split(':');
  if (parts.length !== 2 && parts.length !== 3) return false;
  let [h, m, s] = parts.map(Number);
  if (isNaN(h) || isNaN(m) || (parts.length === 3 && isNaN(s))) return false;
  if (h < 0 || h > 23 || m < 0 || m > 59) return false;
  if (parts.length === 3 && (s < 0 || s > 59)) return false;
  return true;
}
let time = prompt("Enter time (hh:mm or hh:mm:ss):");
console.log(isValidTime(time) ? "Valid time" : "Invalid time");
