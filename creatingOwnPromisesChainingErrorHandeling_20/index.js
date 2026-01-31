/*This kind of structure makes our code much more readable 
maintainable and developer friendly.
*/

const cart = ["Shirt", "Pants", "Kurtas"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPatyment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("Whatever happen  i will be caled definitely");
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //validateCart
    //createOrder
    //orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not defined");
      reject(err);
    } else {
      const orderId = 12345;
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPatyment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

function validateCart() {
  return false;
}
