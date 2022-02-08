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