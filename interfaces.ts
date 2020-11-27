interface Reportable {
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

const printSummary = (item: Reportable) => {
  console.log(`name is ${item.summary()}`);
};

//called printVehicle
printSummary(oldCivic);
