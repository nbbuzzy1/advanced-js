function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function handleErrorAndValue(error, value) {
        if (error == null) {
          resolve(value);
        } else {
          reject(error);
        }
      }

      func.call(this, ...args, handleErrorAndValue)
    });
  }
}
