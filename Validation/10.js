function isSameType(a, b) {
  return typeof a === typeof b;
}

console.log(isSameType(5, 10));  
console.log(isSameType('hi', true));  
console.log(isSameType([], {}));    
