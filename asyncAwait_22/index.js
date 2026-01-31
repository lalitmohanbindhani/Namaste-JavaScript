// async function will always return a promise , there is 2 case:
// either we return a promise or else if we do not return  a promise , say we return a
// string or boolean or number it will wrap it inside a promise and will return the promise.

// const p = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("Promise Resolved Value");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("Promise Resolved Value");
//   }, 20000);
// });

// // async and await combo are used to handle promises.

// async function handlePromise() {
//   console.log("Hellow World");

//   const data = await p;
//   console.log("Namaste javascript");
//   console.log(data);

//   const data2 = await p2;
//   console.log("Namaste javascript 2");
//   console.log(data2);
// }

// handlePromise();

// function getData() {
//   p.then((res) => console.log(res));
//   console.log("Namaste javascript");
// }

// getData();

//const GITHUB_API = "https://api.github.com/users/lalitmohanbindhani";
const GITHUB_API = "https://invalidUserApi";

async function handlePromise() {
  const data = await fetch(GITHUB_API);
  const json = await data.json();
  console.log(json);
}

handlePromise().catch((err) => console.log(err));
