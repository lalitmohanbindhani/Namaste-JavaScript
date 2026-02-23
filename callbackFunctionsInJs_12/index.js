setTimeout(function () {
  console.log("Hellow Wolrd");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});
