// Add initial container
const container = document.createElement('main');
document.body.append(container);

// Add multiple children nodes
const heading = document.createElement('h1');
heading.innerText = 'Playground';
heading.style.color = 'blue';

const subHeading = document.createElement('h2');
subHeading.textContent = 'Sub header';
subHeading.style.fontWeight = 'bold';

const firstSubHeading = document.createElement('h2');
firstSubHeading.innerHTML = 'First subheader';
firstSubHeading.setAttribute('style', 'color: green;')

// Insert elements with innerHTML
const anchorElementInnerHTML = document.createElement('div');
anchorElementInnerHTML.innerHTML = '<a href="https://google.com"><h4>Link</h4></a>'
anchorElementInnerHTML.querySelector('a').setAttribute('target', '_blank');

container.append(heading);
container.appendChild(subHeading); // prior way of adding child
subHeading.insertAdjacentElement('beforebegin', firstSubHeading);
container.append(anchorElementInnerHTML);


// Delete Node
const temp = document.createElement('p');
temp.innerText = 'I am temporary';
container.append(temp);
setTimeout(() => temp.remove(), 2000);
//container.removeChild(temp); // Prior

// Class adding, verification, removal
const mockClass = 'test-class';
heading.classList.add(mockClass);
console.log(heading.classList.contains(mockClass)); // true
heading.classList.remove(mockClass);
console.log(heading.classList.contains(mockClass)); // false

// Add event listener
const handleEvent = () => alert('you clicked me');
subHeading.addEventListener('click', handleEvent)
// subHeading.removeEventListener('click', handleEvent); notice we need a function here