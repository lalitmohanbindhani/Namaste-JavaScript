// function currying can be achieved by 2 Ways
// 1. bind function
// 2.clouseres

// bind method
// we make a copy of one method and we make more methods out of it
// by preseting some arguments inside the functios

function multiply(x, y) {
  console.log(x * y);
}

let multiplyBYTwo = multiply.bind(this, 2, 5);
multiplyBYTwo(3);

let multiplyByThree = multiply.bind(this);
multiplyByThree(2, 3);

// clouseres

function multiply(x) {
  return function (y) {
    console.log(x * y);
  };
}

let result = multiply(2);
result(3);

// bind method
// we make a copy of one method and we make more methods out of it
// by preseting some arguments inside the functios
