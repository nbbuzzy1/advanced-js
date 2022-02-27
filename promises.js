const p = new Promise((resolve, reject) => {

	console.log('first promise ran');
	setTimeout(() => resolve('Success'), 7)
});

const q = new Promise((res, rej) => setTimeout(() => res('hello'), 5));

//promise chaining
p.then((val) => q).then((mes) => console.log(mes));
//Also this
p.then((val) => {
	return q;
}).then((mes) => console.log('this worked', mes));

//promise.all
Promise.all([p, q]).then((results) => console.log(results)).catch((failed) => console.log(failed));

Promise.race([p, q]).then((fastest) => console.log(fastest));

Promise.allSettled([
	Promise.resolve(33),
	new Promise(resolve => setTimeout(() => resolve(66), 0)),
	99,
	Promise.reject(new Error('an error'))
]).then(values => console.log(values));

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]

// If both of these are reject, then the catch is triggered
Promise.race([Promise.reject('error'), Promise.resolve('any resolve')]).then((res) => console.log('any result', res)).catch((e) => console.log('catch', e))

const promise = new Promise((res, rej) => {
  console.log('promise function ran') // this runs when declared
  res(1);
});

const promises = [Promise.reject('fail'), promise, Promise.resolve('abc')];

// This triggers catch because one of the promises failed
Promise.all(promises).then((promiseResults) => {
  for (const result of promiseResults) {
    console.log('promise.all:', result);
  }
}).catch((failedPromises) => console.log('promise.all catch', failedPromises));;

// All three promises (including the rejected) return in Then.  Each is an object with status and value/reason depending on result
Promise.allSettled(promises).then((promiseResults) => {
  for (const result of promiseResults) {
    console.log('promise.allSettled then:', result);
  }
}).catch((failedPromises) => console.log('promise.allSettled catch:', failedPromises));

// Returns first successful promise
Promise.any(promises).then((firstResolvedPromise) => {
  console.log('promise.any then', firstResolvedPromise)
}).catch((failedPromises) => console.log(failedPromises));;

// Returns first finished promise, which is the failed one.  No then
Promise.race(promises).then((firstFinished) => {
  console.log('promise.race then', firstFinished);
}).catch((firstError) => console.log('promise.race catch', firstError));

// Promise chaining
promise.then((res) => Promise.resolve('nested')).then((nested) => Promise.resolve('double nested')).then((val) => console.log(val))
