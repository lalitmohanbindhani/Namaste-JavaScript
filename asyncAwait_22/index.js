const API_URL = "https://api.github.com/users/lalitmohanbindhani";

async function handlePromise() {
  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  console.log(jsonValue);
}

handlePromise().catch((err) => console.log(err));

// function getData() {
//   p.then((res) => console.log(res));
//   console.log("Namaste JavaScript");
// }

// getData();

/*
Async - Async is a keyword that is used before a function to create asynchronous function
async function will always return a promise.
either we return a promise or else if we will return a value it will wrap it inside a promise 
and then return a promise.


async and await combo is used to handle promises
await - await is a keyword which can only be used inside an async function.
we right await infront of promise and it will resolve the promises

the async function will suspend the for the time the promise got resolved and then it will come 
again to the call stack, basically JabaScript is not waiting for anyone it quickly execute the code.


fetch() returns a response object and the response object has a body which is a readable stream,
and to make is JSON we have to do response.JSON() and this .JSON() is always a promise,
and when the promise is resolve it will give the value.


async/await is just a syntactctical sugar . JS is using .then and .catch behind the scene.
*/
