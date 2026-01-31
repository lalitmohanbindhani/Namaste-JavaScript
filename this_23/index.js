"use strict";

console.log(this);

function x() {
  console.log(this);
}
x();
window.x();

const student1 = {
  name: "Lalit",
  printName: function () {
    console.log(this.name);
  },
};

const student2 = {
  name: "Adyasa",
};

student1.printName.call(student2);

const obj = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

obj.x();

const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj2.x();
/*
in global space the value of this referes to global object in all javascript run time enviroment.
in browser this refers window object 
in node this refers to global

inside a function the value of this depends om strict and non strict mode
in non strict mode it is window object and in strict mode the value of this is undefined

this depends on how thew function is called 

this substitution :- if the value is this keyword is undefined or null then js will replaced this 
keyword with global object only in non strict mode.

arrow function doesn't provide there own this binding. it retains the value of 
this enclosing lexical context.

this inside DOM element - reference to the HTML element.
*/
