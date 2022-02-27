const testNode = document.createElement('p');
class EventEmitter {
  constructor () {
    this.storedEvents = new Map();
  }

  addEvent(element, eventName, callback) {
    if (!element) return;

    const event = new Event(eventName);
    const eventObj = {
      element,
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

  deleteEvent(eventName) {
    const event = this.storedEvents.get(eventName);
    if (!event) return;
    // Remove event listener
    event.element.removeEventListener(eventName);

    // Remove event from map
    this.storedEvents.delete(eventName);
  }
}

const mockEventEmitter = new EventEmitter();

mockEventEmitter.addEvent(testNode, 'test', (e) => {
  console.log(e, 'callback worked');
  testNode.style.backgroundColor = 'green';
})

mockEventEmitter.dispatchEvent('test');

class EventEmitter {
  constructor() {
    this.events = new Map();
    this.id = 0;
  }

  subscribe(eventName, callback) {
    this.id++;
    this.events.set(this.id, { eventName, callback });

    return {
      remove: () => {
        console.log(this.events);
        this.events.delete(this.id);
      }
    }
  }

  dispatch(eventName) {
    const eventsToRun = [];

    for (const [, val] of this.events) {
      if (val.eventName === eventName) eventsToRun.push(val.callback);
    }
    for (const callback of eventsToRun) {
      callback();
    }
  }
}

const callback = () => console.log('callback ran');
const callback2 = () => console.log('callback 2 ran');

const test = new EventEmitter();
const eventVal = test.subscribe('hi', callback);
const event2Val = test.subscribe('hi', callback2);

console.log(test.events);
test.dispatch('hi');

