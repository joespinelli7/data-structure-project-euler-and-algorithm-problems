// 1) Create a node class.  The constructor should accept an argument that gets assigned
// to the data property and initialize an empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF' on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    // filters out all the nodes who's data doesn't match up with the data passed in therefore removing
    // only the node we want to remove.
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    // This allows user to iterate through an entire tree from left to right level by level.
    // create array w/ starting element of root value inside it.
    const arr = [this.root];

    // iterate over the array to check while something is in it.
    while (arr.length) {
      // shift() takes out first element in array.
      const node = arr.shift();
      // then take all of nodes children and push them into array we created.
      // makes it so we're going level by level of tree (breadth first traversal).
      arr.push(...node.children);
      // returns node into function passed in so they can iterate over the entire tree.
      fn(node);
    }
  }
}
