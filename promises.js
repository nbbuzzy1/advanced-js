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