function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("Namste JavaScript");
}

x();

/*

1.it behaves because of clousere. clousere is like function along with its lexixal
environment bundled together.even when the function is taken out from the 
original scope still it remembers its lexical environment.
when the setTimeout takes this function and attaches a timer to it and store it
somewhere it remembers the reference to that variable because the enviroment for
all the references are same.

2.secondly javaScript wait for none, it will not wait for timer to expire 
so it will quicky execute the code. by the timer expire the reference to that varibale 
necome 6 hence it print like that.



*/
