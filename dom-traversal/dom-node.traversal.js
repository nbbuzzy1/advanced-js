const targetId = 'testing';

// BFS - Iterative Approach
const searchForNodeIterative = (targetId) => {
  const startingNode = document.body;
  const queue = [startingNode];

  while (queue.length) {
    const node = queue.shift();
    console.log(node);
    if (node.id === targetId) {
      return true;
    }

    for (const child of node.childNodes) {
      queue.push(child);
    }
  }

  return false;
}

console.log('iterative', searchForNodeIterative(targetId));

// DFS Recursive Approach
const startingNode = document.body;

const searchTree = (node, targetId) => {
  if (node.id === targetId){
    return true;
  }else if (node.childNodes.length){
      let foundNode = false;
      let i = 0;

      while (i < node.childNodes.length && !foundNode) {
        const currentNode = node.childNodes[i];
        console.log(currentNode);
        foundNode = searchTree(currentNode, targetId);
        i++;
      }

      return foundNode;
  }
  return false;
}

console.log('recursive', searchTree(startingNode, targetId));