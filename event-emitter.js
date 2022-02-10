const testNode = document.getElementById('example');
class EventEmitter {
  constructor () {
    this.storedEvents = new Map();
  }

  addEvent(element, eventName, callback) {
    if (!element) return;

    const event = new Event(eventName);
    const eventObj = {
      element,
      callback,
      event,
    }

    this.storedEvents.set(eventName, eventObj);
    element.addEventListener(eventName, callback);
  }

  dispatchEvent(eventName) {
    if (!this.storedEvents.has(eventName)) {
      return;
    }
    
    const { element, event } = this.storedEvents.get(eventName);
    element.dispatchEvent(event)
  }
}

const mockEventEmitter = new EventEmitter();

mockEventEmitter.addEvent(testNode, 'test', (e) => {
  console.log(e);
  testNode.style.backgroundColor = 'green';
})

mockEventEmitter.dispatchEvent('test');
