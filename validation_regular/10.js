function isAlphanumeric(value) {
  if (!value) return false;
  for (let i = 0; i < value.length; i++) {
    let ch = value[i];
    let code = ch.charCodeAt(0);
    if (
      !(code >= 48 && code <= 57) &&   
      !(code >= 65 && code <= 90) &&  
      !(code >= 97 && code <= 122)     
    ) {
      return false;
    }
  }
  return true;
}
let alphaNum = prompt("Enter a value:");
console.log(isAlphanumeric(alphaNum) ? "Alphanumeric" : "Not alphanumeric");
