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
	const results = {};

	return (...args) => {
		console.log(args);
		const argsKey = JSON.stringify(args);

		if (!results[argsKey]) {
			results[argsKey] = func(...args);
		}

		return results[argsKey];
	}
}

const fibMemo = memoize(fib);
console.log(fibMemo(6))
console.log(fibMemo(6))
