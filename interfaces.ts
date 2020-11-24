interface vehicle {}

const oldCivic = {
  name: 'old civic',
  year: '2000',
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: string;
  broken: boolean;
}) => {
  console.log(
    `name is ${vehicle.name}, manufactured on ${vehicle.year}, broken ${vehicle.broken}`
  );
};

printVehicle(oldCivic);
