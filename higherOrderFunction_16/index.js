// function x() {
//   console.log("x");
// }

// function y(cb) {
//   cb();
// }

// y(x);

/*Higher Order function :- A funcition which takes another function as an argument or return 
a function from it is know as higher order function.*/

const radius = [2, 3, 1, 4, 5];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.map(area));

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
