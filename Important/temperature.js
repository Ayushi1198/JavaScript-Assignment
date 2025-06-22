function celsiusToFahrenheit() {
  let celsius = 30; 
  let fahrenheit = (celsius * 9/5) + 32;
  console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
}

function fahrenheitToCelsius() {
  let fahrenheit = 86; 
  let celsius = (fahrenheit - 32) * 5/9;
  console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);
}


celsiusToFahrenheit();
fahrenheitToCelsius();
