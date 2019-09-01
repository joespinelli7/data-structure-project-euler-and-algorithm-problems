// Implement classes Node and Linked Lists. See 'directions.html' document for details on how classes handle
// and methods should run.

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

  clear() {
    // set this.head to null b/c nodes are connected through this.next in Node class. Therefore, if we set
    // this.head to null, all nodes previously created in the LinkedList will be erased
    this.head = null;
  }

  removeFirst() {
    // if: first check to see if this.head even exists, b/c if it doesn't, there's nothing to remove
    // else: if we hit the else we know that at least this.head exists and therefore assign it
    // it to the second node in the list using this.head.next
    // to remove/delete an object, you remove any references to them therefore essentially deleting them.
    if (!this.head) {
      return;
    } else {
      this.head = this.head.next;
    }
  }

  removeLast() {
    // check to see if there is no node and also if there is only 1 node in linkedlist
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null;
      return;
    }

    // set a prevNode and nextNode. prevNode will always be node previous the nextNode and end up next value of null (last node).
    // check if nextNode.next is true which would mean the length is at least 3 and therefore push both
    // variables down the node line. (prevNode takes nextNode place and nextNode moves down)
    let prevNode = this.head;
    // nextNode is simply just the whole next object from this.head
    let nextNode = this.head.next;
    // line 87 calling the next object from the this.head.next object
    while(nextNode.next) {
      prevNode = nextNode;
      nextNode = nextNode.next;
    }
    // once there is no longer a next value for nextNode (meaning nextNode.next === null (aka false)), we know that is
    // the final node is the list and therefore set the node previous to nextNode equal to null. Thereby
    // removing any reference to what would've been the final node in the list.
    prevNode.next = null;
  }

  insertLast() {
    const last = this.getLast();
    // if there is no head node, create a node in the this.head spot
    // else, means there is at least 1 node in the chain and therefore grab the final node (using getLast()) and
    // assign it to have a .next value of the new node data being passed in.
    if (!this.head) {
      this.head = new Node(data);
    } else {
      last.next = new Node(data);
    }
  }

  getAt(index) {

  }

}
