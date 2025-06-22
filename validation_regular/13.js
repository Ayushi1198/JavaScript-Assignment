function isUKPostCode(postcode) {
  postcode = postcode.trim().toUpperCase();
  return postcode.length >= 5 && postcode.length <= 8 && postcode.includes(' ');
}
let ukCode = prompt("Enter UK postcode:");
console.log(isUKPostCode(ukCode) ? "Likely UK postcode" : "Invalid postcode");
