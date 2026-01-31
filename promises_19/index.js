/*
Promises :- Promises are used to handle asynchronous operation in JS

how to resolve asynchronous function using promises ?
the Api will no longer take the call back function, raither it return a promise object.
we can asume it to be an empty object with some data in it and this data will hold what the create 
order API return to us.it will return undefined at that moment and after the letter point of time the
promise data will fell autometically. then we can write promise.then attach it to our promise object.
so that we have our control over the API.promise will call only once.imautable also.


promises : - promises is an object represent an  eventual completation or rejection of an 
asynchronous operation.
*/

// cart = ["shirt", "pant", "kurtas"];

// createOrderApi(cart, function (orderId) {
//   proceedTopayment(orderId);
// }); // order Details like order Id

// createOrderApi(cart)
//   .then((orderId) => proceedTopayment(orderId))
//   .then((paymentInfo) => showOrderSummery(paymentInfo))
//   .then((paymentInfo) => updateWalletBalance(paymentInfo));

// const user = fetch("https://ap.github.com/users/lalitmohanbindhani");
// console.log(user);
// user.then(function (data) {
//   console.log(data);
// });

const GITHUB_API = "https://api.github.com/users/lalitmohanbindhani";

const promise = fetch(GITHUB_API);
promise.then(function (data) {
  console.log(data);
});

// const cart = ["Shirt", "Pants", "Kurtas"];

// createOrderApi(cart, function (orderId) {
//   proceedToPayment(orderId);
// }); //orderId

// createOrderApi(cart)
//   .then((orderId) => proceedTopayment(orderId))
//   .then((paymentInfo) => showOrderSummery(paymentInfo))
//   .then((paymentInfo) => updateWalletBalance(paymentInfo));

// createOrderApi(cart)
//   .then(orderId => proceedToPayment(orderId))
//   .then(paymentInfo =>showOrderSummery(paymentInfo))
//   .then(paymentInfo=>updateWalletBalance(paymentInfo))
