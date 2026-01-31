/*
We should not block our main thread because as we have only one call stack if the call stack will be blocked all other callback function in the
microtask queue and callback queue will not be executed in the time fram they are set. so SetTimeout has Trust issue.
*/

console.log("Start");

function cb() {
  console.log("Callback");
}

setTimeout(cb, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("Time Expires");
