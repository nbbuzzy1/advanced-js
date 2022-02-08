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