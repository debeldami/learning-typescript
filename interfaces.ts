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

const drink = {
  color: 'brown',
  carbonated: false,
  sugar: 40,
  summary(): string {
    return `my drink has ${this.sugar} sugar`;
  },
};

const printSummary = (item: Reportable) => {
  console.log(`name is ${item.summary()}`);
};

//called printVehicle
printSummary(oldCivic);
printSummary(drink);
