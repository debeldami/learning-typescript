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

//when to use type annotations
//1, functions that return any type
const json = '{"x": 1, "y": 2}';
const coordinates: { x: number; y: number } = JSON.parse(json);

//2, when a variable is declared but not initialized
let words = ['green', 'red', 'blue'];
let containBlue: boolean;

words.forEach((word) => {
  if (word === 'green') containBlue = true;
});

//3, variable whose type cannot be inferred correctly
let numbers = [1, -23, 4];
let numberAboveZero: boolean | number = false;

numbers.forEach((number) => {
  if (number > 0) numberAboveZero = number;
});
