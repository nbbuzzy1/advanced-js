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
  console.log(e);
  testNode.style.backgroundColor = 'green';
})

mockEventEmitter.dispatchEvent('test');
