const cart = ["shoes", "shirt", "pant", "Kurta"];

Api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummery(function () {
      api.updateWallets();
    });
  });
});

/*
callbacks are super powerfull to handle async operation in JS as asynchronous JS exist because callback exist

1.Callback hell :- one callback inside another callback inside another APIor any if statement dependent on the each other
makes this callback hell, and our code stsrts grows  horizental insted of vertically so the strusture is known as Pyramid of Doom.

2.Inversion of control :- it is like when we loose the control of our code using callbacks.
whenever we have a callback function and we pass it to another function we are giving control of our piece of code to some other code.

*/
