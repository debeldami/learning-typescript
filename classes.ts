class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('hunk hunk');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheel: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('voom');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(3, 'green');
car.startDriving();
