let multiply = function (x, y) {
  console.log(x * y);
};

let multiply2 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

// let multipyByTwo = multiply.bind(this, 2);
// multipyByTwo(3);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);

let multiplyByThree = multiply2(3);
multiplyByThree(5);
