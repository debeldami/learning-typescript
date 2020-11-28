class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('hunk hunk');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

// class Car extends Vehicle {
//   private drive(): void {
//     console.log('voom');
//   }

//   startDriving(): void {
//     this.drive();
//     this.honk();
//   }
// }

// const car = new Car();
// car.startDriving();
