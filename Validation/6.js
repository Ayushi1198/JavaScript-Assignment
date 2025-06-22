function isObject(value) {
  return value !== null && typeof value === 'object';
}

console.log(isObject({})); 
console.log(isObject([]));      
console.log(isObject(null));      
