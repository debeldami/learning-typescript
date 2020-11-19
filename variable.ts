let number: number = 5;
let speed: string = 'fast';
let hasName: boolean = false;
let nothing: null = null;
let nothingMuch: undefined = undefined;

//built in objects
const now: Date = new Date();

//type annotations for arrays
const colors: string[] = ['red', 'green', 'blue'];

const myNum: number[] = [1, 2, 3];

const truthy: boolean[] = [true, false];

//type annotations for classes

class Car {}

const toyota: Car = new Car();

const point: { x: number; y: number } = { x: 1, y: 2 };

//function
const printNum: (i: number) => void = (num: number) => {
  console.log(num);
};
