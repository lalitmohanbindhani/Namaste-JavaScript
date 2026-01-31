function a() {
  b();
  function b() {
    console.log(x);
  }
}

var x = 10;
a();

/*
Scope - Scope means where we can access a specific variable or a function
2 asceprt - what is the scope of varibale and is the variable inside the scope
scope is directlly dependent on the lexical enviroment

Lexical(means in hierarcy) enviroment - it is ccreated whenever a 
global execution context is createdlexical enviroment is the local memory
and the lexical enviroment of its parent.it means where thr code is present physically.

scope chain - scope is nothing but finding the variable in  all the the lexical enviroment 
and its parent enviroment . 
*/
