const add = (a: number, b: number) => a + b;

const sub = (a: number, b: number): number => a - b;

function divide(a: number, b: number): number {
  return a / b;
}

const mult = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

//we only return never when we are sure we never going to reach the end og the function
const throwErr = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWealther = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};
