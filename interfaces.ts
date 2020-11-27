interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'old civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `name is ${this.name}and its broken status is ${this.broken}`;
  },
};

const printVehicle = (vehicle: Vehicle) => {
  console.log(`name is ${vehicle.summary()}`);
};

//called printVehicle
printVehicle(oldCivic);
