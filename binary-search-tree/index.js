// 1) Implement the Node class to create a binary search tree.  The constructor should initialize values
// 'data', 'left', and 'right'.
// 2) Implement the 'insert' method for the Node class.  Insert should accept an argument 'data', then
// create an insert a new node at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node class.  Contains should accept a 'data' argument and
// return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // recurisve solution:
  insert(data) {
    if (data < this.data && this.left) {
      // recursion here if data is less than this.data and this.left is already assigned,
      // we want to run the whole method again except with this.left as node we're focusing on.
      this.left.insert(data);
    } else if (data < this.data) {
      // Else If, then we want to create a new node on the left side b/c there is no current left node.
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      // same logic here except with right hand side node.
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    
  }
}
