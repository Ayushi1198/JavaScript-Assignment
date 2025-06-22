function calcCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${circumference.toFixed(2)}`);
}

function calcArea(radius) {
  const area = Math.PI * radius * radius;
  console.log(`The area is ${area.toFixed(2)}`);
}


calcCircumference(5);  
calcArea(5);           
