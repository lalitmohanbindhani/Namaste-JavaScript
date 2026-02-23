// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }

//   console.log("Hello World");
// }

// x();

// function z() {
//   var d = 100;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, d);
//     }
//     y();
//   }
//   x();
// }
// z();

// function outest() {
//   var c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }

//     return inner;
//   }
//   return outer;
// }

// var close = outest()("Lalit");
// close();

function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };

  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();
