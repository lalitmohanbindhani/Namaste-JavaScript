console.log(b);

let a = 10;
var b = 100;
const c = 1000;

/*
let and const declarations are hoisted but they are in the 
temporal dead zone for the time being.

let and const are in different memory space then global space 
so we can not access any variable before we put some value in it.

Temporal Deadzone - Temporal deadzone is the time since when the let and const
variable are hoisted and till it is initializide some value.
the time between that is the temporal dead zone
Whenever we try to access a varibale inside the temporal deadzone it gives 
reference error.
when a vairiable is not present in the scope also it gives undefined.

syntax error - if we redeclare a variable using let then we get a syntax error 
and it does not run a single code it reject upfront.

deference between le and const - in let we can first declare a 
varibale and then we can assing a value to that varibale letter.
but in case of const we have to assign a value when we declare a varibale.
other wise we get a syntax error.
we can not reasign a value after we declare a value to a variable in const 
oterwise we get type error.

 

*/
