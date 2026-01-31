console.log(x);
getName();
console.log(getName);
console.log(getName2);
var x = 7;

function getName() {
  console.log("Namaste JavaScript");
}

var getName2 = () => {
  console.log("Namaste JavaScript");
};

/*
#hoisting :-  is a phenomena in javascript by which we can access variable and function 
even before we have  initialization or put some value in it, we can access without any error.

#undefined is a special keyword used to alocate memore to a variable when no code 
run in the execution context

#In function declaration it litereally call  the function
#but in function expression and arrow function it behave exectly as a variable 
and give undefined before it initialized.

#function expression and arroe function are not hoisted as it behaves as a variable
*/
