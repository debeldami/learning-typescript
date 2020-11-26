interface Vehicle {
  name: string;
  year: string;
  broken: boolean;
}

const oldCivic = {
  name: 'old civic',
  year: '2000',
  broken: true,
};

const printVehicle = (vehicle: Vehicle) => {
  console.log(
    `name is ${vehicle.name}, manufactured on ${vehicle.year}, broken ${vehicle.broken}`
  );
};

//called printVehicle
printVehicle(oldCivic);
