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
    // check there are any nodes in the linkedlist or if index requested does not exist in linkedlist
    if (!this.head || this.size() <= index) {
      return null;
    }

    // if there are nodes set node variable equal to the head node and create a counter index to find
    // the node at the index the user is searching for.
    let node = this.head;
    let counterIndex = 0;

    // check while the counter is less than the desired index, if so set node equal to the next node,
    // if not, we've hit the desired index and can return the node to the user.
    while (counterIndex < index) {
      node = node.next;
      counterIndex++;
    }

    return node;
  }

  removeAt(index) {
    // check there are any nodes in the linkedlist or if index requested does not exist in linkedlist
    // REMEMBER: linkedlist is index like an array: [0, 1, 2, ...]
    if (!this.head || this.size() <= index) {
      return;
    }

    // next check if we want the first node, override it with its next node and thats it.
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    // assigning a value to the previous node of the node we are attempting to remove.
    const prevNode = this.getAt(index - 1);
    // assigning the the node previous to the node we are attempting to remove's next value to
    // skip over its next value (therefore removing it) and assigning it to its next.next value.
    prevNode.next = prevNode.next.next;
  }

  insertAt(data, index) {
    // check there are any nodes in the linkedlist and if not creates one
    // else if, checks if index desired is 0, simply replace head node with new node
    // passed in and assign its .next value as the current head node.
    if (!this.head) {
      this.head = new Node(data);
      return;
    } else if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // to find node previous of our desired index
    // checks if the desired index exists in list, grab it (getAt()), otherwise (or ||), means we're requesting
    // index that is out of bounds and instead assign prevNode to the last node in the list
    const prevNode = this.getAt(index - 1) || this.getLast();
    // create new node with our passed in data and insert it between the prevNode and its former .next reference
    // by assigning new nodes .next to its previous nodes .next
    const newNode = new Node(data, prevNode.next);
    // now completing the insertion by connecting prevNode.next's value to our newly created node
    prevNode.next = newNode;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

}
