class Vehicle {
  protected honk(): void {
    console.log('hunk hunk');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('voom');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDriving();
