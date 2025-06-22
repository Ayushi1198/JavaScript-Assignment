function isRegExp(value) {
  return value instanceof RegExp;
}

console.log(isRegExp(/abc/));        
console.log(isRegExp(new RegExp('abc')));  
console.log(isRegExp('abc'));       
