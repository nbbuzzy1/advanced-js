const timeouts = [];

const addSetTimeout = (timeout) => {
  timeouts.push(timeout);
}

const removeTimeout = (timeoutId) => {
  const foundTimeout = timeouts.find((timeout) => timeout === timeoutId);
  clearTimeout(foundTimeout);
}

const timeoutOne = setTimeout(() => console.log('this should run'), 1000);
addSetTimeout(timeoutOne);

const timeoutTwo = setTimeout(() => console.log('this should not run'), 1000);
addSetTimeout(timeoutTwo);

removeTimeout(timeoutTwo);

addSetTimeout.__proto__.hasOwnProperty('hi');



class TimeoutManagement {
  timeouts = [];

  addTimeout(timeout) {
    this.timeouts.push(timeout);
  }

  removeTimeout = (timeoutId) => {
    const foundTimeout = timeouts.find((timeout) => timeout === timeoutId);
    clearTimeout(foundTimeout);
  }
}
const timeoutManagerSampleTimeout = setTimeout(() => console.log('this is from the manager'), 1500);

const timeoutManager = new TimeoutManagement();
timeoutManager.addTimeout(timeoutTwo);


////
class TimeoutManager {
  constructor() {
    this.timeouts = new Set();
  }

  addTimeout(callback, args, duration = 2000) {
    const timeoutId = setTimeout(() => {
      callback(...args);
      this.timeouts.delete(timeoutId);
    }, duration);

    this.timeouts.add(timeoutId);
    return timeoutId;
  }

  removeTimeout(timeoutId) {
    if (!this.timeouts.has(timeoutId)) return;

    clearTimeout(timeoutId);
    this.timeouts.delete(timeoutId);
  }
}

const timeoutManager = new TimeoutManager();
const callback = (a, b) => console.log('callback', a, b);
const id = timeoutManager.addTimeout(callback, [2, 3]);
const id2 = timeoutManager.addTimeout(callback, [4, 5]);
console.log(timeoutManager.timeouts.size);
timeoutManager.removeTimeout(id);
console.log(timeoutManager.timeouts.size);
setTimeout(() => console.log(timeoutManager.size), 4000);