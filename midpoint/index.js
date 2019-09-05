// Return the 'middle' node of a linked list. If the list has an even number of elements, return
// the node at the end of the first half of the list. *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate through the list one time.
// My implementation of creating nodes and linked lists is in this repository.
// Example:
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  // slow will be moving 1 node per iteration and fast will be moving 2 nodes per iteration
  let slow = list.head;
  let fast = list.head;

  // first checks if there is at least a next node in the list (in case uneven amount of nodes in list).
  // AND(&&) checks while the list has at least 2 more nodes inside it, move slow by 1 node and fast by 2 nodes.
  // so if both of those cases are false, return slow which will be at midpoint of list.
  // can't use OR(||) here b/c variables set inside while loop would be null.
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
