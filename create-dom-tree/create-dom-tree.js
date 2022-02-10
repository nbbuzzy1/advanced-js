//For a recursive description of DOM elements i.e. var dom = { type:'div', props:{id:'hello', children:[{type:'h1', children:'HELLO'}]}}. Define a function that prepares a actual dom elements.
const start = document.body;
const dom = { 
  type:'div', 
  props:
    {
      id:'hello', 
      children: [
        {
          type:'h1', 
          children: 'HELLO',
        },
        {
          type: 'div',
          props: {
            children: [
              {
                type: 'p',
                children: 'This is a paragraph',
              }
            ]
          }
        }
      ]
    }
  }

const createElement = (dom) => {
  const newElement = document.createElement(dom.type);
  if (dom?.props?.id) newElement.setAttribute('id', dom.props.id);
  if (dom.children) newElement.innerText = dom.children;

  return newElement;
}

const createDomTree = (parent, dom) => {
  // Add element to DOM
  const newElement = createElement(dom);
  parent.append(newElement);

  // Recursively call function for dom children
  const newElementChildren = dom?.props?.children;

  if (newElementChildren?.length) {
    for (const child of newElementChildren) {
      createDomTree(newElement, child)
    }
  }
}

createDomTree(start, dom);