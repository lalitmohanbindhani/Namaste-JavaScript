// console.log("Start");

// function cb() {
//   console.log("Callback");
// }

// setTimeout(cb, 5000);

// console.log("End");

// // let startTime = new Date().getTime();
// // let endTime = startTime;
// // while (endTime < startTime + 10000) {
// //   endTime = new Date().getTime();
// // }

// // console.log("timer Expired");

/*
We should not block our main thread because as we have only one call stack if the call stack will be blocked all other callback function in the
microtask queue and callback queue will not be executed in the time fram they are set. so SetTimeout has Trust issue.
*/

console.log("Start");

setTimeout(function cb() {
  console.log("callback");
}, 5000);

console.log("End");

let startTime = new Date().getTime();
let endTime = startTime;
while (endTime < startTime + 10000) {
  endTime = new Date().getDate();
}

console.log("While Expires");
