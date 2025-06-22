class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  volume() {
    return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
  }
}

const c = new Cylinder(5, 10);
console.log("Volume:", c.volume());
