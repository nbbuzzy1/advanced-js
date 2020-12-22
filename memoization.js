function memo(func) {
	var cache = {};
	return function () {
		var key = JSON.stringify(arguments);
		if (cache[key]) {
			console.log(cache)
			return cache[key];
		}
		else {
			val = func.apply(null, arguments);
			cache[key] = val;
			return val;
		}
	}
}