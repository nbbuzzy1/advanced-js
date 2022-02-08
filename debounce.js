const debouce = (func) => {
  let timeout;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => func(...args), 500);
  }
}

const exampleFunc = (arg1) => console.log('my function ran', arg1);

const deboucedExampleFunc = debouce(exampleFunc);

deboucedExampleFunc(234)
deboucedExampleFunc(567)
deboucedExampleFunc(89)
deboucedExampleFunc(10) // prints 10

// Only the last function runs because we clear out the last timeout