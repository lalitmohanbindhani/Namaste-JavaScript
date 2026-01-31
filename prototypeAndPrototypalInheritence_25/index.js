// let object = {
//   name: "Akshay",
//   city: "Dehradun",
//   getIntro: function () {
//     console.log(this.name + " from " + this.city);
//   },
// };

// let object2 = {
//   name: "Aditya",
// };

Function.prototype.myBind = function () {
  console.log("Lalit");
};

function fun() {}
// object2.__proto__ = object;

function fun2() {}

/*
prototype - It is an object that is attached to each function, array or objects whatever we 
cretae in JS an object  is attach to it.

whenver we create a Js object or array or any function Js engine automatically without even
letitng us know attaches the object or fucntion with some hidden proporties and functions and 
these comes via prototype.

in arr.__proto__ - this is where js is putting all the functios and methords

prototypal chain - it is sort of a chain that is 
arr.__proto__ is Array.prototype
and Array.prototype's prototype is Object.prototype
and Object.prototype's prototype is null
this called prototype chain.
*/
