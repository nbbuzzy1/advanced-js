// This approach allows the prior functions to be ignored in favor of the last
const debouce = (func) => {
  let timeout;

  return function(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => func.call(this, ...args), 500);
  }
}

const exampleFunc = (arg1) => console.log('my function ran', arg1);

const deboucedExampleFunc = debouce(exampleFunc);

deboucedExampleFunc(234)
deboucedExampleFunc(567)
deboucedExampleFunc(89)
deboucedExampleFunc(10) // prints 10.. Only the last function runs because we clear out the last timeout

// This approach only take the pending function (think a save button we don't care about the inputs)
const debounce2 = (func, duration) => {
  let timeout;

  return (...args) => {
    if (timeout) return;

    timeout = setTimeout(() => {
      func.apply(this, args);
      timeout = null;
    }, duration);
  }
}

const functionExample = () => console.log('hello');

const funcDebounced = debounce2(functionExample, 2000);
funcDebounced()
funcDebounced()
setTimeout(() => {
  funcDebounced();
}, 3000)