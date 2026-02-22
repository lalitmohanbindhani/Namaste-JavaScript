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

function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;

var close = outest()("Lalit");
close();
