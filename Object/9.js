class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return (Math.PI * this.radius ** 2).toFixed(2);
  }

  perimeter() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
}

let r = 5;
let circle = new Circle(r);
console.log("Area:", circle.area());
console.log("Perimeter:", circle.perimeter());
