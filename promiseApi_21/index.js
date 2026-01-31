const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("p1 Resolved");
    reject("p1 Rejected");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("p2 Resolved");
    reject("p2 Rejected");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("p3 Resolved");
    reject("p3 Rejected");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.error(err);
    console.log(err.errors);
  });

/*
1.Promise.all - promise.all will take array of promises or itarables
promises.all will wait for all of promises to finish(success case)
as soon as any promises got failed then the promises.all will through an error, the output 
will be error which was return ny the error promises.(failure case)
we can not cancel when we run a promises.
promises.all is kind of fail fast technique.

ex - Promise.all([p1,p2,p3])

2.Promises.allSettled() - we will get the same result as an arry as of promises.all
but in failure case it will still wait for all proises to setteled and after all got setteled 
errspective if success and error and it will give an array of thr number of promises with success 
and error promises.

3.Promise.race([p1,p2,p3]) - as soon as the first promises is resolved it will give me that promise.
basically it  will give the value of the first setteled promise.
if the first promise got failed then error will be thrown.  

first promises whatever is setteled wheater it is resolved or rejected it will return the ressult.

4.Promise.any() - it also take array of promiese 
it will wait for the first promise to get success.if everything fails then the return result will be an aggreate 
error and it will be an array of error.

*/
