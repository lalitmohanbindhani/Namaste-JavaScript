function z() {
  var b = 900;
  function x() {
    var a = 20;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
