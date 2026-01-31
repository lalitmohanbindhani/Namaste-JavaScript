function z() {
  var b = 20;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();

/*
closures - function along with its lexical scope bundeled together is know as closure.

function along with its reference to  its varibale is returned.


Data hiding and encapsulation - suppose we have a varibale and we want to have data 
privecy over it so that other function and peice of code does not 
have access to that data.
*/
function counter() {
  var count = 0;
  return function incrementCount() {
    count++;
    console.log(count);
  };
}

var counter1 = counter();
counter1();

function Counter2() {
  var count1 = 0;
  this.incrementCounter1 = function () {
    count1++;
    console.log(count1);
  };
  this.decrementCounter1 = function () {
    count1--;
    console.log(count1);
  };
}

var counter3 = new Counter2();
counter3.incrementCounter1();
counter3.decrementCounter1();

/*
disadvantages of clouseres - 
1.over consumption of memeory
2.variables are not garbage collected
3. if not handeled properly then it will lead to memory leckage

garbage collecteor - it freez up the unutilized memory 
*/
