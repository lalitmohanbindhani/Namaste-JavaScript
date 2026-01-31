/*
callback functions in JS - as we know functions are first class
citizens in JS that means we can take a function and pass it into
another function, the function which we pass in to another 
function is known as callback function.
thus callback gives access to the the whole asynchronous world in
a synchronous single threaded language.

blocking the main thread - java Script has only one call stack, that we say
the main thread.if any operation blocks this call stack that is known 
as blocking the main thread.
*/

// setTimeout(function () {
//   console.log("timer");
// }, 5000);
// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });

// document.getElementById("clickme").addEventListener("click", function xyz() {
//   console.log("Burron Clicked");
// });

setTimeout(function () {
  console.log("timer");
}, 10000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

function addEventListener() {
  let count = 0;
  document.getElementById("clickme").addEventListener("click", function () {
    console.log("Button Clicked", ++count);
  });
}

addEventListener();
