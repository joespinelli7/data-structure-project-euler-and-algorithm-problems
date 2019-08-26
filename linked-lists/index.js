// Implement classes Node and Linked Lists. See 'directions' document.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next
    }

    return counter;
  }

  getFirst() {
    return this.head
  }

  getLast() {
    // checks if there is a node to begin with.
    if (!this.head) {
      return null;
    }

    // loops through nodes as long as next value is true, when value is false, signifies that is the final node
    // and returns it
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

}
