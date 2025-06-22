function isValidSSN(ssn) {
  if (ssn.length !== 11) return false;
  if (ssn[3] !== '-' || ssn[6] !== '-') return false;
  let parts = ssn.split('-');
  return parts.every(part => !isNaN(part));
}
let ssn = prompt("Enter SSN (XXX-XX-XXXX):");
console.log(isValidSSN(ssn) ? "Valid SSN" : "Invalid SSN");
