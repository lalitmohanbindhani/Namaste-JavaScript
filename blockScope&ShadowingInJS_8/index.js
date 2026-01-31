{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);

/*
{} - this is block - valid java script code
block is know as compont statement


block scope - block scope means what are variable and functions are 
accessed inside the block. let and const are block scope

shadowing in JS - if we have a same named varibale outside 
the block then it shadows that varibale

illigal shadowing-: we can not shadow a let varivable inside  a block using same varibale
it will gives reference error

we can shadaw let using let but can not shadow let using var
ex -:
let a = 10;
{
    var a = 100
}

var is a function scope
*/
