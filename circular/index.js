// Given a linked list, return true if the list is circular, false if it is not.
// A circular linked list, is a list that does not have a tail node. Instead,
// last node points to an earlier node within the list.
// This is a problem and linked lists should not be circular.
// Examples:
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  // slow will be moving 1 node per iteration and fast will be moving 2 nodes per iteration
  let slow = list.head; // or list.getFirst();
  let fast = list.head;

  // first checks if there is at least a next node in the list (in case uneven amount of nodes in list).
  // AND(&&) checks while the list has at least 2 more nodes inside it, move slow by 1 node and fast by 2 nodes.
  // IF at any point slow === false, we know that the final node is pointing to another node in the
  // list and we are dealing with a circular list, so return true.
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    // we are comparing if they are the exact same instance node.
    if (slow === fast) {
      return true;
    }
  }

  // otherwise, if either fast.next or fast.next.next is false(null), signifies there must be an end
  // to list, so we break out of the while loop and return false.
  return false;
}
