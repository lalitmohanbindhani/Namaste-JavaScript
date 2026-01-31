// y();

// function x() {
//   console.log("Lalit");
// }

// function y(x) {
//   x();
// }

const radius = [3, 2, 1, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

//POLLYFILL FOR MAP

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.map(area));
console.log(radius.calculate(area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// };

// Array.prototype.calculate = function (logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }
//   return output;
// };

// console.log(radius.map(area));
// console.log(radius.calculate(area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

/*
Higher Order function :- A funcition which takes another function as an argument or return 
a function from it is know as higher order function.
*/
