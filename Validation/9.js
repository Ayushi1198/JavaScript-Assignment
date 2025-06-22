function isChar(value) {
  return typeof value === 'string' && value.length === 1;
}

console.log(isChar('A'));  
console.log(isChar('Ab'));   
console.log(isChar(1));      
