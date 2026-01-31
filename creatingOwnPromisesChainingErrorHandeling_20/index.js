// const cart = ["shoes", "pants", "kurtas"];

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }

//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 3000);
//     }
//   });

//   return pr;
// }

// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     resolve("Payment Successfully");
//   });
// }

// function validateCart() {
//   return false;
// }

/*
This kind of structure makes our code much more readable 
maintainable and developer friendly.
*/

const cart = ["Shirt", "Pants", "Kurtas"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validateCart
    //orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

function validateCart(cart) {
  return true;
}
