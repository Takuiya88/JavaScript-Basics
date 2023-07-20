// Define the size
const wallHeight = 80;

// Calc variables
const width = calc(100);
const height = calc(wallHeight);
const dimensions = [width, height]; // call both dimensions.
console.log(dimensions);


function calc(value) {
  // const newValue = value * 2.54;
  console.log(`The value in cm is : ${value * 2.54} cm`);
  // return 'hello'; This is kind bug!
  // return newValue;
  return value * 2.54;
}


calc(10);
