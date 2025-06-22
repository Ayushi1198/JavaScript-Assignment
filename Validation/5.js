function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

console.log(isNumber(123));  
console.log(isNumber(NaN)); 
console.log(isNumber('123'));    
