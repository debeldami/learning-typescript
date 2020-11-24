const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 30,
};
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 30];
const tea: Drink = ['light-brown', true, 0];
// tuple[0] = true;

const carSpecs: [number, number] = [11, 3033];
