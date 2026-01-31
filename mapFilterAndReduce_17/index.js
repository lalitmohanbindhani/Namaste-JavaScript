const arr = [2, 3, 1, 7, 4];

const users = [
  { firstName: "Lalit Mohan", lastName: "Bindhani", age: 28 },
  { firstName: "Akshya", lastName: "Saini", age: 30 },
  { firstName: "Donald", lastName: "Trump", age: 54 },
  { firstName: "Elon", lastName: "Musk", age: 28 },
];

const output = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output);

// const output2 = users.reduce(function (acc, curr) {
//   if (curr.age < 30) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);

// console.log(output2);

// function findList(users) {
//   let list = {};

//   for (let i = 0; i < users.length; i++) {
//     if (list[users[i].age]) {
//       list[users[i].age] = ++list[users[i].age];
//     } else {
//       list[users[i].age] = 1;
//     }
//   }

//   return list;
// }

// console.log(findList(users));

// function findList(users) {
//   let list = {};
//   for (let i = 0; i < users.length; i++) {
//     if (list[users[i].age]) {
//       list[users[i].age] = ++list[users[i].age];
//     } else {
//       list[users[i].age] = 1;
//     }
//   }
//   return list;
// }

// console.log(findList(users));

// const output = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(output);
