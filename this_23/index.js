"use strict";

//// this in global space
console.log(this);
// this keyword in global space represent the global object.
// javascript does not run only on browser, it run on other devices also
// for browser the global oject is different , in case of mobile phone it is different,
//  in case of some other device the global object is different .
// so in case of browser  the global object is window.
// and in case of node js the global object is Global

//// this inside a function

function x() {
  console.log(this);
}

// inside function also it is window object but they are not same for global space
// because it behave different in strict and non strict mode.

//// this in strict mode - (this substitution)
//if we are inside a function the value of this depends on strict and non strict mode
//inside strict mode the value of this is undefined
//inside non strict mode the value of this is window object.
// these all happens because of this substitutio - if the value of this is undefined or null anytime
//this will be replaced with global object only in non strict mode.

////this value depends on how this is called (window)
x();
//if the function is called without any reference then it is undefined
window.x();
//if the function is called like window.x(); then the value is window object.

//// this inside a object method

const obj = {
  a: 10,
  x: function () {
    console.log(this.a);
  },
};

//the value of this is always depends on how the function is called.
obj.x();
//if we call like obj.x(); then it will give the object itsel

////call apply bind method (sharing methods)

////this inside arrow function

//// this inside nested arrow function

//// this inside dom
