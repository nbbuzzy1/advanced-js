//Fibonacci Function
const fib = n => {
	if (n < 2) {
		return 1;
	} else {
		return fib(n - 2) + fib(n - 1);
	}
};

//Memoize Function
const memoize = func => {
	const cache = {};

	return (...args) => {
		const argsKey = JSON.stringify(args);

		if (!cache[argsKey]) {
			console.log('nothing in memory here')
			cache[argsKey] = func(...args);
		}
		console.log('called')
		return cache[argsKey];
	}
}

const fibMemo = memoize(fib);
fibMemo(6);
fibMemo(6);
fibMemo(8)
