// Given a linked list, return the element n spaces from the last node in the list. Do not call the
// 'size' method of the linked list. Assume that n will always be less than the length of the list.
// Examples:
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  // slow will be moving 1 node per iteration and fast will be moving 2 nodes per iteration
  let slow = list.head; // or list.getFirst();
  let fast = list.head;

  // while n > 0 we want to advance fast through the list initially. Then subtract so it stops
  // exactly n spaces in front of the head node.
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  // checks while there is a next node after fast, move slow and fast by 1 node.
  // remember, fast is n nodes ahead of slow.
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // therefore, return slow b/c it will be n nodes from final node.
  return slow;
}
