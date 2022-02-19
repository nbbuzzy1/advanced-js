//Sum Function
const sum = (n1, n2) => n1 + n2;

//Memoize Function
const memoize = (func) => {
  const cache = {};

  return (...args) => {
    const argsKey = JSON.stringify(args);
    console.log(...args);
    if (cache[argsKey] === undefined) {
      console.log('nothing in memory here');
      cache[argsKey] = func(...args);
    }

    return cache[argsKey]
  }
}

const memoizedSum = memoize(sum);
console.log(memoizedSum(4, 4));
console.log(memoizedSum(4, 4))

const memoize = (func) => {
  const cache = new Map();
  
  return (...args) => {
    const cacheKey = JSON.stringify(args);

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);    
    }
    
    const result = func.apply(this, args);
    cache.set(cacheKey, result);
  
    return result;
  }
}

const sum = (num1, num2) => {
  return num1 + num2;
}

const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2));
console.log(memoizedSum(3, 3));
console.log(memoizedSum(2, 2));