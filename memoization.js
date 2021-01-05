//Fibonacci Function
const fib = n => {
	if (n < 2) {
		return 1;
	} else {
		//We'll console.log a loader every time we have to recurse
		console.log("loading...");
		return fib(n - 2) + fib(n - 1);
	}
};

//Memoize Function
const memoize = func => {
	const cache = {};

	return (...args) => {
		console.log(args);
		const cache = JSON.stringify(args);

		if (!cache[argsKey]) {
			cache[argsKey] = func(...args);
		}

		return cache[argsKey];
	}
}

const fibMemo = memoize(fib);
console.log(fibMemo(6))
console.log(fibMemo(6))
