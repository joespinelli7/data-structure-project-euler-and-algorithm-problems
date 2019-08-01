// Implement a Queue datastructure using two stacks. *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.

// Examples:
// const q = new Queue();
// q.add(1);
// q.add(2);
// q.peek();  // returns 1
// q.remove(); // returns 1
// q.remove(); // returns 2

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    return this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  add(record) {
    this.firstStack.push(record);
  }

  remove() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }

    const record = this.secondStack.pop();
    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }

    return record;
  }

  peek() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }

    const record = this.secondStack.peek();
    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }

    return record;
  }
}
