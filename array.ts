let clothMaker: (string | number | boolean)[] = [];
clothMaker = ['armani', 'nike', 1, true];

const carsMaker = ['toyota', 'honda', 'chevy'];

//2d arrays
const gen = [['toyota 1'], [1, [true, false]], new Date()];

const foodStore: string[][] = [['milk'], ['biscuit']];

//help with inference when extracting values
const car = carsMaker[0];

//help with array methods
carsMaker.map((car) => car.toUpperCase());
