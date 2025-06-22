function isError(value) {
  return value instanceof Error;
}

console.log(isError(new Error())); 
console.log(isError('Error'));        
console.log(isError({ name: 'Error' })); 
