function isPureJsonObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

console.log(isPureJsonObject({ a: 1 })); 
console.log(isPureJsonObject([]));       
console.log(isPureJsonObject(null));   
