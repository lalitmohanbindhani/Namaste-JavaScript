const arr = [2, 3, 1, 5, 4];

// function double(x) {
//   return x * 2;
// }

// function triple(x) {
//   return x * 3;
// }

// const output = arr.map((x) => x.toString(2));
// console.log(output);

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax(arr));

// const output = arr.reduce(function (acc, curr) {
//   if (acc < curr) {
//     acc = curr;
//   }
//   return acc;
// }, 0);

// console.log(output);

const users = [
  { firstName: "Lalit Mohan", lastName: "Bindhani", age: 28 },
  { firstName: "Akshya", lastName: "Saini", age: 30 },
  { firstName: "Donald", lastName: "Trump", age: 54 },
  { firstName: "Elon", lastName: "Musk", age: 28 },
];

const output = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output);
