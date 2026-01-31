// //Function Statement is same as  Function Declaration

// function a() {
//   console.log("a called");
// }

// //Function Expression

// var b = function (param1) {
//   return function xyz() {};
// };

// var t = b();
// console.log(t);

// //Anonymous Function
// //  function () {

// //  };

// //Named Function Expression
// var c = function xyz() {
//   console.log(xyz);
// };

//Different between parameter and argument

//First class Function

//Arrow Function

// console.log("Start");

// setTimeout(function cb() {
//   console.log("Callback");
// }, 5000);

// console.log("End");

// let startTIme = new Date().getTime();
// console.log(startTIme);
// let endTime = startTIme;

// while (endTime < startTIme + 10000) {
//   endTime = new Date().getTime();
// }

// console.log("wWhile Expires");

/*
First class functions - The ability of functions to be used as 
values and can be passed as an argument to another function and can be returns from thr functios 
is know as first class function

*/

// function a() {
//   return function xyz() {};
// }

// console.log(a);
console.log(a);

var a = function () {
  console.log("a called");
};
